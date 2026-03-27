'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Cpu, Zap, Layers, Sparkles, Monitor, Brain } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 10',
  heroHeading: 'Advanced AI',
  heroSubheading: 'Automation.',
  heroDescription: 'Automating your business operations and customer journeys with high-fidelity artificial intelligence.',
  heroBg: '/ai-automation/imgi_2_ccce81f4a17acf03061a8ab4b55a842ce6aed6c2-3600x1218.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Efficiency',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Business automation is about saving time and removing errors. We build AI systems that handle the mundane, so you can focus on scale.',
    '"We create professional AI automation that helps your business work faster, smarter, and with complete precision through machine learning."',
  ],

  bentoHeading: 'Our AI',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/ai-automation/imgi_1_2c5e25ded6320974f6a1a5962d211f8f7e5a5456-1800x2208.png',
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
    { title: 'Project One', category: 'Automation', image: '/ai-automation/imgi_71_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'ML Ops', image: '/ai-automation/imgi_86_f4912bb6f26576459dde28062ac6dbce8e09ac92-1584x880.png' },
    { title: 'Project Three', category: 'AI Bot', image: '/ai-automation/imgi_89_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { title: 'Project Four', category: 'Smart Data', image: '/ai-automation/imgi_88_720ce9fb43ee5ce93fbed66e56bfe075aee95760-1000x1000.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Brain, title: 'Neural Systems', description: 'Expertly managed automations that use AI to maximize your operational speed.', image: '/ai-automation/imgi_11_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { icon: Cpu, title: 'Edge Analytics', description: 'Using high-end machine learning to predict market trends and automate your funnels.', image: '/ai-automation/imgi_12_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg' },
    { icon: Layers, title: 'Modular Logic', description: 'Building the foundational AI components your business needs to grow and scale.', image: '/ai-automation/imgi_22_2c5e25ded6320974f6a1a5962d211f8f7e5a5456-1800x2208.png' },
    { icon: Sparkles, title: 'Cinematic AI', description: 'High-end visuals and transitions for a completely automated customer experience.', image: '/ai-automation/imgi_21_73ca3279a0631316a07443f727af6f7cb0fb106d-132x84.png' },
    { icon: Zap, title: 'Fast Velocity', description: 'A technical refining lab where your operational speed is perfected using AI.', image: '/ai-automation/imgi_10_720ce9fb43ee5ce93fbed66e56bfe075aee95760-1000x1000.png' },
    { icon: Monitor, title: 'Digital Scale', description: 'Deploying your AI systems globally to maximize your business reach and conversion.', image: '/ai-automation/imgi_25_8174c6cb21efd19c01df7cddbdcadf03bfbc2477-720x720.png' },
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
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Conversion', value: '3.2x' },
      { label: 'Retention', value: '45%' },
      { label: 'Efficiency', value: '60%' },
    ],
    caseStudy: {
      title: 'Success: Intelligent Workflows for Apex',
      image: '/video-production/imgi_10_33767250764af83fd74059d7a2f07d76455fb869-2400x1176.png',
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
