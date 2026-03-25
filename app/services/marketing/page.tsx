'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 08',
  heroHeading: 'Performance',
  heroSubheading: 'Marketing Services.',
  heroDescription: 'Driving measurable results through data-backed advertising and high-conversion marketing campaigns.',
  heroBg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2072&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Growth',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Marketing is more than just spending; it\'s about results. We build data-backed systems that help you turn every dollar into measurable business growth.',
    '"We create professional marketing campaigns that target the right audience with the right message to drive conversions and scale your brand."',
  ],

  bentoHeading: 'Our Marketing',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
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
    { title: 'Project One', category: 'Paid Media', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Campaign', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'Growth', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Ads', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Ad Strategy', description: 'Expertly managed campaigns that maximize your brand visibility and ROI.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: TrendingUp, title: 'Marketing Ops', description: 'Systems and tools to optimize your entire marketing funnel for better results.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { icon: BarChart, title: 'Data Labs', description: 'Advanced tracking and reporting for complete visibility into your project growth.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
    { icon: Rocket, title: 'Scale Strategy', description: 'Keyword research and campaign strategy built to help you outrank all competitors.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
    { icon: Shield, title: 'Brand Authority', description: 'Positioning and messaging that makes your brand stand out in search results.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Ad Creative', description: 'High-end visuals and transitions for a completely immersive ad experience.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=400' },
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
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Keyword Scope', value: '35+' },
      { label: 'Revenue Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus to Market Dominance',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
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
