'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Palette, PenTool, Layout, Layers, Sparkles, Box } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 06',
  heroHeading: 'Premium Brand',
  heroSubheading: 'Identity Design.',
  heroDescription: 'Defining bespoke brand identities that tell your unique story and command market authority.',
  heroBg: 'https://images.unsplash.com/photo-1541462608141-ad43d574b4a?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Identity',
  valuePropAccent: 'Signature.|',
  valuePropBody: [
    'Your brand identity is your chance to make a lasting impression. Great design is more than just looks—it creates trust and authority.',
    '"We create beautiful, modern design systems that help your business look professional and connect with people through premium visuals."',
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Brand Strategy',
  bentoMainSubtitle: 'Design',
  bentoMainDesc: 'Bespoke brand identities that clearly define your mission and connect with your audience.',
  bentoCard1Title: 'Custom Logos',
  bentoCard1Desc: 'Professional logo systems that help your business stand out and project brand authority.',
  bentoCard1Icon: PenTool,
  bentoCard2Title: 'Visual Assets',
  bentoCard2Icon: Sparkles,

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Brand One', category: 'Identity', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Logo Design Two', category: 'Modern', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Identity Three', category: 'Premium', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600' },
    { title: 'Visuals Four', category: 'Corporate', image: 'https://images.unsplash.com/photo-1541462608141-ad43d574b4a?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Palette, title: 'Identity Systems', description: 'Complete brand identities that define your business across all your marketing.', image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=400' },
    { icon: PenTool, title: 'Bespoke Logos', description: 'High-end logo marks designed to project brand trust and unique style.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400' },
    { icon: Layout, title: 'Visual Guides', description: 'Comprehensive design guidelines to keep your brand consistent everywhere.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400' },
    { icon: Layers, title: 'Asset Packs', description: 'Professional social media, ad, and print assets ready for your final launch.', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=400' },
    { icon: Box, title: '3D Elements', description: 'High-quality graphics and 3D visual assets that make your brand stand out.', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Digital Arts', description: 'Beautiful visuals and transitions for a completely immersive experience.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Design',
  processSubheading: 'Pipeline.',
  processSteps: [
    { title: 'Visual Analysis', description: 'Researching your market and audience to find the best creative direction.' },
    { title: 'Identity Blueprint', description: 'Defining the core logo, colors, and typographic style for your brand.' },
    { title: 'System Building', description: 'Architecting the modular components and identity rules for your team.' },
    { title: 'Delivery', description: 'Micro-refining every pixel for maximum brand authority and trust.' },
  ],

  differentiators: [
    { title: 'Modern Style', description: 'Clean, professional designs that help your business project authority.' },
    { title: 'Results Focus', description: 'Every design choice is made to help you achieve your business goals.' },
    { title: 'Bespoke Quality', description: 'Completely custom design systems built specifically for you.' },
  ],

  results: {
    company: 'Eon Studio',
    quote: "The brand identity they built for our series changed everything. We look so much more professional now.",
    author: 'Markus Vane',
    role: 'Creative Director @ Eon',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Customer Trust', value: '45%' },
      { label: 'Site Visits', value: '30%' },
      { label: 'Growth Rating', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Eon',
      image: 'https://images.unsplash.com/photo-1492691223115-f86a89694073?auto=format&fit=crop&q=80&w=400&v=2',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your brand identity?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Services',
  faqs: [
    { question: 'How long to produce?', answer: 'A custom brand identity typically takes 8–10 weeks from research to final files.' },
    { question: 'What do I receive?', answer: 'You will receive a complete design toolkit including logo, fonts, colors, and assets.' },
    { question: 'Is it custom design?', answer: 'Yes, every design we build is 100% original and built specifically for you.' },
  ],
};

export default function BrandIdentityPage() {
  return <ServicePageTemplate data={data} />;
}
