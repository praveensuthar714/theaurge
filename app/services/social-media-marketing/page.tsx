'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Zap, Sparkles } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 04',
  heroHeading: 'Social Media',
  heroSubheading: 'Marketing.',
  heroDescription: 'In a fast-moving digital world, attention is the most valuable currency. We help brands cut through the noise with strategies that are not just creative, but result-driven.',
  heroBg: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Digital Attention',
  valuePropAccent: 'Result-Driven Strategies.|',
  valuePropBody: [
    "Our focus is not just on reaching people, but on connecting with the right audience at the right time with the right message. We blend creativity, data, and strategy to create campaigns that perform, convert, and build lasting brand relationships.",
    '"From building a strong presence to leveraging influencer collaborations and scaling e-commerce growth, we craft digital ecosystems that drive visibility and engagement."',
  ],

  bentoHeading: 'Our Social',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
  bentoMainTitle: 'Full-Scale',
  bentoMainSubtitle: 'Management',
  bentoMainDesc: 'End-to-end social media handling from content planning to execution for major brands.',
  bentoCard1Title: 'Influencer Marketing',
  bentoCard1Desc: 'Collaborating with the right creators to boost authenticity, reach, and trust.',
  bentoCard1Icon: Sparkles,
  bentoCard2Title: 'E-commerce Growth',
  bentoCard2Icon: Rocket,
  bentoCard2Image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',

  showcaseHeading: 'Our Clients',
  showcaseItems: [
    { title: 'Royal Enfield', category: 'Automotive Social', image: '/video-production/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Heera Panna', category: 'Retail Management', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Suprito Fashion', category: 'Fashion | Brand Consistency', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { title: 'Marvelous Hair Studio', category: 'Trend-Led Content', image: '/performance-marketing/imgi_16_be7e27123651deb726f382cd70f6ce86162a21da-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Social Strategy', description: 'Planning content and campaigns that align with your brand voice for consistent growth.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Sparkles, title: 'Content Creation', description: 'Engaging posts, reels, and creatives that capture attention and drive audience recall.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Influencer Marketing', description: 'We collaborate with the right influencers to boost reach and build authentic trust.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'E-commerce Marketing', description: 'Optimizing campaigns to increase direct product sales and digital conversions.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: BarChart, title: 'Ad Campaign Mgmt', description: 'Running targeted ads across platforms for better reach, engagement, and ROI.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Shield, title: 'Analytics & Optimization', description: 'Continuous tracking and improvement of performance metrics for sustainable growth.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Social',
  processSubheading: 'Pipeline.',
  processSteps: [
    { title: 'Audience Insight', description: 'Analyzing your audience behavior to craft a custom digital strategy and content plan.' },
    { title: 'Content Blueprint', description: 'Planning high-impact reels, posts, and creatives aligned with your brand tone.' },
    { title: 'Campaign Execution', description: 'Executing influencer collaborations and paid ad campaigns for maximum reach.' },
    { title: 'Data Optimization', description: 'Tracking performance and refining content to continuously maximize ROI.' },
  ],

  differentiators: [
    { title: 'Attention Currency', description: 'Strategy focused on cutting through digital noise and connecting with the right audience.' },
    { title: 'Ecosystem Build', description: 'Crafting digital environments that drive long-term visibility and engagement.' },
    { title: 'Performance Led', description: 'Result-driven campaigns that actually convert — not just reach.' },
  ],

  results: {
    company: 'Heera Panna',
    quote: "A blend of premium aesthetics and strategic storytelling that enhanced our social visibility, trust, and audience engagement significantly.",
    author: 'Retail Lead',
    role: 'Heera Panna Executive',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Visibility Lift', value: '3.5x' },
      { label: 'Trust Index', value: '92%' },
      { label: 'User Recall', value: '88%' },
    ],
    caseStudy: {
      title: 'Success: Scaling Heera Panna Socially',
      image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
    }
  },

  ctaHeading: 'Ready to cut',
  ctaSubheading: 'through the noise?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Social Media',
  faqs: [
    { question: 'What platforms do you manage?', answer: 'We handle end-to-end strategies across Instagram, Facebook, LinkedIn, Reels, and TikTok.' },
    { question: 'Do you work with influencers?', answer: 'Yes — we collaborate with high-impact influencers to boost brand trust and reach.' },
    { question: 'What brands have you managed?', answer: 'We manage Royal Enfield, Yamaha, Brixton, Heera Panna, Suprito, Marvelous Hair Studio, and Nourishing Farm.' },
  ],
};

export default function SocialMediaMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
