'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Palette, Layers, Box, Layout, Sparkles, PenTool } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 02',
  heroHeading: 'Brand &',
  heroSubheading: 'UI/UX Design.',
  heroDescription: 'Creating high-end brand identities and conversion-led digital experiences for businesses worldwide.',
  heroBg: '/designandcreativehero.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Visual',
  valuePropAccent: 'Excellence.|',
  valuePropBody: [
    'Your brand identity is your chance to make a lasting impression. Great design is more than just looks—it creates trust and authority.',
    '"We create beautiful, modern design systems that help your business look professional and convert more visitors."',
  ],

  bentoHeading: 'Design',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/images/design-bento-1.png',
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
    { title: 'Brand One', category: 'Identity', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'UX Project Two', category: 'Product Design', image: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png' },
    { title: 'Logo Three', category: 'Branding', image: '/branding/imgi_87_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png' },
    { title: 'Web App Four', category: 'UI Design', image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Palette, title: 'Brand Identity', description: 'Complete identity systems that define your business across all channels.', image: '/branding/imgi_27_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png' },
    { icon: Layers, title: 'UI/UX Design', description: 'User-friendly interfaces designed to guide your customers through your site.', image: '/images/design-hero-mockup.png' },
    { icon: Box, title: 'Visual Assets', description: 'High-quality graphics and 3D elements that make your brand stand out.', image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png' },
    { icon: Layout, title: 'Product Design', description: 'End-to-end design for digital products that your users will love.', image: '/images/design-showcase-grid.png' },
    { icon: PenTool, title: 'Typography', description: 'Custom typography and font choices that fit your brand perfectly.', image: '/branding/imgi_39_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Sparkles, title: 'Graphic Design', description: 'Beautiful visuals for social media, ads, and digital marketing.', image: '/branding/imgi_14_5e9ab7d8c5dc501821b63b40e00a3655d56fdbab-1040x584.png' },
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
    avatar: '/branding/imgi_111_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Customer Trust', value: '+45%' },
      { label: 'Site Traffic', value: '30%' },
      { label: 'Design Score', value: '9.8/10' },
    ],
    caseStudy: {
      title: 'Eon: Designing for Market Dominance',
      image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png',
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
