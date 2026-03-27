'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Code2, Cpu, Globe, Layers, Zap, Sparkles } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 01',
  heroHeading: 'Web Design',
  heroSubheading: '& Development.',
  heroDescription: 'Building high-performance websites and digital platforms that drive results and grow your business.',
  heroBg: '/website-development/imgi_14_0e0c17f606edac86bc6c518d5a9cbad76721533a-2800x1450.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Digital',
  valuePropAccent: 'Presence.|',
  valuePropBody: [
    'Your website is your most important digital asset. We build platforms that combine beautiful design with powerful technology to help you stand out.',
    '"We create fast, secure, and easy-to-use websites that turn visitors into customers through smart design and clean code."',
  ],

  bentoHeading: 'Our Web',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/website-development/imgi_13_63137c06a840043ddc8877d799fe93b94d8889dd-2800x1450.png',
  bentoMainTitle: 'Full-Stack',
  bentoMainSubtitle: 'Development',
  bentoMainDesc: 'Modern web applications built with the latest technology for speed, security, and scale.',
  bentoCard1Title: 'Custom Features',
  bentoCard1Desc: 'We build the specific tools and functions your business needs to succeed online.',
  bentoCard1Icon: Cpu,
  bentoCard2Title: 'Global Reach',
  bentoCard2Icon: Globe,

  modules: [
    { icon: Code2, title: 'Clean Code', description: 'Expertly written code that is fast, secure, and easy to maintain.', image: '/website-development/imgi_26_eff3357620f38b12c5d8bec26b6dd6360cb25c43-2400x2944.png' },
    { icon: Cpu, title: 'Fast Performance', description: 'Optimized websites that load instantly across all devices.', image: '/website-development/imgi_27_eff3357620f38b12c5d8bec26b6dd6360cb25c43-2400x2944.png' },
    { icon: Layers, title: 'Responsive Design', description: 'Websites that look and work perfectly on phones, tablets, and desktops.', image: '/website-development/imgi_67_6683f94d9ba03478837244d4333b1188a75808dd-1536x1760.avif' },
    { icon: Globe, title: 'SEO Optimized', description: 'Built-in SEO best practices to help your website rank on Google.', image: '/website-development/imgi_113_52dd44eac93588f55945d184aa59d46dc7806d3a-1440x1548.png' },
    { icon: Zap, title: 'Secure Systems', description: 'Advanced security protocols to keep your data and users safe.', image: '/website-development/imgi_110_624e9e9446262a7d38d21a7ef45227d4eba5a1a9-1440x1548.png' },
    { icon: Sparkles, title: 'Great UX', description: 'User-friendly interfaces that make navigating your site a breeze.', image: '/website-development/imgi_108_30c5b7e76632ac83904bed5fb5697c699f7a39a8-1440x1548.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'How We',
  processSubheading: 'Work.',
  processSteps: [
    { title: 'Project Planning', description: 'Understanding your goals and planning the perfect digital solution.' },
    { title: 'Design & UI', description: 'Creating beautiful, easy-to-use designs for your new website.' },
    { title: 'Development', description: 'Building your site with clean code and high-performance technology.' },
    { title: 'Launch & Support', description: 'Testing everything thoroughly and launching your site to the world.' },
  ],

  results: {
    company: 'Nexus Tech',
    quote: "Our new website is incredibly fast and easy for our customers to use. The results have been fantastic.",
    author: 'Elena Ross',
    role: 'CTO @ Nexus',
    avatar: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png',
    metrics: [
      { label: 'Page Speed', value: '100/100' },
      { label: 'Mobile Optim.', value: '98%' },
      { label: 'Revenue Growth', value: '40%' },
    ],
    caseStudy: {
      title: 'Success: High-Perf Platform for Nexus',
      image: '/branding/imgi_27_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
    }
  },

  showcaseHeading: 'Our Projects',
  showcaseItems: [
    { title: 'Portfolio One', category: 'Web App', image: '/website-development/imgi_26_eff3357620f38b12c5d8bec26b6dd6360cb25c43-2400x2944.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Portfolio Two', category: 'E-commerce', image: '/website-development/imgi_113_52dd44eac93588f55945d184aa59d46dc7806d3a-1440x1548.png' },
    { title: 'Portfolio Three', category: 'Business Site', image: '/website-development/imgi_110_624e9e9446262a7d38d21a7ef45227d4eba5a1a9-1440x1548.png' },
    { title: 'Portfolio Four', category: 'Landing Page', image: '/website-development/imgi_108_30c5b7e76632ac83904bed5fb5697c699f7a39a8-1440x1548.png', span: 'lg:col-span-2' },
  ],

  differentiators: [
    { title: 'Custom Solutions', description: 'Every site is built specifically for your business needs.' },
    { title: 'Fast Results', description: 'We focus on speed and performance to get you results quickly.' },
    { title: 'Ongoing Support', description: 'We are here to help you even after your site launches.' },
  ],

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your new website?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Services',
  faqs: [
    { question: 'How long does it take?', answer: 'Most web projects take between 6–10 weeks depending on complexity.' },
    { question: 'Do you offer support?', answer: 'Yes, we provide ongoing maintenance and support to keep your site running smoothly.' },
    { question: 'Is it mobile friendly?', answer: 'Every website we build is 100% responsive and works on all mobile devices.' },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePageTemplate data={data} />;
}
