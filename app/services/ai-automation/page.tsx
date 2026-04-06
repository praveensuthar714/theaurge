'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Cpu, Zap, Layers, Sparkles, Monitor, Brain } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 10',
  heroHeading: 'AI',
  heroSubheading: 'Automation.',
  heroDescription: 'Efficiency is the key to scaling. We help businesses replace human effort with intelligent, scalable algorithms.',
  heroBg: '/ai-automation/imgi_2_ccce81f4a17acf03061a8ab4b55a842ce6aed6c2-3600x1218.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Scalable Algorithms',
  valuePropAccent: 'Business Velocity.|',
  valuePropBody: [
    'Our AI automation services focus on streamlining operations, from custom AI agents and chatbots to automated workflows and CRM integrations. We design systems that work for you, 24/7.',
    '"Artificial Intelligence is not just a tool; it’s a strategy. We build neural systems that accelerate business velocity and remove manual bottlenecks."'
  ],

  bentoHeading: 'Our Neural',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/ai-automation/imgi_1_2c5e25ded6320974f6a1a5962d211f8f7e5a5456-1800x2208.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Agentic Ops',
  bentoMainDesc: 'Deploying autonomous AI agents that handle complex business logic and customer interactions.',
  bentoCard1Title: 'Custom Chatbots',
  bentoCard1Desc: 'Intelligent interfaces that provide instant support and lead qualification around the clock.',
  bentoCard1Icon: Brain,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Cpu,
  bentoCard2Image: '/ai-automation/imgi_12_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg',

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Nexus AI Agent', category: 'Support Automation', image: '/ai-automation/imgi_71_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon ML Sales', category: 'ML Hub', image: '/ai-automation/imgi_86_f4912bb6f26576459dde28062ac6dbce8e09ac92-1584x880.png' },
    { title: 'Vortex Neural', category: 'Market Analysis', image: '/ai-automation/imgi_89_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { title: 'Global Sync', category: 'Workflow AI', image: '/ai-automation/imgi_88_720ce9fb43ee5ce93fbed66e56bfe075aee95760-1000x1000.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Brain, title: 'AI Agents', description: 'Custom agents built to handle specific business tasks and complex logic.', image: '/ai-automation/imgi_11_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { icon: Cpu, title: 'Workflow Autom.', description: 'Streamlining repetitive tasks into high-performance neural pipelines.', image: '/ai-automation/imgi_12_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg' },
    { icon: Layers, title: 'CRM Integration', description: 'Syncing AI into your sales process for automated lead management.', image: '/ai-automation/imgi_22_2c5e25ded6320974f6a1a5962d211f8f7e5a5456-1800x2208.png' },
    { icon: Sparkles, title: 'High-Fid Bots', description: 'Intelligent chatbots that provide seamless and fast customer interaction.', image: '/ai-automation/imgi_21_73ca3279a0631316a07443f727af6f7cb0fb106d-132x84.png' },
    { icon: Zap, title: 'ML Data Labs', description: 'Using data to train custom models that improve your business velocity.', image: '/ai-automation/imgi_10_720ce9fb43ee5ce93fbed66e56bfe075aee95760-1000x1000.png' },
    { icon: Monitor, title: 'Agentic Ops', description: 'Autonomous systems that manage ops with minimal human intervention.', image: '/ai-automation/imgi_25_8174c6cb21efd19c01df7cddbdcadf03bfbc2477-720x720.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The AI',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Logic discovery', description: 'Deep diving into your business tasks to find automation opportunities.' },
    { title: 'Neural Blueprint', description: 'Designing the custom AI agents and workflow logic for your brand.' },
    { title: 'System building', description: 'Developing and integrating the AI into your current tech stack.' },
    { title: 'Scaling phase', description: 'Monitoring performance and scaling the neural network for results.' },
  ],

  differentiators: [
    { title: 'Intelligent Scale', description: 'Replacing human effort with scalable algorithms that never sleep.' },
    { title: 'Neural Precision', description: 'Agents and bots designed with custom logic for your business goals.' },
    { title: 'Velocity Led', description: 'Focusing on removing manual bottlenecks to accelerate brand growth.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "The AI automation they built transformed our support. We now handle 3x more volume with less effort.",
    author: 'Tech Lead',
    role: 'Growth Division @ Nexus',
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Volume Lift', value: '3x' },
      { label: 'Latency Drop', value: '92%' },
      { label: 'Accuracy', value: '99%' },
    ],
    caseStudy: {
      title: 'Success: Neural Support for Nexus Tech',
      image: '/ai-automation/imgi_71_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png',
    }
  },

  ctaHeading: 'Ready to automate',
  ctaSubheading: 'your digital engine?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'AI Automation',
  faqs: [
    { question: 'What is Agentic Ops?', answer: 'It refers to autonomous AI systems that manage complex operations with minimal human intervention.' },
    { question: 'Do you build custom bots?', answer: 'Yes, we design intelligent interfaces that provide instant support and lead qualification.' },
    { question: 'Can you sync with my CRM?', answer: 'Absolutely. We specialize in integrating AI into existing sales and operational processes.' },
  ],
};

export default function AIAutomationPage() {
  return <ServicePageTemplate data={data} />;
}
