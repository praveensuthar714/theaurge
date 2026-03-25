'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Palette, Layers, Box, Layout, Sparkles, PenTool } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 02',
  heroHeading: 'Brand &',
  heroSubheading: 'UI/UX Design.',
  heroDescription: 'Creating high-end brand identities and conversion-led digital experiences for businesses worldwide.',
  heroBg: 'https://images.unsplash.com/photo-1541462608141-ad43d574b4a?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Visual',
  valuePropAccent: 'Excellence.|',
  valuePropBody: [
    'Your brand identity is your chance to make a lasting impression. Great design is more than just looks—it creates trust and authority.',
    '"We create beautiful, modern design systems that help your business look professional and convert more visitors."',
  ],

  bentoHeading: 'Design',
  bentoSubheading: 'Expertise.',
  bentoMainImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Brand Identity',
  bentoMainSubtitle: 'Design',
  bentoMainDesc: 'Bespoke brand identities that clearly define your mission and connect with your audience.',
  bentoCard1Title: 'Premium UI/UX',
  bentoCard1Desc: 'Modern user experiences that make your digital products easy and enjoyable to use.',
  bentoCard1Icon: Layout,
  bentoCard2Title: 'Visual Assets',
  bentoCard2Icon: Sparkles,

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Brand One', category: 'Identity', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'UX Project Two', category: 'Product Design', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600' },
    { title: 'Logo Three', category: 'Branding', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Web App Four', category: 'UI Design', image: 'https://images.unsplash.com/photo-1541462608141-ad43d574b4a?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Palette, title: 'Brand Identity', description: 'Complete identity systems that define your business across all channels.', image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=400' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-friendly interfaces designed to guide your customers through your site.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400' },
    { icon: Box, title: 'Visual Assets', description: 'High-quality graphics and 3D elements that make your brand stand out.', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400' },
    { icon: Layout, title: 'Product Design', description: 'End-to-end design for digital products that your users will love.', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=400' },
    { icon: PenTool, title: 'Typography', description: 'Custom typography and font choices that fit your brand perfectly.', image: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Graphic Design', description: 'Beautiful visuals for social media, ads, and digital marketing.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Design',
  processSubheading: 'Phase.',
  processSteps: [
    { title: 'Discovery', description: 'Researching your market and understanding your design goals.' },
    { title: 'Strategy', description: 'Planning the visual direction and creative approach for your brand.' },
    { title: 'Design', description: 'Creating the actual designs and identity systems for your project.' },
    { title: 'Delivery', description: 'Finalizing every pixel and delivering your high-end design assets.' },
  ],

  differentiators: [
    { title: 'Modern Aesthetic', description: 'Clean, professional designs that project trust and authority.' },
    { title: 'Results Driven', description: 'Every design choice is made to help you achieve your business goals.' },
    { title: 'Bespoke Quality', description: 'Completely custom design systems built specifically for you.' },
  ],

  results: {
    company: 'Eon Studio',
    quote: "The design system built for us changed everything. We look so much more professional now.",
    author: 'Markus Vane',
    role: 'Creative Director @ Eon',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Customer Trust', value: '+45%' },
      { label: 'Site Traffic', value: '30%' },
      { label: 'Design Score', value: '9.8/10' },
    ],
    caseStudy: {
      title: 'Eon: Designing for Market Dominance',
      image: 'https://images.unsplash.com/photo-1492691223115-f86a89694073?auto=format&fit=crop&q=80&w=400',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your brand identity?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Design',
  faqs: [
    { question: 'How long does it take?', answer: 'A custom brand system typically takes 8–10 weeks from research to final files.' },
    { question: 'What do I receive?', answer: 'You will receive a complete design toolkit including logo, fonts, colors, and UI assets.' },
    { question: 'Is it custom design?', answer: 'Yes, every design we create is 100% original and built for your business from scratch.' },
  ],
};

export default function DesignPage() {
  return <ServicePageTemplate data={data} />;
}
