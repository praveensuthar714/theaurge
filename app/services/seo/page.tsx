'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Globe, Search, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 07',
  heroHeading: 'Professional SEO',
  heroSubheading: '& Optimization.',
  heroDescription: 'Optimizing your digital presence to rank higher, reach more customers, and dominate your market.',
  heroBg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2072&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Visibility',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Search engine optimization is more than just keywords. It\'s about building a digital foundation that search engines trust and rank.',
    '"We build technical SEO systems that help your business get found and grow through organic search results and smart data strategy."',
  ],

  bentoHeading: 'Our SEO',
  bentoSubheading: 'Expertise.',
  bentoMainImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Search Strategy',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'In-depth keyword research and competitor analysis to identify the best ways for you to rank on Google.',
  bentoCard1Title: 'Technical SEO',
  bentoCard1Desc: 'Optimizing your website code and performance for faster speeds and better crawlability.',
  bentoCard1Icon: Globe,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Search,

  showcaseHeading: 'Our Results',
  showcaseItems: [
    { title: 'Project One', category: 'Organic', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Technical', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'Growth', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Optimization', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Globe, title: 'Organic Growth', description: 'Expertly managed campaigns that maximize your brand visibility and leads.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: Search, title: 'Technical Cleanup', description: 'Optimizing your site code for faster load times and better search indexing.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { icon: BarChart, title: 'Data Analysis', description: 'Advanced tracking and reporting for complete visibility into your growth.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
    { icon: Rocket, title: 'Search Strategy', description: 'Keyword research and strategy built to help you outrank your competitors.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
    { icon: Shield, title: 'Brand Authority', description: 'Positioning and content that makes your brand stand out in search results.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Core Vitals', description: 'A technical refining lab where your site speed and performance are perfected.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The SEO',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audit Session', description: 'Researching your current search presence and identifying opportunities.' },
    { title: 'Technical Sync', description: 'Optimizing your site code and structure for better indexing and speed.' },
    { title: 'Growth Phase', description: 'Executing your keyword strategy and building brand authority online.' },
    { title: 'Optimization', description: 'Constant data labs to refine your strategy and drive even more growth.' },
  ],

  differentiators: [
    { title: 'Data-Backed', description: 'Every SEO strategy we build is based on real market data and results.' },
    { title: 'Results Focus', description: 'We focus entirely on metrics that actually help your bottom line grow.' },
    { title: 'White-Hat Style', description: 'Sustainable, ethical SEO practices designed for long-term project success.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The SEO strategy they built for our launch was a game-changer. We reached page one within months.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Organic Lift', value: '110%' },
      { label: 'Keyword Scope', value: '35+' },
      { label: 'Growth Rating', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Nexus',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
    }
  },

  ctaHeading: 'Ready to rank',
  ctaSubheading: 'your business today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'SEO',
  faqs: [
    { question: 'How long for results?', answer: 'Most SEO systems show measurable growth results within 3–6 months of deployment.' },
    { question: 'How do you track growth?', answer: 'We use advanced tracking labs to monitor your rankings and organic traffic daily.' },
    { question: 'Do you scale globally?', answer: 'Yes, our SEO systems are built for both local and international market expansion.' },
  ],
};

export default function SEOPage() {
  return <ServicePageTemplate data={data} />;
}
