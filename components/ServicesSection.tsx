'use client';

import React from 'react';
import { Camera, Layers, Zap, Film } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { 
    id: '01', 
    title: 'Digital Direction', 
    description: 'We craft high-performance websites and digital environments engineered for conversion and visual impact.',
    tags: ['Next.js', 'UI/UX', 'E-commerce']
  },
  { 
    id: '02', 
    title: 'Visual Architecture', 
    description: 'Developing cinematic brand identities and visual systems that command attention and trust.',
    tags: ['Branding', 'Strategy', 'Design']
  },
  { 
    id: '03', 
    title: 'Motion Production', 
    description: 'World-class video production and motion sequences designed to tell your story with cinematic precision.',
    tags: ['Cinematography', 'Editing', 'VFX']
  },
  { 
    id: '04', 
    title: 'Creative Marketing', 
    description: 'Strategic campaign assembly and deployment across digital landscapes for maximum brand reach.',
    tags: ['Growth', 'Ads', 'Social']
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-40 bg-transparent px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-xl">
            <span className="text-white/60 text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] uppercase mb-4 block">Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-medium leading-[1.1] tracking-[-0.02em] text-white mb-5">What we do</h2>
            <p className="text-white/70 text-[14px] sm:text-[15px] max-w-sm mb-10 leading-relaxed block">
              We leverage cutting-edge technology and artistic precision to deliver high-end visual solutions for global brands.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-start gap-8 group py-12 border-b border-white/5 transition-colors duration-500 hover:border-white/20">
                <span className="text-[14px] font-semibold text-white/20 tracking-widest mt-2">{service.id}</span>
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium text-[#F5F5F5] tracking-tight mb-4 group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-[15px] max-w-lg leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-50 mt-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-white border border-white/20 px-3 py-1 rounded-[4px]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
