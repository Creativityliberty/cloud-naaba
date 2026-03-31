import React from 'react';
import { motion } from 'motion/react';

const logos = [
  { name: 'AWS', url: 'https://icongr.am/simple/amazonaws.svg?color=FFFFFF' },
  { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/FFFFFF' },
  { name: 'Azure', url: 'https://icongr.am/simple/microsoftazure.svg?color=FFFFFF' },
  { name: 'DigitalOcean', url: 'https://cdn.simpleicons.org/digitalocean/FFFFFF' },
  { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
  { name: 'Hetzner', url: 'https://cdn.simpleicons.org/hetzner/FFFFFF' },
  { name: 'OVHcloud', url: 'https://cdn.simpleicons.org/ovh/FFFFFF' },
  { name: 'Cloudflare', url: 'https://cdn.simpleicons.org/cloudflare/FFFFFF' },
  { name: 'Snyk', url: 'https://cdn.simpleicons.org/snyk/FFFFFF' }
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
