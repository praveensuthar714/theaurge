'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Cpu, Zap, Layers, Sparkles, Monitor, Brain } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 10',
  heroHeading: 'Advanced AI',
  heroSubheading: 'Automation.',
  heroDescription: 'Automating your business operations and customer journeys with high-fidelity artificial intelligence.',
  heroBg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Efficiency',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Business automation is about saving time and removing errors. We build AI systems that handle the mundane, so you can focus on scale.',
    '"We create professional AI automation that helps your business work faster, smarter, and with complete precision through machine learning."',
  ],

  bentoHeading: 'Our AI',
  bentoSubheading: 'Expertise.',
  bentoMainImage: 'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Neural Flow',
  bentoMainSubtitle: 'Automation',
  bentoMainDesc: 'Using machine learning to automate your business processes and customer lead generation at scale.',
  bentoCard1Title: 'Smart Bots',
  bentoCard1Desc: 'AI-driven customer service and sales bots that work 24/7 to help you close more leads.',
  bentoCard1Icon: Brain,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Cpu,

  showcaseHeading: 'AI Success',
  showcaseItems: [
    { title: 'Project One', category: 'Automation', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'ML Ops', image: 'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'AI Bot', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Smart Data', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Brain, title: 'Neural Systems', description: 'Expertly managed automations that use AI to maximize your operational speed.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
    { icon: Cpu, title: 'Edge Analytics', description: 'Using high-end machine learning to predict market trends and automate your funnels.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
    { icon: Layers, title: 'Modular Logic', description: 'Building the foundational AI components your business needs to grow and scale.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Cinematic AI', description: 'High-end visuals and transitions for a completely automated customer experience.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Fast Velocity', description: 'A technical refining lab where your operational speed is perfected using AI.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
    { icon: Monitor, title: 'Digital Scale', description: 'Deploying your AI systems globally to maximize your business reach and conversion.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The AI',
  processSubheading: 'Pipeline.',
  processSteps: [
    { title: 'Neural Audit', description: 'Analyzing your current workflow to identify where AI can save the most time.' },
    { title: 'System Build', description: 'Creating your custom AI automation blueprint and operational logic.' },
    { title: 'Phase Deployment', description: 'Launching your AI bots and monitoring performance for real business impact.' },
    { title: 'AI Optimization', description: 'Constant data labs to refine your AI strategy and drive even more efficiency.' },
  ],

  differentiators: [
    { title: 'Technical Logic', description: 'Every strategy we build is based on real market data and technical AI research.' },
    { title: 'Results Focus', description: 'We focus entirely on metrics that actually help your bottom line grow using AI.' },
    { title: 'Global AI Hub', description: 'Sustainable, ethical AI automation practices designed for global business scale.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "The AI automation they built for us saved us hundreds of hours a month. It truly helps us focus on growth.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Time Saved', value: '+300h' },
      { label: 'Error Rate', value: '-95%' },
      { label: 'ROI Scale', value: '3.4x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with AI Automation',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
    }
  },

  ctaHeading: 'Ready to use AI',
  ctaSubheading: 'to grow your brand?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'AI Automation',
  faqs: [
    { question: 'What can be automated?', answer: 'We specialize in automating lead generation, customer outreach, and operational data flows.' },
    { question: 'Is it easy to use?', answer: 'Our AI systems are built precisely for easy integration into your existing operational stack.' },
    { question: 'What about data?', answer: 'We ensure all AI automation is 100% secure and complies with global data privacy rules.' },
  ],
};

export default function AIAutomationPage() {
  return <ServicePageTemplate data={data} />;
}
