import React from 'react';
import { motion } from 'motion/react';

const logos = [
  { name: 'AWS', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_Logo.svg' },
  { name: 'Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
  { name: 'DigitalOcean', url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg' },
  { name: 'Hetzner', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Hetzner_Online_Logo.svg' },
  { name: 'OVHcloud', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/OVH_logo.svg' }
];

export default function LogoWall() {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <p className="text-center text-text-secondary/40 text-xs font-bold uppercase tracking-[0.2em] mb-10">
          Compatible avec les standards du marché
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo) => (
            <motion.img
              key={logo.name}
              src={logo.url}
              alt={logo.name}
              className="h-6 md:h-8 w-auto object-contain"
              whileHover={{ scale: 1.1, opacity: 1 }}
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
