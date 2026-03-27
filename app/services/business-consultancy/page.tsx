'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Briefcase, TrendingUp, BarChart, Rocket, Shield, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 12',
  heroHeading: 'Premium Business',
  heroSubheading: 'Consultancy.',
  heroDescription: 'Providing high-level strategic advice and operational blueprints to help your business scale globally.',
  heroBg: '/business-consulting/imgi_151_86202e09f8f8d04837a469b6b5d6cc5f680bdad7-3840x1432.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Strategy',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Strategy is more than just a plan; it\'s about results. We build data-backed blueprints that help you turn every decision into measurable growth.',
    '"We provide professional business consultancy that targets your core goals with the right strategy to drive scale and market authority."',
  ],

  bentoHeading: 'Our Strategy',
  bentoSubheading: 'Services.',
  bentoMainImage: '/business-consulting/imgi_107_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png',
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
    { title: 'Strategy One', category: 'Consultancy', image: '/business-consulting/imgi_108_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Blueprint', image: '/business-consulting/imgi_106_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png' },
    { title: 'Project Three', category: 'Growth', image: '/business-consulting/imgi_104_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png' },
    { title: 'Project Four', category: 'Advisory', image: '/business-consulting/imgi_101_2833ed0c2c1534acbbddb040b28f3293079e8979-1800x945.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Briefcase, title: 'Expert Advisory', description: 'Expertly managed consulting that maximizes your brand visibility and ROI.', image: '/business-consulting/imgi_12_2d4689f3c4fc0eca4667566aaed880465d010736-1440x1548.png' },
    { icon: TrendingUp, title: 'Growth Planning', description: 'Systems and tools to optimize your entire growth blueprint for better results.', image: '/business-consulting/imgi_14_0965782f7d884a920bf427751e84eb5701a01f53-1440x1548.png' },
    { icon: BarChart, title: 'Data Analysis', description: 'Advanced tracking and reporting for complete visibility into your project growth.', image: '/business-consulting/imgi_11_89bdda5c155bef79b99e20c917cac46fa4d83fcb-1440x1548.png' },
    { icon: Rocket, title: 'Scale Strategy', description: 'Blueprint research and strategy built to help you outrank all competitors.', image: '/business-consulting/imgi_163_74d51303621c99f6193f58174bfbf21d31e30d4f-720x774.png' },
    { icon: Shield, title: 'Risk Compliance', description: 'Positioning and operations that makes your brand stand out in market results.', image: '/business-consulting/imgi_160_553b817518bd8c2afc578b8961c43434dbcba556-1392x1392.png' },
    { icon: Globe, title: 'Global Scale', description: 'Deploying your operational systems globally to facilitate business reach.', image: '/business-consulting/imgi_152_053d12c88612586129e37957d721ca39353d8086-720x1360.png' },
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
    avatar: '/performance-marketing/imgi_122_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Growth Lift', value: '110%' },
      { label: 'Revenue Scoped', value: '92%' },
      { label: 'ROI Scale', value: '4.2x' },
    ],
    caseStudy: {
      title: 'Success: Scaling Nexus with Strategy Consultancy',
      image: '/business-consulting/imgi_151_86202e09f8f8d04837a469b6b5d6cc5f680bdad7-3840x1432.png',
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
