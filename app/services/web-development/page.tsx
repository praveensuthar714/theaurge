'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Code2, Cpu, Globe, Layers, Zap, Sparkles } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 01',
  heroHeading: 'Web Design',
  heroSubheading: '& Development.',
  heroDescription: 'Building high-performance websites and digital platforms that drive results and grow your business.',
  heroBg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Digital',
  valuePropAccent: 'Presence.|',
  valuePropBody: [
    'Your website is your most important digital asset. We build platforms that combine beautiful design with powerful technology to help you stand out.',
    '"We create fast, secure, and easy-to-use websites that turn visitors into customers through smart design and clean code."',
  ],

  bentoHeading: 'Our Web',
  bentoSubheading: 'Expertise.',
  bentoMainImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
  bentoMainTitle: 'Full-Stack',
  bentoMainSubtitle: 'Development',
  bentoMainDesc: 'Modern web applications built with the latest technology for speed, security, and scale.',
  bentoCard1Title: 'Custom Features',
  bentoCard1Desc: 'We build the specific tools and functions your business needs to succeed online.',
  bentoCard1Icon: Cpu,
  bentoCard2Title: 'Global Reach',
  bentoCard2Icon: Globe,

  modules: [
    { icon: Code2, title: 'Clean Code', description: 'Expertly written code that is fast, secure, and easy to maintain.', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400' },
    { icon: Cpu, title: 'Fast Performance', description: 'Optimized websites that load instantly across all devices.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=400' },
    { icon: Layers, title: 'Responsive Design', description: 'Websites that look and work perfectly on phones, tablets, and desktops.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
    { icon: Globe, title: 'SEO Optimized', description: 'Built-in SEO best practices to help your website rank on Google.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Secure Systems', description: 'Advanced security protocols to keep your data and users safe.', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Great UX', description: 'User-friendly interfaces that make navigating your site a breeze.', image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=400' },
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
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Site Speed', value: '100%' },
      { label: 'New Leads', value: '42%' },
      { label: 'User Satisfaction', value: '95%' },
    ],
    caseStudy: {
      title: 'Success: A Faster, Better Website for Nexus',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
    }
  },

  showcaseHeading: 'Our Projects',
  showcaseItems: [
    { title: 'Portfolio One', category: 'Web App', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Portfolio Two', category: 'E-commerce', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600' },
    { title: 'Portfolio Three', category: 'Business Site', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600' },
    { title: 'Portfolio Four', category: 'Landing Page', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600', span: 'lg:col-span-2' },
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
