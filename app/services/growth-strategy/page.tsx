'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 04',
  heroHeading: 'Growth Strategy',
  heroSubheading: '& Marketing.',
  heroDescription: 'Building high-performance marketing strategies and acquisition engines that drive measurable business growth.',
  heroBg: '/performance-marketing/imgi_24_3c3942dac14a8ef23083e7c7df01eff6c22b477a-6000x1920.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Growth',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Marketing without a clear strategy is just spending. We build growth engines that target the right audience with the right message to drive conversions.',
    '"We create data-backed marketing systems that help you scale your business and dominate your market with surgical precision."',
  ],

  bentoHeading: 'Our Growth',
  bentoSubheading: 'Services.',
  bentoMainImage: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
  bentoMainTitle: 'Market Strategy',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'In-depth market research and strategy development that identifies the best ways to grow your business.',
  bentoCard1Title: 'Paid Marketing',
  bentoCard1Desc: 'High-ROI advertising campaigns designed to capture high-value leads and drive sales.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Growth Campaign One', category: 'Paid Media', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Market Launch Two', category: 'Strategy', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Ad System Three', category: 'Campaign', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Global Scale Four', category: 'Growth', image: '/performance-marketing/imgi_18_64db3f8eb788d86bae40e90cf6c01b567d26ec21-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Ad Strategy', description: 'Expertly managed advertising campaigns that maximize your ROI and leads.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Marketing Ops', description: 'Systems and tools to optimize your entire marketing funnel for better results.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: BarChart, title: 'Data Analysis', description: 'Advanced tracking and reporting to give you complete visibility into your growth.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Rocket, title: 'Growth Systems', description: 'Scalable marketing engines built to grow with your business from day one.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Brand Strategy', description: 'Positioning and messaging that makes your brand stand out in a crowded market.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Globe, title: 'Global Expansion', description: 'Strategies to help you reach new customers in markets around the world.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Growth',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Analysis', description: 'Researching your market and audience to find the best growth opportunities.' },
    { title: 'Strategy', description: 'Designing a custom marketing blueprint to help you achieve your goals.' },
    { title: 'Execution', description: 'Launching and managing your marketing systems with constant optimization.' },
    { title: 'Optimization', description: 'Using data to refine your strategy and drive even faster growth over time.' },
  ],

  differentiators: [
    { title: 'Data-Backed', description: 'Every strategy we build is based on real market data and results.' },
    { title: 'ROI Focused', description: 'We focus entirely on metrics that actually grow your bottom line.' },
    { title: 'Global Expertise', description: 'Experience scaling brands across multiple international markets.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The growth strategy they built for us was a game-changer. Our lead volume doubled within the first month.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Leads Lift', value: '110%' },
      { label: 'Cost per Lead', value: '-35%' },
      { label: 'Revenue Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus to Market Dominance',
      image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your business today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Growth',
  faqs: [
    { question: 'How long for results?', answer: 'Most marketing engines show measurable results within 4–6 weeks of deployment.' },
    { question: 'How do you track ROI?', answer: 'We use advanced analytics and attribution systems to track every dollar of your spend.' },
    { question: 'Do you scale globally?', answer: 'Yes, our systems are built to handle both local and international market expansion.' },
  ],
};

export default function GrowthStrategyPage() {
  return <ServicePageTemplate data={data} />;
}
