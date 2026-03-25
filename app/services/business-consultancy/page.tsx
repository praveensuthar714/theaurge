'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Briefcase, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 12',
  heroHeading: 'Premium Business',
  heroSubheading: 'Consultancy.',
  heroDescription: 'Providing high-level strategic advice and operational blueprints to help your business scale globally.',
  heroBg: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Strategy',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Strategy is more than just a plan; it\'s about results. We build data-backed blueprints that help you turn every decision into measurable growth.',
    '"We provide professional business consultancy that targets your core goals with the right strategy to drive scale and market authority."',
  ],

  bentoHeading: 'Our Strategy',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Market Analysis',
  bentoMainSubtitle: 'Consulting',
  bentoMainDesc: 'In-depth market research and strategy development that identifies the best ways to scale your global operations.',
  bentoCard1Title: 'Operational Sync',
  bentoCard1Desc: 'Professional blueprints designed to optimize your internal workflows and drive efficiency.',
  bentoCard1Icon: Shield,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,

  showcaseHeading: 'Our Success',
  showcaseItems: [
    { title: 'Strategy One', category: 'Consultancy', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Blueprint', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'Growth', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Advisory', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Briefcase, title: 'Expert Advisory', description: 'Expertly managed consulting that maximizes your brand visibility and ROI.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
    { icon: TrendingUp, title: 'Growth Planning', description: 'Systems and tools to optimize your entire growth blueprint for better results.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { icon: BarChart, title: 'Data Analysis', description: 'Advanced tracking and reporting for complete visibility into your project growth.', image: 'https://images.unsplash.com/photo-1454165833767-1314d07b483c?auto=format&fit=crop&q=80&w=400' },
    { icon: Rocket, title: 'Scale Strategy', description: 'Blueprint research and strategy built to help you outrank all competitors.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
    { icon: Shield, title: 'Risk Compliance', description: 'Positioning and operations that makes your brand stand out in market results.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400' },
    { icon: Globe, title: 'Global Scale', description: 'Deploying your operational systems globally to facilitate business reach.', image: 'https://images.unsplash.com/photo-1529400971008-f56ecca129a3?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Strategy',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audit Session', description: 'Researching your current business presence and identifying growth opportunities.' },
    { title: 'Blueprint Sync', description: 'Defining the core channels, creative direction, and tech stack setup.' },
    { title: 'Growth Phase', description: 'Executing your strategy blueprint and building brand authority online.' },
    { title: 'Optimization', description: 'Constant data labs to refine your strategy and drive even more growth.' },
  ],

  differentiators: [
    { title: 'Data-Backed', description: 'Every strategy blueprint we build is based on real market data and results.' },
    { title: 'Results Focus', description: 'We focus entirely on metrics that actually help your bottom line grow.' },
    { title: 'Expert Team', description: 'Sustainable, ethical consultancy practices designed for long-term project success.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The business strategy they built for our launch was a game-changer. Our leads increased by 2.4x.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Revenue Scoped', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Strategy Consultancy',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&v=2',
    }
  },

  ctaHeading: 'Ready to scale',
  ctaSubheading: 'your business today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Consultancy',
  faqs: [
    { question: 'What can be automated?', answer: 'We specialize in automating lead generation, customer outreach, and operational data.' },
    { question: 'How long for results?', answer: 'Most strategies show measurable growth results within 4–6 weeks of deployment.' },
    { question: 'What about scale?', answer: 'We ensure all blueprints are built précisément for massive business scale.' },
  ],
};

export default function BusinessConsultancyPage() {
  return <ServicePageTemplate data={data} />;
}
