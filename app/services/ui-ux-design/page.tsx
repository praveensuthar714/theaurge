'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Layout, Smartphone, Sparkles, Layers, Box, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 13',
  heroHeading: 'Professional UI/UX',
  heroSubheading: '& Product Design.',
  heroDescription: 'Architecting high-fidelity user experiences and intuitive digital products for global brands.',
  heroBg: '/capabilities/digital-experiences.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Experience',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'A great product is nothing without a great experience. We build intuitive interfaces that guide your users and drive conversions in real-time.',
    '"We create professional UI/UX design systems that help your business project authority and build instant trust with your audience."',
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Services.',
  bentoMainImage: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png',
  bentoMainTitle: 'Product Design',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'End-to-end design for digital products that your users will love and help your business grow.',
  bentoCard1Title: 'Bespoke UI',
  bentoCard1Desc: 'Modern user interfaces that make your digital products beautiful and enjoyable to use.',
  bentoCard1Icon: Sparkles,
  bentoCard2Title: 'Growth Node',
  bentoCard2Icon: Zap,

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Project One', category: 'UI Design', image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Product', image: '/performance-marketing/imgi_43_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { title: 'Project Three', category: 'UX Design', image: '/branding/imgi_87_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png' },
    { title: 'Project Four', category: 'Web App', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Layout, title: 'Interface Design', description: 'Expertly managed designs that maximize your brand visibility and conversion.', image: '/branding/imgi_39_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Smartphone, title: 'Mobile UX', description: 'Optimizing your product experience for mobile users on phones and tablets.', image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png' },
    { icon: Sparkles, title: 'Interactive Art', description: 'Keyword research and creative strategy built to help you capture every user.', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { icon: Layers, title: 'Modular Systems', description: 'Systems and tools to optimize your design blueprint for better results.', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { icon: Box, title: '3D Visuals', description: 'High-end visuals and transitions for a completely automated ad experience.', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png' },
    { icon: Zap, title: 'Fast Results', description: 'A technical refining lab where your design speed is perfected for results.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Design',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'User Research', description: 'Analyzing your market and audience to identify where design can help.' },
    { title: 'Core Blueprint', description: 'Creating your custom UI/UX blueprint and operational design logic.' },
    { title: 'Execution Phase', description: 'Launching your design assets and monitoring performance for results.' },
    { title: 'Refinement Lab', description: 'Constant data labs to refine your design and drive even more scale.' },
  ],

  differentiators: [
    { title: 'Modern Style', description: 'Every design choice we build is based on real user data and results.' },
    { title: 'User Centered', description: 'We focus entirely on experiences that actually help your business grow.' },
    { title: 'Bespoke Quality', description: 'Completely custom design systems built specifically for your brand.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "The UI/UX strategy they built for our product changed everything. We look so much more professional now.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/branding/imgi_111_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'User Trust', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Professional UI/UX',
      image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your product today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Services',
  faqs: [
    { question: 'How long to design?', answer: 'A custom UI/UX design typically takes 8–12 weeks from research to final files.' },
    { question: 'What do I receive?', answer: 'You will receive a complete design toolkit including user flows, UI assets, and figma files.' },
    { question: 'Is it custom design?', answer: 'Yes, every design we build is 100% original and built specifically for your product.' },
  ],
};

export default function UIUXDesignPage() {
  return <ServicePageTemplate data={data} />;
}
