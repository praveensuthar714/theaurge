'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 09',
  heroHeading: 'Performance',
  heroSubheading: 'Marketing.',
  heroDescription: 'In today’s competitive landscape, marketing needs to do more than just reach — it needs to perform. We specialize in data-driven marketing strategies that are focused on delivering real, measurable results.',
  heroBg: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Growth Engine',
  valuePropAccent: 'Attention Based Marketing.|',
  valuePropBody: [
    'Every campaign we create is backed by insights, optimized continuously, and aligned with clear business objectives.',
    'From precise audience targeting to conversion optimization, we ensure that every effort contributes to growth and ROI. Because true marketing success is not measured by impressions alone, but by the impact it creates and the results it delivers.'
  ],

  bentoHeading: 'Our Growth',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Ads Library',
  bentoMainDesc: 'Building and managing high-scale ad accounts for global brands with precision technical oversight.',
  bentoCard1Title: 'ROI Tracking',
  bentoCard1Desc: 'Advanced attribution systems to track every dollar of your marketing spend in real-time.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Zap,
  bentoCard2Image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Nexus Paid Media', category: 'Growth Campaign', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Sales Funnel', category: 'Conversion Ops', image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg' },
    { title: 'Vortex Global Ads', category: 'High-Scale Ads', image: '/performance-marketing/imgi_16_be7e27123651deb726f382cd70f6ce86162a21da-2800x1450.png' },
    { title: 'Discovery Sync', category: 'Lead Gen', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Campaign Strategy', description: 'Planning result-oriented marketing campaigns.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: TrendingUp, title: 'Audience Targeting', description: 'Reaching the right audience with precision.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: BarChart, title: 'Ad Optimization', description: 'Improving performance through data analysis.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'Conversion Tracking', description: 'Monitoring and improving results.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'ROI Growth', description: 'Ensuring every rupee spent delivers value.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Growth',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audience Sync', description: 'Deep diving into your customer behavior and identifying high-intent entry bits.' },
    { title: 'Funnel Build', description: 'Architecting the landing pages and email sequences for conversion.' },
    { title: 'Growth Launch', description: 'Deploying ad campaigns across multiple channels and monitoring results.' },
    { title: 'Scaling Lab', description: 'Continuously refining data to increase ROI and scale your brand reach.' },
  ],

  differentiators: [
    { title: 'ROI Driven', description: 'We focus entirely on metrics that actually help your bottom line grow.' },
    { title: 'Data Insight', description: 'Campaigns built on research, not guesswork, for predictable scaling.' },
    { title: 'Technical Stack', description: 'Ensuring your tracking and attribution is perfect for business clarity.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The growth strategy they built transformed our revenue model. We reached target goals within the first quarter.",
    author: 'Elena Ross',
    role: 'Growth Division @ Nexus',
    avatar: '/performance-marketing/imgi_122_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'CPA Drop', value: '42%' },
      { label: 'ROI Scale', value: '5.4x' },
      { label: 'Market Reach', value: '250%' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Performance Ops',
      image: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
    }
  },

  ctaHeading: 'Ready to scale',
  ctaSubheading: 'your digital engine?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Services',
  faqs: [
    { question: 'What is a sales funnel?', answer: 'It is an optimized digital journey designed to guide a user from discovery to purchase.' },
    { question: 'Do you manage social ads?', answer: 'Yes, we specialize in high-conversion campaigns across Meta, TikTok, and LinkedIn.' },
    { question: 'How do you track ROI?', answer: 'We set up advanced technical tracking to monitor every dollar spent and earned.' },
  ],
};

export default function MarketingPage() {
  return <ServicePageTemplate data={data} />;
}
