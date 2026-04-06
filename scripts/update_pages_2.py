#!/usr/bin/env python3
"""Script part 2 — Update SEO, AI Marketing, inbound, brand-identity, about, contact pages."""
import os, sys

BASE = r'c:\Users\offic\Desktop\theAurge'

def write(rel, content):
    path = os.path.join(BASE, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {rel}")

# ─── SEO ──────────────────────────────────────────────────────────────────────
write('app/services/seo/page.tsx', """'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Globe, Search, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 08',
  heroHeading: 'Search Engine',
  heroSubheading: 'Optimisation.',
  heroDescription: 'Being visible is important — but being discoverable at the right moment is what truly matters. We help brands build a strong organic presence.',
  heroBg: '/performance-marketing/imgi_87_eed97c6479a951f6169af5645730a69694bc058a-768x880.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Organic Dominance',
  valuePropAccent: 'Strategic Visibility.|',
  valuePropBody: [
    "Our approach goes beyond traditional SEO — focusing on intent, relevance, and long-term visibility. From technical optimisation to content strategy and advanced practices like AEO and GEO, we ensure your brand stays ahead in search rankings.",
    '"When your audience is looking for answers, your brand should be the one they find first — we make that happen with precision and sustainable strategy."',
  ],

  bentoHeading: 'Our Search',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_1_8233166219079021cffd1f915256d7957270b153-1200x1472.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'SEO Audit',
  bentoMainDesc: 'Deep technical analysis identifying every roadblock preventing your brand from ranking high in search.',
  bentoCard1Title: 'Keyword Strategy',
  bentoCard1Desc: 'Finding high-impact keywords matched to your audience intent and search behaviour.',
  bentoCard1Icon: Search,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,
  bentoCard2Image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',

  showcaseHeading: 'Our Results',
  showcaseItems: [
    { title: 'Nexus Organic', category: 'Growth Strategy', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Technical', category: 'Code Optimisation', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { title: 'Vortex Authority', category: 'Link Building', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Global Discovery', category: 'High-Intent SEO', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Search, title: 'Keyword Research', description: 'Finding high-impact keywords aligned with user intent and search volume.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Globe, title: 'On-Page SEO', description: 'Optimising website structure, meta tags, headings, and content for better ranking.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: BarChart, title: 'Local SEO', description: 'Improving visibility in local searches to capture high-intent nearby audiences.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'Technical SEO', description: 'Fixing backend issues — speed, crawlability, and structured data — for better ranking.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Content Authority', description: 'Writing high-value content that ranks for keywords and builds topical authority.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Zap, title: 'AEO & GEO', description: 'Optimising for Answer Engines and geographic targeting — the next frontier of SEO.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The SEO',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Technical Audit', description: 'Identifying every code-level issue holding back your brand in search rankings.' },
    { title: 'Keyword Map', description: 'Planning the keyword strategy and content authority blueprint for your niche.' },
    { title: 'Execution Stage', description: 'Building links, optimising pages, and publishing content for high-fidelity ranking.' },
    { title: 'Monitoring Lab', description: 'Continuous data tracking to refine rankings and scale your organic discovery.' },
  ],

  differentiators: [
    { title: 'Technical Dominance', description: 'We focus on code and structural perfection to earn search engine trust.' },
    { title: 'Intent-First Strategy', description: 'Focusing on what users are actually searching for — not just volume metrics.' },
    { title: 'Long-Term Visibility', description: 'Building sustainable organic presence that grows stronger over time.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "They took us from page 10 to page 1 for our most valuable keywords. The impact on enquiries was immediate and significant.",
    author: 'Growth Lead',
    role: 'Financial Services',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Organic Lift', value: '410%' },
      { label: 'Keywords Ranked', value: '150+' },
      { label: 'Conversion', value: '3.2x' },
    ],
    caseStudy: {
      title: 'Success: Ranking Nexus to Market Dominance',
      image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
    }
  },

  ctaHeading: 'Ready to dominate',
  ctaSubheading: 'your search market?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'SEO Services',
  faqs: [
    { question: 'What is AEO & GEO?', answer: 'AEO is Answer Engine Optimisation (for AI search results), GEO is optimising for geographic targeting in search.' },
    { question: 'How long to see organic results?', answer: 'SEO is a long-term growth engine — measurable results typically appear in 3–6 months of deployment.' },
    { question: 'What does your SEO audit cover?', answer: 'Technical site health, keyword gaps, on-page structure, content quality, backlinks, and speed optimisation.' },
  ],
};

export default function SEOPage() {
  return <ServicePageTemplate data={data} />;
}
""")

# ─── AI Marketing / Automation ────────────────────────────────────────────────
write('app/services/ai-marketing/page.tsx', """'use client';

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
""")

# ─── Inbound Messaging ────────────────────────────────────────────────────────
write('app/services/inbound-messaging/page.tsx', """'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { MessageSquare, Zap, Smartphone, Sparkles, Monitor, Layout } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 12',
  heroHeading: 'Inbound',
  heroSubheading: 'Messaging.',
  heroDescription: 'Communication is at the heart of every successful brand. We help businesses build meaningful relationships through direct and personalised messaging strategies.',
  heroBg: '/inbound-messaging/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Conversation Ops',
  valuePropAccent: 'Frictionless Acquisition.|',
  valuePropBody: [
    "From WhatsApp and email campaigns to community-driven platforms like Telegram, we create systems that keep your audience engaged and connected. Our focus is on delivering the right message at the right time, using automation and smart workflows.",
    '"When communication feels personal, it builds trust — and trust drives growth. We build messaging ecosystems that feel human at scale."',
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
    { icon: MessageSquare, title: 'WhatsApp Marketing', description: 'Direct, engaging communication that feels personal and drives immediate action from your audience.', image: '/inbound-messaging/imgi_13_81b6522f52cc241b6bd7218483f140be359dd2b6-2400x1260.png' },
    { icon: Smartphone, title: 'Email Marketing', description: 'Structured email campaigns designed for conversions, retention, and brand awareness.', image: '/inbound-messaging/imgi_26_acd5f4256d06d3edb5f23cd3e1078fa13b07137a-1200x1472.png' },
    { icon: Zap, title: 'Telegram Marketing', description: 'Community-based engagement that builds loyal, connected audiences around your brand.', image: '/inbound-messaging/imgi_28_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Layout, title: 'Automation Flows', description: 'Smart messaging sequences that respond, nurture, and convert leads without manual input.', image: '/inbound-messaging/imgi_67_6683f94d9ba03478837244d4333b1188a75808dd-1536x1760.avif' },
    { icon: Monitor, title: 'CRM Integration', description: 'Connecting your messaging hub directly into your CRM for seamless pipeline management.', image: '/inbound-messaging/imgi_72_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Sparkles, title: 'Campaign Analytics', description: 'Tracking open rates, click-through, and conversions to optimise every messaging campaign.', image: '/inbound-messaging/imgi_21_39ea31c2e790762ccd4c267eedac6ea28aa192c4-72x56.png' },
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
""")

# ─── Brand Identity Design ────────────────────────────────────────────────────
write('app/services/brand-identity-design/page.tsx', """'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Palette, PenTool, Layout, Layers, Sparkles, Box } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 03',
  heroHeading: 'Brand',
  heroSubheading: 'Identity.',
  heroDescription: 'A brand is not just seen — it is felt, remembered, and experienced. We build identities that go beyond visuals and create lasting impressions.',
  heroBg: '/branding/imgi_27_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Beyond Visuals',
  valuePropAccent: 'Long-term Connection.|',
  valuePropBody: [
    "From crafting distinctive logos to designing complete brand systems, we ensure every element reflects your vision, values, and purpose. Our approach combines strategy with creativity — ensuring your brand stands out in a crowded market while maintaining clarity and consistency.",
    '"A strong brand identity doesn\'t just attract attention — it builds trust, recognition, and long-term connection with your audience."',
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Approach.',
  bentoMainImage: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Positioning',
  bentoMainDesc: 'Shaping how your brand is perceived in the market through strategic positioning and purposeful design.',
  bentoCard1Title: 'Logo Design',
  bentoCard1Desc: 'Unique, timeless logos that represent your brand identity effectively across all touchpoints.',
  bentoCard1Icon: PenTool,
  bentoCard2Title: 'Guidelines',
  bentoCard2Icon: Sparkles,
  bentoCard2Image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png',

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Rotex IT Solutions', category: 'Tech Branding', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Ashish Food & Beverages', category: 'F&B Packaging', image: '/branding/imgi_87_0acb20f2a9708d15596ec5b6f421c6fa6758729b-1152x1320.png' },
    { title: 'Everloved Stories', category: 'Wedding Brand', image: '/branding/imgi_89_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { title: 'Beyond Travelers', category: 'Tours & Travel', image: '/branding/imgi_15_18990d94cc12d56d2c085ecdfb53274f8750514a-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Palette, title: 'Brand Discovery', description: 'Understanding your business, audience, and vision to build a strong, purposeful foundation.', image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png' },
    { icon: PenTool, title: 'Logo Design', description: 'Crafting unique, timeless logos that represent your brand identity across every touchpoint.', image: '/branding/imgi_34_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png' },
    { icon: Layout, title: 'Visual Identity System', description: 'Defining colours, typography, and design elements that create a consistent brand presence.', image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Layers, title: 'Stationery Design', description: 'Business cards, letterheads, and brand materials designed professionally for every interaction.', image: '/branding/imgi_29_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png' },
    { icon: Box, title: 'Brand Positioning', description: 'Shaping how your brand is perceived and remembered in the marketplace.', image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png' },
    { icon: Sparkles, title: 'Brand Guidelines', description: 'A comprehensive rulebook to maintain brand consistency across all platforms and media.', image: '/branding/imgi_14_5e9ab7d8c5dc501821b63b40e00a3655d56fdbab-1040x584.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Identity',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Discovery Phase', description: 'Deep diving into your business values, audience psychology, and market positioning.' },
    { title: 'Concept Design', description: 'Developing original logo concepts and complete visual identity systems.' },
    { title: 'System Building', description: 'Architecting the full brand toolkit, colour system, typography, and guidelines.' },
    { title: 'Final Deployment', description: 'Launching your brand with precision and consistency across all brand channels.' },
  ],

  differentiators: [
    { title: 'Meaningful Design', description: 'Identities that go beyond visuals to create lasting emotional impressions.' },
    { title: 'Strategic Clarity', description: 'Combining strategy with creativity for clear market distinction and recall.' },
    { title: 'Timeless Quality', description: 'Focusing on building trust and long-term audience recognition over trends.' },
  ],

  results: {
    company: 'Rotex IT Solutions',
    quote: "End-to-end branding including logo design, stationery, and complete visual identity — reflecting trust, innovation, and clarity across all brand touchpoints.",
    author: 'Tech Lead',
    role: 'Rotex IT Solutions',
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Trust Index', value: '4.9/5' },
      { label: 'Brand Recall', value: '72%' },
      { label: 'Market Scope', value: 'GLOBAL' },
    ],
    caseStudy: {
      title: 'Success: Institutional Identity for Rotex IT Solutions',
      image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png',
    }
  },

  ctaHeading: 'Ready to architect',
  ctaSubheading: 'your brand identity?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Brand Identity',
  faqs: [
    { question: 'What is included in brand identity?', answer: 'Logo design, visual identity system, colour palette, typography, stationery, positioning, and brand guidelines.' },
    { question: 'Do you provide brand guidelines?', answer: 'Yes — a comprehensive rulebook covering logo usage, colours, and typography for every platform.' },
    { question: 'What brands have you worked with?', answer: 'Rotex IT Solutions, Ashish Food & Beverages, Beyond Travelers, Everloved Stories, Captain GBP, and Nexus Civil.' },
  ],
};

export default function BrandIdentityPage() {
  return <ServicePageTemplate data={data} />;
}
""")

# ─── Brand Strategy ───────────────────────────────────────────────────────────
write('app/services/brand-strategy/page.tsx', """'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 06',
  heroHeading: 'Brand',
  heroSubheading: 'Strategy.',
  heroDescription: 'Behind every successful brand lies a strong and well-defined strategy. We help businesses navigate complexity with clarity.',
  heroBg: '/performance-marketing/imgi_24_3c3942dac14a8ef23083e7c7df01eff6c22b477a-6000x1920.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Strategic Clarity',
  valuePropAccent: 'Long-term Sustainability.|',
  valuePropBody: [
    "By combining deep market insights with practical execution plans — from understanding your competition to identifying opportunities and defining your unique position — we build strategies that create direction and purpose.",
    '"Growth doesn\'t happen by chance — it happens by design. We design systems, funnels, and strategies that align with your business objectives and drive measurable results."',
  ],

  bentoHeading: 'Our Strategy',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Market Ops',
  bentoMainDesc: 'Developing the core strategic framework for brands to define their position and grow with clarity.',
  bentoCard1Title: 'Market Research',
  bentoCard1Desc: 'Deep analysis of industry trends, consumer intent, and competitive landscape.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,
  bentoCard2Image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Nexus Expansion', category: 'Growth Blueprint', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Market Entry', category: 'Competitor Analysis', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Vortex Positioning', category: 'Brand Direction', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Global Revenue', category: 'Sales Funnel Design', image: '/performance-marketing/imgi_18_64db3f8eb788d86bae40e90cf6c01b567d26ec21-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Market Research', description: 'Deep analysis of industry trends, consumer behaviour, and opportunities in your market.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Competitor Analysis', description: 'Understanding your competitors\' strengths and gaps to identify your strategic advantage.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: BarChart, title: 'Brand Positioning', description: 'Defining your unique place in the market and how your audience should perceive you.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Rocket, title: 'Sales Funnel Design', description: 'Creating structured customer journeys from discovery to conversion and loyalty.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Growth Strategy', description: 'Planning scalable and sustainable business growth aligned with your long-term goals.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Globe, title: 'Market Expansion', description: 'Strategies to help you reach new customers and enter new markets with confidence.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Strategy',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Market Deep Dive', description: 'Researching your industry, audience, and competitors to understand the landscape.' },
    { title: 'Positioning Design', description: 'Defining your unique value proposition and brand direction in the market.' },
    { title: 'Execution Blueprint', description: 'Building the strategic roadmap, funnels, and systems to achieve growth.' },
    { title: 'Monitoring & Scale', description: 'Tracking results and refining strategy to ensure long-term sustainability.' },
  ],

  differentiators: [
    { title: 'Insight-Driven', description: 'Every strategy is built on real market data and deep competitive analysis.' },
    { title: 'Purposeful Direction', description: 'We create clarity — every decision aligns with your long-term business goals.' },
    { title: 'Built to Scale', description: 'Strategies designed not just for today, but for sustainable long-term growth.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The strategic blueprint they built gave our team total clarity. We went from scattered efforts to a focused, measurable growth engine.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',

    showcaseHeading: 'Results',
    showcaseItems: [],

    metrics: [
      { label: 'Strategic Clarity', value: '100%' },
      { label: 'Growth Lift', value: '2.8x' },
      { label: 'Revenue ROI', value: '110%' },
    ],
    caseStudy: {
      title: 'Success: Building a Growth Strategy for Nexus',
      image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',
    }
  },

  ctaHeading: 'Ready to engineer',
  ctaSubheading: 'your brand strategy?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Brand Strategy',
  faqs: [
    { question: 'What does a brand strategy include?', answer: 'Market research, competitor analysis, brand positioning, sales funnels, and a long-term growth roadmap.' },
    { question: 'How long does strategy take?', answer: 'A full brand strategy engagement typically takes 4–8 weeks from research to final presentation.' },
    { question: 'Do you help with sales funnel design?', answer: 'Yes — we build structured customer journey maps from first touch to conversion and retention.' },
  ],
};

export default function BrandStrategyPage() {
  return <ServicePageTemplate data={data} />;
}
""")

print("Service pages updated successfully!")
