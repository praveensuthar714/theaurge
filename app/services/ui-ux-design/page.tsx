'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Layout, Smartphone, Sparkles, Layers, Box, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 13',
  heroHeading: 'Professional UI/UX',
  heroSubheading: '& Product Design.',
  heroDescription: 'Architecting high-fidelity user experiences and intuitive digital products for global brands.',
  heroBg: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Experience',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'A great product is nothing without a great experience. We build intuitive interfaces that guide your users and drive conversions in real-time.',
    '"We create professional UI/UX design systems that help your business project authority and build instant trust with your audience."',
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
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
    { title: 'Project One', category: 'UI Design', image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Product', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'UX Design', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Web App', image: 'https://images.unsplash.com/photo-1541462608141-ad43d574b4a?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Layout, title: 'Interface Design', description: 'Expertly managed designs that maximize your brand visibility and conversion.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=400' },
    { icon: Smartphone, title: 'Mobile UX', description: 'Optimizing your product experience for mobile users on phones and tablets.', image: 'https://images.unsplash.com/photo-1556656793-062ff9f1610d?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Interactive Art', description: 'Keyword research and creative strategy built to help you capture every user.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400' },
    { icon: Layers, title: 'Modular Systems', description: 'Systems and tools to optimize your design blueprint for better results.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: Box, title: '3D Visuals', description: 'High-end visuals and transitions for a completely automated ad experience.', image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Fast Results', description: 'A technical refining lab where your design speed is perfected for results.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
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
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'User Trust', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Professional UI/UX',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
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
