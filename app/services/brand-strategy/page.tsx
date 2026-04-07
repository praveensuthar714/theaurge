'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 06',
  heroHeading: 'Brand',
  heroSubheading: 'Strategy.',
  heroDescription: 'Behind every successful brand lies a strong and well-defined strategy. We help businesses navigate complexity with clarity by combining deep market insights with practical execution plans.',
  heroBg: '/performance-marketing/imgi_24_3c3942dac14a8ef23083e7c7df01eff6c22b477a-6000x1920.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Strategic Clarity',
  valuePropAccent: 'Long-term Sustainability.|',
  valuePropBody: [
    "From understanding your competition to identifying opportunities and defining your unique position, we build strategies that create direction and purpose.",
    "Our goal is not just short-term growth, but long-term sustainability. We design systems, funnels, and strategies that align with your business objectives and drive measurable results. Because growth doesn't happen by chance — it happens by design.",
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
    { icon: Target, title: 'Market Research', description: 'Deep analysis of industry trends and opportunities.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Competitor Analysis', description: 'Understanding strengths and gaps in the market.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: BarChart, title: 'Brand Positioning', description: 'Defining your unique place in the market.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Rocket, title: 'Sales Funnel Design', description: 'Creating structured customer journeys.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Growth Strategy', description: 'Planning scalable and sustainable business growth.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
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
