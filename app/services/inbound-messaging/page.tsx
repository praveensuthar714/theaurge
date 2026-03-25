'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { MessageSquare, Zap, Smartphone, Sparkles, Monitor, Layout } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 11',
  heroHeading: 'Inbound',
  heroSubheading: 'Messaging Systems.',
  heroDescription: 'Converting your website traffic into leads through high-fidelity messaging, chatbots, and real-time engagement.',
  heroBg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Engagement',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Don\'t let your visitors leave without a conversation. We build messaging systems that target high-intent users and drive conversions in real-time.',
    '"We create professional chatbots and live-messaging funnels that help your business talk to customers exactly when they are ready to buy."',
  ],

  bentoHeading: 'Our Messaging',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Smart Chatbots',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'Using AI-driven bots to handle customer inquiries, book meetings, and qualify leads 24/7.',
  bentoCard1Title: 'Live Support',
  bentoCard1Desc: 'Integrated messaging systems that let your team talk to clients in real-time right on your site.',
  bentoCard1Icon: MessageSquare,
  bentoCard2Title: 'Growth Node',
  bentoCard2Icon: Zap,

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Project One', category: 'Chatbot', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Live Chat', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'Support', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Leads AI', image: 'https://images.unsplash.com/photo-1531746790731-6c087fdec69a?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: MessageSquare, title: 'Smart Bots', description: 'Expertly managed chatbots that maximize your lead capture and conversion.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400' },
    { icon: Smartphone, title: 'Mobile Messaging', description: 'Optimizing your messaging systems for mobile users on phones and tablets.', image: 'https://images.unsplash.com/photo-1556656793-062ff9f1610d?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Fast Lead Capture', description: 'Keyword research and campaign strategy built to help you capture every visitor.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
    { icon: Layout, title: 'Funnel Logic', description: 'Systems and tools to optimize your messaging funnel for better results.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: Monitor, title: 'Digital Hub', description: 'Deploying your messaging systems globally to facilitate business reach.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Cinematic UX', description: 'High-end visuals and transitions for a completely automated ad experience.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Message',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audit Session', description: 'Analyzing your current site traffic to identify where messaging can help.' },
    { title: 'Bot Architect', description: 'Creating your custom messaging blueprint and operational logic.' },
    { title: 'Phase Deployment', description: 'Launching your bots and monitoring performance for real results.' },
    { title: 'Refinement Lab', description: 'Constant data labs to refine your messaging and drive even more scale.' },
  ],

  differentiators: [
    { title: 'Technical Logic', description: 'Every strategy we build is based on real market data and results.' },
    { title: 'Results Focus', description: 'We focus entirely on metrics that actually help your bottom line grow.' },
    { title: 'Expert Team', description: 'Experience scaling brands across multiple international markets.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The messaging strategy they built for our launch was a game-changer. Our leads increased by 2.4x.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Leads Scoped', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Smart Messaging',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
    }
  },

  ctaHeading: 'Ready to engage',
  ctaSubheading: 'your business today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Messaging',
  faqs: [
    { question: 'What can be automated?', answer: 'We specialize in automating lead generation, customer outreach, and support data.' },
    { question: 'Is it easy to use?', answer: 'Our bots are built precisely for easy integration into your existing website.' },
    { question: 'What about data?', answer: 'We ensure all messaging is 100% secure and complies with global data privacy rules.' },
  ],
};

export default function InboundMessagingPage() {
  return <ServicePageTemplate data={data} />;
}
