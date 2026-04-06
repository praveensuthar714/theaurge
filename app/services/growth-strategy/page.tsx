'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 10',
  heroHeading: 'Growth',
  heroSubheading: 'Strategy.',
  heroDescription: 'Marketing without a clear strategy is just spending. We build high-performance growth engines that drive measurable business results.',
  heroBg: '/performance-marketing/imgi_24_3c3942dac14a8ef23083e7c7df01eff6c22b477a-6000x1920.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Precision Scaling',
  valuePropAccent: 'Institutional Growth.|',
  valuePropBody: [
    'We focus on the architectural blueprint of your brand expansion. By combining market research with data-backed execution, we identify the most efficient paths to scale your business and dominate your market.',
    '"Growth is not accidental; it is engineered. We build the systems that allow your brand to reach its full digital potential with surgical precision."'
  ],

  bentoHeading: 'Our Search',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Growth Ops',
  bentoMainDesc: 'Developing the core strategic framework for global brands to expand their digital footprint.',
  bentoCard1Title: 'Market Sync',
  bentoCard1Desc: 'Deep analysis of competitor behavior and audience entry bits to find growth gaps.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,
  bentoCard2Image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Nexus Expansion', category: 'Growth Blueprint', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Market Fit', category: 'Strategic Launch', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Vortex Ad System', category: 'Scale Ops', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Global Revenue', category: 'High-Scale Growth', image: '/performance-marketing/imgi_18_64db3f8eb788d86bae40e90cf6c01b567d26ec21-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Ad Strategy', description: 'Expertly managed campaigns that maximize your brand visibility and ROI.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Growth Ops', description: 'Setting up the backend systems to monitor and scale your business velocity.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: BarChart, title: 'Data Attribution', description: 'Advanced tracking to understand exactly where your growth is coming from.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Rocket, title: 'Velocity Labs', description: 'A technical refining lab where your acquisition speed is perfected and scaled.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Market Defense', description: 'Strategies to protect your market share and maintain dominance over competitors.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Globe, title: 'Expansion Sync', description: 'Scaling your brand across multiple international markets with unified logic.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Strategy',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Analysis stage', description: 'Researching your audience and competitors to identify the growth gaps.' },
    { title: 'Architect phase', description: 'Designing the custom strategic blueprint and operational logic.' },
    { title: 'Execution stage', description: 'Deploying the marketing engines and monitoring the real-time velocity.' },
    { title: 'Optimization Lab', description: 'Refining data to increase the accuracy of your brand reach and ROI.' },
  ],

  differentiators: [
    { title: 'Institutional Logic', description: 'Building strategies that are scalable, repeatable, and data-backed.' },
    { title: 'ROI Precision', description: 'Focusing entirely on high-intent targets that drive business revenue.' },
    { title: 'Market Authority', description: 'Positioning your brand as the dominant choice in your digital space.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The strategic blueprint they built for us transformed how we acquire customers globally. It was logical and effective.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'CPA Drop', value: '35%' },
      { label: 'Reach Scale', value: '2.8x' },
      { label: 'Revenue ROI', value: '110%' },
    ],
    caseStudy: {
      title: 'Success: Ranking Nexus to Market Dominance',
      image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',
    }
  },

  ctaHeading: 'Ready to engineer',
  ctaSubheading: 'your business growth?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Growth Strategy',
  faqs: [
    { question: 'What is a growth engine?', answer: 'It is a repeatable and scalable marketing system designed to acquire customers.' },
    { question: 'How long to see ROI?', answer: 'Strategic campaigns typically show measurable business lift within 4–8 weeks.' },
    { question: 'Do you expand globally?', answer: 'Yes, we specialize in scaling brands across multiple international markets.' },
  ],
};

export default function GrowthStrategyPage() {
  return <ServicePageTemplate data={data} />;
}
