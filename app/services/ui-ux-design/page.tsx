'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Layout, Smartphone, Sparkles, Layers, Box, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 13',
  heroHeading: 'UI/UX',
  heroSubheading: 'Design.',
  heroDescription: 'A great product is nothing without a great experience. We build intuitive interfaces that guide your users and drive conversions in real-time.',
  heroBg: '/capabilities/digital-experiences.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Experience',
  valuePropAccent: 'Behavioral Mapping.|',
  valuePropBody: [
    'We focus on the intersection of aesthetics and functionality. By understanding user behavior and cognitive load, we design products that feel natural and effortless to use. Our goal is to reduce friction and increase brand loyalty.',
    '"Design is not just what it looks like; it’s how it works. We build high-fidelity experiences that project authority and build instant trust."'
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Design Systems',
  bentoMainDesc: 'Creating scalable design languages that ensure consistency across every digital touchpoint.',
  bentoCard1Title: 'User Mapping',
  bentoCard1Desc: 'Deep research into user archetypes and journey maps to optimize product flow.',
  bentoCard1Icon: Smartphone,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Zap,
  bentoCard2Image: '/performance-marketing/imgi_43_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png',

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Nexus Interface', category: 'App Design', image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Dashboard', category: 'SaaS UX', image: '/performance-marketing/imgi_43_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { title: 'Vortex Visuals', category: 'Interactive Design', image: '/branding/imgi_87_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png' },
    { title: 'Global Sync', category: 'Design System', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Layout, title: 'Product UI', description: 'Visually stunning and high-fidelity interfaces built for modern brands.', image: '/branding/imgi_39_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Smartphone, title: 'UX Research', description: 'Mapping user behavior and identifying friction points in your product.', image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png' },
    { icon: Sparkles, title: 'Prototype Lab', description: 'Building interactive models to test functionality before full scale build.', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { icon: Layers, title: 'Design Systems', description: 'Standardizing your brand visual language for long-term scalability.', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { icon: Box, title: '3D Interactions', description: 'Adding depth and immersion to your product through high-end 3D visual ops.', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png' },
    { icon: Zap, title: 'Conversion Sync', description: 'Refining the interface to guide users effortlessly toward key business results.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Design',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'User Mapping', description: 'Defining the archetypes and core journey for your digital product.' },
    { title: 'Wireframe Build', description: 'Architecting the functional layout and functional logic of the UX.' },
    { title: 'Visual Design', description: 'Applying the high-fidelity UI and brand identity to the interface.' },
    { title: 'Micro-refining', description: 'Polishing interactions and transitions for the final premium experience.' },
  ],

  differentiators: [
    { title: 'Behavioral Led', description: 'Designing around how users actually think and interact digitally.' },
    { title: 'Technical Quality', description: 'High-fidelity visual output that projects institutional authority.' },
    { title: 'Scalable Logic', description: 'Building design systems that can grow and adapt with your business.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "Our user retention increased significantly after the redesign. The interface is not just beautiful; it’s logical.",
    author: ' Elena Ross',
    role: 'Creative Lead @ Nexus',
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Retention Lift', value: '72%' },
      { label: 'Usability', value: '99%' },
      { label: 'Conversion', value: '3.4x' },
    ],
    caseStudy: {
      title: 'Success: Experience Flow for Nexus Dashboard',
      image: '/branding/imgi_14_5e9ab7d8c5dc501821b63b40e00a3655d56fdbab-1040x584.png',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your digital product?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Services',
  faqs: [
    { question: 'What is a design system?', answer: 'It is a standardized visual language that ensures your brand is consistent across every platform.' },
    { question: 'Do you do user research?', answer: 'Yes, we map archetypes and behavioral flows to optimize the functional journey.' },
    { question: 'Is it mobile responsive?', answer: 'Absolutely. Every design we build is optimized for a seamless mobile experience.' },
  ],
};

export default function UIUXDesignPage() {
  return <ServicePageTemplate data={data} />;
}
