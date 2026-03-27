'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Sparkles, Brain, Zap, Cpu, Rocket, BarChart } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 09',
  heroHeading: 'AI-Powered',
  heroSubheading: 'Marketing Labs.',
  heroDescription: 'Using advanced artificial intelligence to automate your marketing, personalize content, and drive growth.',
  heroBg: '/ai-marketing/imgi_2_2af62e5e1db7ef4cc918e482af45be7b71c17e0a-3114x1822.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The AI',
  valuePropAccent: 'Advantage.|',
  valuePropBody: [
    'AI is more than just a buzzword. It\'s a tool to automate mundane tasks and personalize your customer journey at massive scale.',
    '"We build AI marketing systems that help your business work smarter, not harder, by using data to predict and capture high-value leads."',
  ],

  bentoHeading: 'Our AI',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/ai-marketing/imgi_3_d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181.png',
  bentoMainTitle: 'Neural Marketing',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'Using machine learning to analyze market trends and automate your high-conversion marketing funnels.',
  bentoCard1Title: 'Smart Content',
  bentoCard1Desc: 'AI-driven content creation that speaks directly to your audience goals and needs.',
  bentoCard1Icon: Brain,
  bentoCard2Title: 'Growth Node',
  bentoCard2Icon: Zap,

  showcaseHeading: 'AI Success',
  showcaseItems: [
    { title: 'AI Campaign One', category: 'Automation', image: '/ai-marketing/imgi_67_95ce326d59a9bcefe3d54972376402e1c0f6d792-768x880.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Neural Ad Two', category: 'AI Creative', image: '/ai-marketing/imgi_68_820fcedc95debaaefa4d58ecca6d6ed3d3960edf-768x880.png' },
    { title: 'Smart Growth Three', category: 'ML Strategy', image: '/ai-marketing/imgi_69_e6989f6ff874ec6e3405da44a681bfa372114226-768x880.png' },
    { title: 'Bot Scale Four', category: 'UX AI', image: '/ai-marketing/imgi_70_9babda97975af7d29219e4183c688efe0d0463f4-720x728.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Brain, title: 'Neural Analysis', description: 'Expertly managed campaigns that use AI to maximize your brand visibility.', image: '/ai-marketing/imgi_1_cf43af844d6a97f588b639f2592e3667143f308c-900x1104.png' },
    { icon: Sparkles, title: 'AI Creative', description: 'A technical refining lab where your brand visuals and copy are perfected by AI.', image: '/ai-marketing/imgi_12_62d597b44186cfd29aaa3f4df6b0954804fad818-656x920.png' },
    { icon: Zap, title: 'Growth Systems', description: 'Keyword research and campaign strategy built by AI to help you outrank all competitors.', image: '/ai-marketing/imgi_14_624e9e9446262a7d38d21a7ef45227d4eba5a1a9-1440x1548.png' },
    { icon: Cpu, title: 'Funnel Bots', description: 'Systems and tools to optimize your entire marketing funnel using smart AI bots.', image: '/ai-marketing/imgi_15_bb10a1d5a9b2c425ff6639dbf9fcc30dc8bfd4b0-1440x1548.png' },
    { icon: Rocket, title: 'Smart Velocity', description: 'High-end visuals and transitions for a completely automated ad experience.', image: '/ai-marketing/imgi_16_e7dfa073272b449ee6e5c880a0f31ea1700dd71b-1440x1548.png' },
    { icon: BarChart, title: 'Predictive Labs', description: 'Advanced tracking and reporting to give you complete visibility using data labs.', image: '/ai-marketing/imgi_18_30c5b7e76632ac83904bed5fb5697c699f7a39a8-1440x1548.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The AI',
  processSubheading: 'Pipeline.',
  processSteps: [
    { title: 'Neural Audit', description: 'Analyzing your current data to identify where AI can drive the most growth.' },
    { title: 'System Build', description: 'Architecting your custom AI marketing engine and automation funnels.' },
    { title: 'Phased Launch', description: 'Deploying your AI systems and monitoring performance for real results.' },
    { title: 'AI Optimization', description: 'Constant data labs to refine your AI strategy and drive even more scale.' },
  ],

  differentiators: [
    { title: 'Neural Precision', description: 'Every strategy we build is based on real market data and AI analysis.' },
    { title: 'ROI Focused', description: 'We focus entirely on metrics that actually help your bottom line grow using AI.' },
    { title: 'Global AI Hub', description: 'Sustainable, ethical AI marketing practices designed for long-term success.' },
  ],

  results: {
    company: 'Nexus Living',
    quote: "The AI marketing strategy they built for us was a game-changer. Our lead quality increased by 2.4x.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Lead Quality', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Nexus',
      image: '/ai-marketing/imgi_3_d375f1d50d97b0de7953ca2cecd2b8aea2cd96b2-3524x1181.png',
    }
  },

  ctaHeading: 'Ready to use AI',
  ctaSubheading: 'to grow your brand?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'AI Services',
  faqs: [
    { question: 'How does it work?', answer: 'We use advanced machine learning to automate your marketing tasks and personalize customer outreach.' },
    { question: 'Is it ethical?', answer: 'Yes, we use only white-hat AI practices that comply with all global data privacy laws.' },
    { question: 'Can it scale?', answer: 'Our AI systems are built precisely for massive scale and high-velocity acquisition.' },
  ],
};

export default function AIMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
