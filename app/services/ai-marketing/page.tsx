'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Sparkles, Brain, Zap, Cpu, Rocket, BarChart } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 11',
  heroHeading: 'AI',
  heroSubheading: 'Marketing.',
  heroDescription: 'The future of marketing is intelligent, automated, and highly personalised. We leverage AI to transform how businesses interact with their audience.',
  heroBg: '/ai-marketing/imgi_2_2af62e5e1db7ef4cc918e482af45be7b71c17e0a-3114x1822.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Neural Growth',
  valuePropAccent: 'Predictive Acquisition.|',
  valuePropBody: [
    "From AI-driven chatbots to automated workflows and smart calling systems, we create solutions that enhance efficiency and engagement. Our goal is to help you scale faster while reducing manual effort — allowing you to focus on what truly matters.",
    '"When technology works smarter, your business grows stronger. We build intelligent marketing engines that operate, learn, and improve 24/7."',
  ],

  bentoHeading: 'Our AI',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/ai-marketing/imgi_3_d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Audience Lab',
  bentoMainDesc: 'Using ML models to predict customer behaviour and identify high-value acquisition opportunities.',
  bentoCard1Title: 'AI Chatbots',
  bentoCard1Desc: 'Automated customer interaction systems that respond, qualify, and convert leads 24/7.',
  bentoCard1Icon: Brain,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Zap,
  bentoCard2Image: '/ai-marketing/imgi_1_cf43af844d6a97f588b639f2592e3667143f308c-900x1104.png',

  showcaseHeading: 'AI Success',
  showcaseItems: [
    { title: 'Nexus Neural Ads', category: 'Predictive Ads', image: '/ai-marketing/imgi_67_95ce326d59a9bcefe3d54972376402e1c0f6d792-768x880.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon ML Funnel', category: 'Automated CRM', image: '/ai-marketing/imgi_68_820fcedc95debaaefa4d58ecca6d6ed3d3960edf-768x880.png' },
    { title: 'Vortex Automation', category: 'Workflow Ops', image: '/ai-marketing/imgi_69_e6989f6ff874ec6e3405da44a681bfa372114226-768x880.png' },
    { title: 'Global Discovery', category: 'AI Attribution', image: '/ai-marketing/imgi_70_9babda97975af7d29219e4183c688efe0d0463f4-720x728.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Brain, title: 'AI Chatbots', description: 'Automated response systems for customer interaction, lead qualification, and 24/7 engagement.', image: '/ai-marketing/imgi_1_cf43af844d6a97f588b639f2592e3667143f308c-900x1104.png' },
    { icon: Sparkles, title: 'AI Calling Agents', description: 'Smart calling systems for lead handling, follow-ups, and appointment booking at scale.', image: '/ai-marketing/imgi_12_62d597b44186cfd29aaa3f4df6b0954804fad818-656x920.png' },
    { icon: Zap, title: 'Marketing Automation', description: 'Reducing manual effort with AI-powered workflows that personalise and scale your outreach.', image: '/ai-marketing/imgi_14_624e9e9446262a7d38d21a7ef45227d4eba5a1a9-1440x1548.png' },
    { icon: Cpu, title: 'Data Analysis', description: 'AI-driven insights from your customer data to make smarter, faster marketing decisions.', image: '/ai-marketing/imgi_15_bb10a1d5a9b2c425ff6639dbf9fcc30dc8bfd4b0-1440x1548.png' },
    { icon: Rocket, title: 'Scalable Content', description: 'Using AI to personalise brand content for thousands of users at scale simultaneously.', image: '/ai-marketing/imgi_16_e7dfa073272b449ee6e5c880a0f31ea1700dd71b-1440x1548.png' },
    { icon: BarChart, title: 'Predictive Labs', description: 'A data-led system where your marketing velocity is predicted, tested, and scaled continuously.', image: '/ai-marketing/imgi_18_30c5b7e76632ac83904bed5fb5697c699f7a39a8-1440x1548.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The AI',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Data Gathering', description: 'Analysing your customer data and workflows to identify where AI can create the most impact.' },
    { title: 'System Design', description: 'Designing the custom AI workflows, chatbots, and automation sequences for your brand.' },
    { title: 'Pilot Launch', description: 'Deploying the AI marketing systems and monitoring the initial performance and ROI.' },
    { title: 'Scaling Phase', description: 'Refining the intelligence models to increase accuracy and maximise your brand reach.' },
  ],

  differentiators: [
    { title: 'Predictive Edge', description: 'Focusing on future customer behaviour, not just past results, for smarter acquisition.' },
    { title: 'Automation First', description: 'Building engines that work 24/7 to find, engage, and convert your ideal customers.' },
    { title: 'ROI Efficiency', description: 'Reducing the cost of marketing while increasing the quality and precision of outcomes.' },
  ],

  results: {
    company: 'Nexus Living',
    quote: "The AI marketing system they built transformed how we handle leads. Response time dropped from hours to seconds, and lead quality improved significantly.",
    author: 'Elena Ross',
    role: 'Growth Division @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'CPA Drop', value: '38%' },
      { label: 'Lead Quality', value: '4.2x' },
      { label: 'Automation', value: '24/7' },
    ],
    caseStudy: {
      title: 'Success: Predictive AI Growth for Nexus Living',
      image: '/ai-marketing/imgi_3_d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181.png',
    }
  },

  ctaHeading: 'Ready to automate',
  ctaSubheading: 'your growth engine?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'AI Marketing',
  faqs: [
    { question: 'What is an AI chatbot for marketing?', answer: 'An automated system that handles customer responses, qualifies leads, and books meetings 24/7 without manual effort.' },
    { question: 'What is marketing automation?', answer: 'Using AI workflows to personalise messaging, follow up with leads, and manage customer journeys at scale.' },
    { question: 'Are AI calling agents effective?', answer: 'Yes — our AI calling agents can handle initial lead conversations, filtering and routing to your team efficiently.' },
  ],
};

export default function AIMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
