import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, X, Bot, Zap, ShieldCheck, Server, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { chatWithNaabaAssist } from '../services/gemini';
import { useNavigate } from 'react-router-dom';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// --- RichText Renderer ---
const RichText: React.FC<{ content: string; onNavigate?: (path: string) => void }> = ({ content, onNavigate }) => {
  const navigate = useNavigate();

  const handleNav = onNavigate || navigate;

  return (
    <div className="space-y-3">
      {content.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // Internal link [text](path) -> button navigation
        const linkMatch = trimmed.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          const [, text, path] = linkMatch;
          const isInternal = path.startsWith('/');
          if (isInternal) {
            return (
              <button
                key={i}
                onClick={() => handleNav(path)}
                className="flex items-center justify-between gap-3 w-full bg-white/5 border border-accent-primary/20 px-4 py-3 rounded-xl text-sm font-bold text-text-primary hover:bg-accent-primary/10 hover:border-accent-primary/40 transition-all group"
              >
                <span className="text-left">{text}</span>
                <ArrowRight className="w-4 h-4 text-accent-primary shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            );
          }
          return (
            <a key={i} href={path} target="_blank" rel="noreferrer"
              className="flex items-center justify-between gap-3 w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm font-bold text-text-primary hover:bg-white/10 transition-all"
            >
              <span>{text}</span>
              <ArrowRight className="w-4 h-4 text-accent-primary shrink-0" />
            </a>
          );
        }

        // All-caps heading
        if (trimmed === trimmed.toUpperCase() && trimmed.length > 3 && !trimmed.startsWith('-')) {
          return (
            <p key={i} className="text-[10px] font-black uppercase tracking-widest text-accent-primary mt-4 mb-1">
              {trimmed}
            </p>
          );
        }

        // List item
        if (trimmed.startsWith('- ')) {
          return (
            <div key={i} className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
              <p className="text-text-secondary leading-relaxed text-sm">{trimmed.slice(2)}</p>
            </div>
          );
        }

        return (
          <p key={i} className="text-text-secondary leading-relaxed text-sm">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};

// --- Quick Reply Button ---
const QuickReply: React.FC<{ icon: React.FC<any>; text: string; onClick: () => void }> = ({ icon: Icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold hover:bg-accent-primary/10 hover:border-accent-primary/30 hover:text-accent-primary transition-all whitespace-nowrap text-text-secondary"
  >
    <Icon className="w-3.5 h-3.5 text-accent-primary" />
    {text}
  </button>
);

// --- Typing Indicator ---
const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-white/5 border border-white/10 px-5 py-4 rounded-2xl rounded-tl-none flex items-center gap-3">
      <div className="flex gap-1">
        {[0, 0.2, 0.4].map((delay, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
        ))}
      </div>
      <span className="text-[10px] font-black uppercase tracking-widest text-accent-primary/80">Analyse en cours…</span>
    </div>
  </div>
);

// --- Main Chatbot Component ---
interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Bonjour ! Je suis Naaba Assist., votre guide CloudNaaba. 🚀\n\nComment puis-je vous aider ?\n\n- Nos offres et tarifs\n- Le déploiement IA local (Ollama)\n- Notre infrastructure sécurisée\n- Toute autre question sur la plateforme"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const handleSend = async (textOverride?: string) => {
    const text = textOverride || input.trim();
    if (!text || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text }]);
    setLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithNaabaAssist(text, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  const quickActions = [
    { icon: Zap, text: "Nos tarifs", query: "Quels sont les plans tarifaires de CloudNaaba ?" },
    { icon: Server, text: "Déployer l'IA", query: "Comment déployer Ollama sur CloudNaaba ?" },
    { icon: ShieldCheck, text: "Sécurité", query: "Quels sont les piliers de sécurité de CloudNaaba ?" },
    { icon: Mail, text: "Contact", query: "Comment contacter l'équipe CloudNaaba ?" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (mobile) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Chat Window */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] h-[75vh] sm:h-[600px] max-h-[700px] z-50 flex flex-col rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            style={{ background: 'linear-gradient(160deg, rgba(10,10,15,0.98) 0%, rgba(5,5,8,0.99) 100%)' }}
          >
            {/* Header */}
            <div className="shrink-0 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/20 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-accent-primary flex items-center justify-center shadow-lg shadow-accent-primary/30">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-black rounded-full" />
                </div>
                <div>
                  <p className="text-sm font-black text-text-primary tracking-tight">Naaba Assist.</p>
                  <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest">En ligne</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-white/10 text-text-secondary hover:text-text-primary transition-all"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-5" style={{ scrollbarWidth: 'none' }}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'model' && (
                    <div className="w-7 h-7 rounded-xl bg-accent-primary/20 border border-accent-primary/30 flex items-center justify-center shrink-0 mr-2 mt-1">
                      <Bot className="w-3.5 h-3.5 text-accent-primary" />
                    </div>
                  )}
                  <div className={`max-w-[85%] px-5 py-4 rounded-2xl ${
                    m.role === 'user'
                      ? 'bg-accent-primary text-white rounded-tr-none'
                      : 'bg-white/5 border border-white/10 rounded-tl-none'
                  }`}>
                    {m.role === 'user'
                      ? <p className="text-sm font-bold">{m.text}</p>
                      : <RichText content={m.text} onNavigate={(path) => { navigate(path); onClose(); }} />
                    }
                  </div>
                </motion.div>
              ))}
              {loading && <TypingIndicator />}
            </div>

            {/* Quick Actions */}
            <div className="shrink-0 px-5 pb-3 pt-1">
              <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {quickActions.map((a, i) => (
                  <QuickReply key={i} icon={a.icon} text={a.text} onClick={() => handleSend(a.query)} />
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="shrink-0 px-5 pb-5 pt-3 border-t border-white/10">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 focus-within:border-accent-primary/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Posez votre question…"
                  className="flex-1 bg-transparent outline-none text-sm text-text-primary placeholder:text-text-secondary/40 font-medium"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || loading}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    input.trim() && !loading
                      ? 'bg-accent-primary text-white hover:bg-accent-primary/80'
                      : 'bg-white/5 text-text-secondary/40 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Floating Trigger Button ---
export const ChatbotTrigger: React.FC<{ onClick: () => void; isOpen: boolean }> = ({ onClick, isOpen }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 bg-accent-primary text-white rounded-2xl px-5 py-3.5 shadow-[0_8px_32px_rgba(124,58,237,0.4)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.55)] transition-shadow group"
    aria-label="Ouvrir Naaba Assist."
  >
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
          <X className="w-5 h-5" />
        </motion.div>
      ) : (
        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
          <MessageCircle className="w-5 h-5" />
        </motion.div>
      )}
    </AnimatePresence>
    <span className="text-sm font-black tracking-tight">
      {isOpen ? 'Fermer' : 'Naaba Assist.'}
    </span>
    {!isOpen && (
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-2 h-2 bg-green-400 rounded-full"
      />
    )}
  </motion.button>
);
