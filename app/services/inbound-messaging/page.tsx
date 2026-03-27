'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { MessageSquare, Zap, Smartphone, Sparkles, Monitor, Layout } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 11',
  heroHeading: 'Inbound',
  heroSubheading: 'Messaging Systems.',
  heroDescription: 'Converting your website traffic into leads through high-fidelity messaging, chatbots, and real-time engagement.',
  heroBg: '/inbound-messaging/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Engagement',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Don\'t let your visitors leave without a conversation. We build messaging systems that target high-intent users and drive conversions in real-time.',
    '"We create professional chatbots and live-messaging funnels that help your business talk to customers exactly when they are ready to buy."',
  ],

  bentoHeading: 'Our Messaging',
  bentoSubheading: 'Services.',
  bentoMainImage: '/inbound-messaging/imgi_27_acd5f4256d06d3edb5f23cd3e1078fa13b07137a-1200x1472.png',
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
    { title: 'Project One', category: 'Chatbot', image: '/inbound-messaging/imgi_68_c517d6dac9b9fa15a5bf1a60d2511a33f7154bc9-800x838.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Live Chat', image: '/inbound-messaging/imgi_69_43cd1cce775c4e63a36195e13dd3913f3e9caa28-768x880.png' },
    { title: 'Project Three', category: 'Support', image: '/inbound-messaging/imgi_70_3b4df6c308e199c6b80eb1b9248604fb265d8f9d-768x880.png' },
    { title: 'Project Four', category: 'Leads AI', image: '/inbound-messaging/imgi_71_39c97cafcdcc6468c15ef19eed05c26029d6d329-768x880.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: MessageSquare, title: 'Smart Bots', description: 'Expertly managed chatbots that maximize your lead capture and conversion.', image: '/inbound-messaging/imgi_13_81b6522f52cc241b6bd7218483f140be359dd2b6-2400x1260.png' },
    { icon: Smartphone, title: 'Mobile Messaging', description: 'Optimizing your messaging systems for mobile users on phones and tablets.', image: '/inbound-messaging/imgi_26_acd5f4256d06d3edb5f23cd3e1078fa13b07137a-1200x1472.png' },
    { icon: Zap, title: 'Fast Lead Capture', description: 'Keyword research and campaign strategy built to help you capture every visitor.', image: '/inbound-messaging/imgi_28_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Layout, title: 'Funnel Logic', description: 'Systems and tools to optimize your messaging funnel for better results.', image: '/inbound-messaging/imgi_67_6683f94d9ba03478837244d4333b1188a75808dd-1536x1760.avif' },
    { icon: Monitor, title: 'Digital Hub', description: 'Deploying your messaging systems globally to facilitate business reach.', image: '/inbound-messaging/imgi_72_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Sparkles, title: 'Cinematic UX', description: 'High-end visuals and transitions for a completely automated ad experience.', image: '/inbound-messaging/imgi_21_39ea31c2e790762ccd4c267eedac6ea28aa192c4-72x56.png' },
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
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Leads Scoped', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Smart Messaging',
      image: '/inbound-messaging/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
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
