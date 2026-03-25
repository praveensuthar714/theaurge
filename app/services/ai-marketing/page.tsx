'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Sparkles, Brain, Zap, Cpu, Rocket, BarChart } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 09',
  heroHeading: 'AI-Powered',
  heroSubheading: 'Marketing Labs.',
  heroDescription: 'Using advanced artificial intelligence to automate your marketing, personalize content, and drive growth.',
  heroBg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The AI',
  valuePropAccent: 'Advantage.|',
  valuePropBody: [
    'AI is more than just a buzzword. It\'s a tool to automate mundane tasks and personalize your customer journey at massive scale.',
    '"We build AI marketing systems that help your business work smarter, not harder, by using data to predict and capture high-value leads."',
  ],

  bentoHeading: 'Our AI',
  bentoSubheading: 'Expertise.',
  bentoMainImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
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
    { title: 'AI Campaign One', category: 'Automation', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Neural Ad Two', category: 'AI Creative', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' },
    { title: 'Smart Growth Three', category: 'ML Strategy', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600' },
    { title: 'Bot Scale Four', category: 'UX AI', image: 'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Brain, title: 'Neural Analysis', description: 'Expertly managed campaigns that use AI to maximize your brand visibility.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'AI Creative', description: 'A technical refining lab where your brand visuals and copy are perfected by AI.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Growth Systems', description: 'Keyword research and campaign strategy built by AI to help you outrank all competitors.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400' },
    { icon: Cpu, title: 'Funnel Bots', description: 'Systems and tools to optimize your entire marketing funnel using smart AI bots.', image: 'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=400' },
    { icon: Rocket, title: 'Smart Velocity', description: 'High-end visuals and transitions for a completely automated ad experience.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
    { icon: BarChart, title: 'Predictive Labs', description: 'Advanced tracking and reporting to give you complete visibility using data labs.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
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
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Lead Quality', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Nexus',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
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
