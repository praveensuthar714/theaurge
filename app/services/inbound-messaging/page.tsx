'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { MessageSquare, Zap, Smartphone, Sparkles, Monitor, Layout } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 12',
  heroHeading: 'Inbound',
  heroSubheading: 'Messaging.',
  heroDescription: 'Communication is at the heart of every successful brand. We help businesses build meaningful relationships with their audience through direct and personalized messaging strategies.',
  heroBg: '/inbound-messaging/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Conversation Ops',
  valuePropAccent: 'Frictionless Acquisition.|',
  valuePropBody: [
    "From WhatsApp and email campaigns to community-driven platforms like Telegram, we create systems that keep your audience engaged and connected.",
    "Our focus is on delivering the right message at the right time, using automation and smart workflows to maximize efficiency and response. Because when communication feels personal, it builds trust — and trust drives growth."
  ],

  bentoHeading: 'Our Messaging',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/inbound-messaging/imgi_27_acd5f4256d06d3edb5f23cd3e1078fa13b07137a-1200x1472.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Agentic Hub',
  bentoMainDesc: 'AI-driven messaging flows that handle customer interaction, qualification, and engagement 24/7.',
  bentoCard1Title: 'WhatsApp Marketing',
  bentoCard1Desc: 'Direct, engaging, and personalised communication at scale via WhatsApp Business.',
  bentoCard1Icon: MessageSquare,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Zap,
  bentoCard2Image: '/inbound-messaging/imgi_13_81b6522f52cc241b6bd7218483f140be359dd2b6-2400x1260.png',

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'WhatsApp Campaigns', category: 'Direct Messaging', image: '/inbound-messaging/imgi_68_c517d6dac9b9fa15a5bf1a60d2511a33f7154bc9-800x838.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Email Marketing', category: 'Structured Campaigns', image: '/inbound-messaging/imgi_69_43cd1cce775c4e63a36195e13dd3913f3e9caa28-768x880.png' },
    { title: 'Telegram Community', category: 'Community Engagement', image: '/inbound-messaging/imgi_70_3b4df6c308e199c6b80eb1b9248604fb265d8f9d-768x880.png' },
    { title: 'Automation Flows', category: 'Smart Messaging Ops', image: '/inbound-messaging/imgi_71_39c97cafcdcc6468c15ef19eed05c26029d6d329-768x880.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: MessageSquare, title: 'WhatsApp Marketing', description: 'Direct and engaging communication.', image: '/inbound-messaging/imgi_13_81b6522f52cc241b6bd7218483f140be359dd2b6-2400x1260.png' },
    { icon: Smartphone, title: 'Email Marketing', description: 'Structured campaigns for conversions.', image: '/inbound-messaging/imgi_26_acd5f4256d06d3edb5f23cd3e1078fa13b07137a-1200x1472.png' },
    { icon: Zap, title: 'Telegram Marketing', description: 'Community-based engagement.', image: '/inbound-messaging/imgi_28_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Layout, title: 'Automation Flows', description: 'Smart messaging sequences for better response.', image: '/inbound-messaging/imgi_67_6683f94d9ba03478837244d4333b1188a75808dd-1536x1760.avif' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Message',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audience Map', description: 'Defining the key audience segments and the messaging intent for each channel.' },
    { title: 'Flow Design', description: 'Building the smart automation sequences and messaging templates for each platform.' },
    { title: 'Campaign Launch', description: 'Deploying campaigns across WhatsApp, email, and Telegram with precision timing.' },
    { title: 'Optimise & Scale', description: 'Tracking response rates and refining flows to increase engagement and conversion.' },
  ],

  differentiators: [
    { title: 'Personal at Scale', description: 'Building messaging that feels individual and human even when reaching thousands.' },
    { title: 'Multi-Platform Ops', description: 'Covering WhatsApp, email, and Telegram — every channel your audience lives on.' },
    { title: 'Automation Driven', description: 'Smart workflows that run 24/7, ensuring no lead or conversation is missed.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "The messaging system they built completely changed our communication speed. Leads are now engaged and nurtured automatically before they even speak to our team.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Response Speed', value: '< 2 Min' },
      { label: 'Lead Engagement', value: '2.4x' },
      { label: 'Conversion', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Transforming Nexus Inbound Communication',
      image: '/inbound-messaging/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your messaging ecosystem?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Messaging Services',
  faqs: [
    { question: 'What platforms do you cover?', answer: 'We build campaigns and automation flows for WhatsApp, Email, and Telegram communities.' },
    { question: 'What are automation flows?', answer: 'Smart, pre-built messaging sequences that automatically respond and nurture leads based on their actions.' },
    { question: 'Can you integrate with our CRM?', answer: 'Yes — we connect your messaging systems directly to your CRM for seamless lead management.' },
  ],
};

export default function InboundMessagingPage() {
  return <ServicePageTemplate data={data} />;
}
