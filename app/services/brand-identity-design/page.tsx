'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Palette, PenTool, Layout, Layers, Sparkles, Box } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 06',
  heroHeading: 'Premium Brand',
  heroSubheading: 'Identity Design.',
  heroDescription: 'Defining bespoke brand identities that tell your unique story and command market authority.',
  heroBg: '/branding/imgi_27_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Identity',
  valuePropAccent: 'Signature.|',
  valuePropBody: [
    'Your brand identity is your chance to make a lasting impression. Great design is more than just looks—it creates trust and authority.',
    '"We create beautiful, modern design systems that help your business look professional and connect with people through premium visuals."',
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Services.',
  bentoMainImage: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png',
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
    { title: 'Brand One', category: 'Identity', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Logo Design Two', category: 'Modern', image: '/branding/imgi_87_0acb20f2a9708d15596ec5b6f421c6fa6758729b-1152x1320.png' },
    { title: 'Identity Three', category: 'Premium', image: '/branding/imgi_89_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { title: 'Visuals Four', category: 'Corporate', image: '/branding/imgi_15_18990d94cc12d56d2c085ecdfb53274f8750514a-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Palette, title: 'Identity Systems', description: 'Complete brand identities that define your business across all your marketing.', image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png' },
    { icon: PenTool, title: 'Bespoke Logos', description: 'High-end logo marks designed to project brand trust and unique style.', image: '/branding/imgi_34_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png' },
    { icon: Layout, title: 'Visual Guides', description: 'Comprehensive design guidelines to keep your brand consistent everywhere.', image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Layers, title: 'Asset Packs', description: 'Professional social media, ad, and print assets ready for your final launch.', image: '/branding/imgi_29_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png' },
    { icon: Box, title: '3D Elements', description: 'High-quality graphics and 3D visual assets that make your brand stand out.', image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png' },
    { icon: Sparkles, title: 'Digital Arts', description: 'Beautiful visuals and transitions for a completely immersive experience.', image: '/branding/imgi_14_5e9ab7d8c5dc501821b63b40e00a3655d56fdbab-1040x584.png' },
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
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Brand Equity', value: '4.5x' },
      { label: 'Market Share', value: '18%' },
      { label: 'Recall', value: '95%' },
    ],
    caseStudy: {
      title: 'Success: A New Identity for Lumina',
      image: '/branding/imgi_15_18990d94cc12d56d2c085ecdfb53274f8750514a-2800x1450.png',
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
