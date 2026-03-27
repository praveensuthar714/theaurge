'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 08',
  heroHeading: 'Performance',
  heroSubheading: 'Marketing Services.',
  heroDescription: 'Driving measurable results through data-backed advertising and high-conversion marketing campaigns.',
  heroBg: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Growth',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Marketing is more than just spending; it\'s about results. We build data-backed systems that help you turn every dollar into measurable business growth.',
    '"We create professional marketing campaigns that target the right audience with the right message to drive conversions and scale your brand."',
  ],

  bentoHeading: 'Our Marketing',
  bentoSubheading: 'Services.',
  bentoMainImage: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png',
  bentoMainTitle: 'Paid Strategy',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'In-depth market research and campaign strategy that identifies the best ways to grow your business.',
  bentoCard1Title: 'High-ROI Ads',
  bentoCard1Desc: 'Professional ad campaigns designed to capture high-value leads and drive sales.',
  bentoCard1Icon: Target,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Zap,

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Project One', category: 'Paid Media', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Campaign', image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg' },
    { title: 'Project Three', category: 'Growth', image: '/performance-marketing/imgi_16_be7e27123651deb726f382cd70f6ce86162a21da-2800x1450.png' },
    { title: 'Project Four', category: 'Ads', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Ad Strategy', description: 'Expertly managed campaigns that maximize your brand visibility and ROI.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: TrendingUp, title: 'Marketing Ops', description: 'Systems and tools to optimize your entire marketing funnel for better results.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: BarChart, title: 'Data Labs', description: 'Advanced tracking and reporting for complete visibility into your project growth.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'Scale Strategy', description: 'Keyword research and campaign strategy built to help you outrank all competitors.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Brand Authority', description: 'Positioning and messaging that makes your brand stand out in search results.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Zap, title: 'Ad Creative', description: 'High-end visuals and transitions for a completely immersive ad experience.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Marketing',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audit Session', description: 'Researching your current brand presence and identifying growth opportunities.' },
    { title: 'Campaign Sync', description: 'Defining the core channels, creative direction, and tech stack setup.' },
    { title: 'Growth Phase', description: 'Executing your marketing blueprint and building brand authority online.' },
    { title: 'Optimization', description: 'Constant data labs to refine your strategy and drive even more growth.' },
  ],

  differentiators: [
    { title: 'Data-Backed', description: 'Every marketing strategy we build is based on real market data and results.' },
    { title: 'Results Focus', description: 'We focus entirely on metrics that actually help your bottom line grow.' },
    { title: 'Expert Team', description: 'Sustainable, ethical marketing practices designed for long-term project success.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The marketing strategy they built for our launch was a game-changer. Our ROI increased by 2.5x.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_122_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Keyword Scope', value: '35+' },
      { label: 'Revenue Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus to Market Dominance',
      image: '/performance-marketing/imgi_41_8dbd500a8a2402c1db2b2b6de5cee6435dd4a7a8-3200x1016.png',
    }
  },

  ctaHeading: 'Ready to scale',
  ctaSubheading: 'your business today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Marketing',
  faqs: [
    { question: 'How long for results?', answer: 'Most marketing engines show measurable growth results within 4–6 weeks of deployment.' },
    { question: 'How do you track ROI?', answer: 'We use advanced analytics and attribution systems to track every dollar of your spend.' },
    { question: 'Do you scale globally?', answer: 'Yes, our marketing systems are built for both local and international expansion.' },
  ],
};

export default function MarketingPage() {
  return <ServicePageTemplate data={data} />;
}
