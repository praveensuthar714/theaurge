'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Code2, Cpu, Globe, Layers, Zap, Sparkles } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 01',
  heroHeading: 'Web',
  heroSubheading: 'Development.',
  heroDescription: 'Your website is often the first interaction people have with your brand. We design and develop digital experiences that are visually appealing and highly functional.',
  heroBg: '/website-development/imgi_14_0e0c17f606edac86bc6c518d5a9cbad76721533a-2800x1450.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Experience',
  valuePropAccent: 'Design, Efficiency, Impact.|',
  valuePropBody: [
    'We focus on performance, scalability, and user behavior to build platforms that don’t just exist online, but actively contribute to your business growth.',
    '"A great website is not just about design—it’s about experience, efficiency, and impact. We ensure every interaction feels seamless and meaningful."'
  ],

  bentoHeading: 'Our Web',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/website-development/imgi_13_63137c06a840043ddc8877d799fe93b94d8889dd-2800x1450.png',
  bentoMainTitle: 'Full-Stack',
  bentoMainSubtitle: 'Development',
  bentoMainDesc: 'Modern web applications built with the latest technology for speed, security, and scale.',
  bentoCard1Title: 'Custom Features',
  bentoCard1Desc: 'We build the specific tools and functions your business needs to succeed online.',
  bentoCard1Icon: Cpu,
  bentoCard2Title: 'Global Reach',
  bentoCard2Icon: Globe,

  modules: [
    { icon: Code2, title: 'UI/UX Design', description: 'Clean, intuitive, and engaging user interfaces designed for conversion.', image: '/website-development/imgi_26_eff3357620f38b12c5d8bec26b6dd6360cb25c43-2400x2944.png' },
    { icon: Globe, title: 'Web Development', description: 'Fast, responsive, and scalable websites built for global market reach.', image: '/website-development/imgi_113_52dd44eac93588f55945d184aa59d46dc7806d3a-1440x1548.png' },
    { icon: Cpu, title: 'CRM Systems', description: 'Custom operational systems designed specifically for your business logic.', image: '/website-development/imgi_110_624e9e9446262a7d38d21a7ef45227d4eba5a1a9-1440x1548.png' },
    { icon: Zap, title: 'Performance Lab', description: 'Optimizing speed and functionality for maximum user retention and results.', image: '/website-development/imgi_108_30c5b7e76632ac83904bed5fb5697c699f7a39a8-1440x1548.png' },
    { icon: Layers, title: 'Maintenance', description: 'Continuous updates and technical support to ensure 99.9% uptime.', image: '/website-development/imgi_67_6683f94d9ba03478837244d4333b1188a75808dd-1536x1760.avif' },
    { icon: Sparkles, title: 'Interaction', description: 'Fluid motions and immersive transitions that enhance brand recall.', image: '/website-development/imgi_14_0e0c17f606edac86bc6c518d5a9cbad76721533a-2800x1450.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Dev',
  processSubheading: 'Pipeline.',
  processSteps: [
    { title: 'UI/UX Blueprint', description: 'Planning the interface logic and user journey for maximum engagement.' },
    { title: 'Core Build', description: 'Developing the robust backend and responsive frontend architecture.' },
    { title: 'System Sync', description: 'Integrating CRMs and third-party tools for a seamless operational flow.' },
    { title: 'Optimization Lab', description: 'Micro-refining performance and speed for final global launch.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "Our new website is incredibly fast and intuitive. It's not just a site; it's a growth engine.",
    author: 'Elena Ross',
    role: 'CTO @ Nexus',
    avatar: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png',
    metrics: [
      { label: 'Page Speed', value: '100/100' },
      { label: 'User Retention', value: '72%' },
      { label: 'Growth Scale', value: '4x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Custom Tech',
      image: '/website-development/imgi_14_0e0c17f606edac86bc6c518d5a9cbad76721533a-2800x1450.png',
    }
  },

  showcaseHeading: 'Our Projects',
  showcaseItems: [
    { title: 'The Aurge Hub', category: 'High-Perf Site', image: '/website-development/imgi_26_eff3357620f38b12c5d8bec26b6dd6360cb25c43-2400x2944.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Nexus Platform', category: 'CRM System', image: '/website-development/imgi_113_52dd44eac93588f55945d184aa59d46dc7806d3a-1440x1548.png' },
    { title: 'Eon Dashboard', category: 'WebApp', image: '/website-development/imgi_110_624e9e9446262a7d38d21a7ef45227d4eba5a1a9-1440x1548.png' },
    { title: 'Vortex Interface', category: 'UI/UX', image: '/website-development/imgi_108_30c5b7e76632ac83904bed5fb5697c699f7a39a8-1440x1548.png', span: 'lg:col-span-2' },
  ],

  differentiators: [
    { title: 'Performance Led', description: 'Every line of code is optimized for extreme speed and scalability.' },
    { title: 'User Focused', description: 'Interfaces designed around user behavior and conversion psychology.' },
    { title: 'Robust Backend', description: 'Secure and scalable systems that grow with your business goals.' },
  ],

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your digital future?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Services',
  faqs: [
    { question: 'What technologies do you use?', answer: 'We build with modern frameworks like Next.js and robust backend systems for speed and scale.' },
    { question: 'Can you build custom CRMs?', answer: 'Yes, we specialize in custom systems designed to manage your business operations efficiently.' },
    { question: 'Is first impression important?', answer: 'Absolutely. We design experiences that ensure your brands first interaction is impactful.' },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate data={data} />;
}
