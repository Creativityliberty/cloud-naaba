import React from 'react';
import { motion } from 'motion/react';
import { 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  CheckCircle2, 
  Boxes, 
  ShieldCheck, 
  Zap,
  Terminal,
  Activity,
  Layers,
  Container
} from 'lucide-react';

const compatibilityList = [
  {
    category: "Systèmes d'Exploitation",
    icon: Terminal,
    items: [
      { name: "Ubuntu 20.04 - 24.04", status: "Certifié", logo: "https://cdn.simpleicons.org/ubuntu/FFFFFF" },
      { name: "Debian 10 - 12", status: "Certifié", logo: "https://cdn.simpleicons.org/debian/FFFFFF" },
      { name: "Rocky Linux / RHEL", status: "Certifié", logo: "https://icongr.am/simple/redhat.svg?color=FFFFFF" },
      { name: "Windows Server 2022", status: "Supported", logo: "https://cdn.simpleicons.org/windows/FFFFFF" },
      { name: "CentOS Stream", status: "Supported", logo: "https://cdn.simpleicons.org/centos/FFFFFF" },
    ]
  },
  {
    category: "Bases de Données & Stockage",
    icon: Database,
    items: [
      { name: "PostgreSQL 12 - 16", status: "Optimisé", logo: "https://cdn.simpleicons.org/postgresql/FFFFFF" },
      { name: "Redis 6.x - 7.x", status: "Optimisé", logo: "https://cdn.simpleicons.org/redis/FFFFFF" },
      { name: "MongoDB 5.x +", status: "Supported", logo: "https://cdn.simpleicons.org/mongodb/FFFFFF" },
      { name: "MySQL / MariaDB", status: "Supported", logo: "https://cdn.simpleicons.org/mysql/FFFFFF" },
      { name: "MinIO (Object Storage)", status: "Native", logo: "https://cdn.simpleicons.org/minio/FFFFFF" },
    ]
  },
  {
    category: "Infrastructure & Cloud",
    icon: Globe,
    items: [
      { name: "Bare Metal (Toute marque)", status: "Native", logo: "https://cdn.simpleicons.org/serverfault/FFFFFF" },
      { name: "VMware / Proxmox", status: "Native", logo: "https://cdn.simpleicons.org/proxmox/FFFFFF" },
      { name: "Amazon Web Services (AWS)", status: "Hybrid", logo: "https://icongr.am/simple/amazonaws.svg?color=FFFFFF" },
      { name: "Google Cloud Platform", status: "Hybrid", logo: "https://cdn.simpleicons.org/googlecloud/FFFFFF" },
      { name: "OVHcloud / Hetzner", status: "Hybrid", logo: "https://cdn.simpleicons.org/ovh/FFFFFF" },
    ]
  },
  {
    category: "Conteneurs & Orchestration",
    icon: Boxes,
    items: [
      { name: "Docker 24.x +", status: "Optimisé", logo: "https://cdn.simpleicons.org/docker/FFFFFF" },
      { name: "Kubernetes (K8s)", status: "Optimisé", logo: "https://cdn.simpleicons.org/kubernetes/FFFFFF" },
      { name: "Docker Compose", status: "Native", logo: "https://cdn.simpleicons.org/docker/FFFFFF" },
      { name: "Portainer", status: "Supported", logo: "https://cdn.simpleicons.org/portainer/FFFFFF" },
    ]
  }
];

export default function CompatibilityPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1200px] h-[600px] bg-accent-primary/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto max-w-[1240px] px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center md:text-left mb-24 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 mb-8"
          >
            <ShieldCheck className="w-3 h-3 text-accent-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-primary">Certification Ecosystème</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black font-display tracking-tight leading-[1.05] mb-8 text-gradient"
          >
            Une plateforme conçue pour tout connecter.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary leading-relaxed font-medium"
          >
             Libérez votre infrastructure de l'enfermement propriétaire. CloudNaaba est compatible nativement avec vos environnements actuels et futurs.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: "OS Certifiés", val: "12+", icon: Terminal },
            { label: "Bases de Données", val: "10+", icon: Database },
            { label: "Clouds Supportés", val: "15+", icon: Globe },
            { label: "Orchestrateurs", val: "4", icon: Layers },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center group hover:bg-white/[0.04] transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <stat.icon className="w-6 h-6 text-accent-primary" />
              </div>
              <div className="text-3xl font-black text-text-primary mb-1">{stat.val}</div>
              <div className="text-[10px] text-text-secondary/60 font-black uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {compatibilityList.map((cat, catIdx) => (
            <div key={catIdx}>
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                     <cat.icon className="w-5 h-5 text-accent-primary" />
                  </div>
                  <h2 className="text-3xl font-black text-text-primary font-display">{cat.category}</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {cat.items.map((item, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     whileHover={{ y: -5 }}
                     className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-accent-primary/30 transition-all flex items-center justify-between shadow-lg"
                   >
                     <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-accent-primary/50 overflow-hidden p-2">
                         <img src={item.logo} alt={item.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                       </div>
                       <div>
                         <div className="text-text-primary font-black text-sm tracking-tight">{item.name}</div>
                         <div className="text-[10px] text-text-secondary/40 font-bold uppercase tracking-widest mt-0.5">{item.status}</div>
                       </div>
                     </div>
                     <CheckCircle2 className="w-5 h-5 text-accent-primary opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                   </motion.div>
                 ))}
               </div>
            </div>
          ))}
        </div>

        {/* "And much more" section */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-accent-primary/40 via-accent-primary/10 to-transparent relative group"
        >
          <div className="bg-bg-primary rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
             <div className="max-w-xl">
                <div className="text-accent-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4">Écosystème Illimité</div>
                <h3 className="text-3xl md:text-5xl font-black font-display tracking-tight text-text-primary mb-6">
                   Et bien plus encore...
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed font-medium">
                   Notre support technique ne s'arrête pas à cette liste. Avec plus de 100 applications prêtes à l'emploi et une compatibilité universelle, nous couvrons tous vos besoins.
                </p>
             </div>
             
             <button 
                onClick={() => window.location.href = '/marketplace'}
                className="group/btn flex items-center gap-4 px-10 py-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-primary transition-all shadow-xl hover:-translate-y-1 active:scale-95 shrink-0"
             >
                <div className="text-left">
                   <div className="text-[10px] font-black uppercase tracking-widest text-text-secondary/60">Voir la liste complète</div>
                   <div className="text-lg font-black text-text-primary">Visiter la AI Marketplace</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent-primary/20 flex items-center justify-center group-hover/btn:bg-accent-primary transition-all">
                   <Boxes className="w-6 h-6 text-accent-primary group-hover/btn:text-white" />
                </div>
             </button>
          </div>
        </motion.div>

        {/* Checker CTA */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-accent-primary/20 via-white/[0.02] to-transparent border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-[0.05]">
             <Activity className="w-48 h-48 text-accent-primary" />
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-8">Votre technologie n'est pas dans la liste ?</h3>
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
               Notre système d'agent universel est conçu pour s'adapter. Contactez nos ingénieurs pour une vérification technique gratuite.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="relative px-10 py-5 rounded-2xl bg-accent-primary text-white font-black uppercase text-sm tracking-widest shadow-xl shadow-accent-primary/20 hover:scale-105 active:scale-95 transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />
              Parler à un ingénieur
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
