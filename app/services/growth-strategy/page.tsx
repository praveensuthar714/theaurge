'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 04',
  heroHeading: 'Growth Strategy',
  heroSubheading: '& Marketing.',
  heroDescription: 'Building high-performance marketing strategies and acquisition engines that drive measurable business growth.',
  heroBg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Growth',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Marketing without a clear strategy is just spending. We build growth engines that target the right audience with the right message to drive conversions.',
    '"We create data-backed marketing systems that help you scale your business and dominate your market with surgical precision."',
  ],

  bentoHeading: 'Our Growth',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1543286386-713bdd54865e?auto=format&fit=crop&q=80&w=1200',
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
    { title: 'Growth Campaign One', category: 'Paid Media', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Market Launch Two', category: 'Strategy', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
    { title: 'Ad System Three', category: 'Campaign', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Global Scale Four', category: 'Growth', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Ad Strategy', description: 'Expertly managed advertising campaigns that maximize your ROI and leads.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: TrendingUp, title: 'Marketing Ops', description: 'Systems and tools to optimize your entire marketing funnel for better results.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { icon: BarChart, title: 'Data Analysis', description: 'Advanced tracking and reporting to give you complete visibility into your growth.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
    { icon: Rocket, title: 'Growth Systems', description: 'Scalable marketing engines built to grow with your business from day one.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
    { icon: Shield, title: 'Brand Strategy', description: 'Positioning and messaging that makes your brand stand out in a crowded market.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
    { icon: Globe, title: 'Global Expansion', description: 'Strategies to help you reach new customers in markets around the world.', image: 'https://images.unsplash.com/photo-1529400971008-f56ecca129a3?auto=format&fit=crop&q=80&w=400' },
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
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Leads Lift', value: '110%' },
      { label: 'Cost per Lead', value: '-35%' },
      { label: 'Revenue Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus to Market Dominance',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
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
