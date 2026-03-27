'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Image, Layers, Sparkles, Zap, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 05',
  heroHeading: 'Professional',
  heroSubheading: 'Photography.',
  heroDescription: 'Capturing high-quality imagery that defines your brand and tells your story with visual clarity.',
  heroBg: '/video-production/imgi_40_ac7bdf55928d15f333796ec5b6f049cd330536dd-3324x2208.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Power',
  valuePropAccent: 'of Images.|',
  valuePropBody: [
    'A professional photograph does more than just show a product; it creates an emotional connection and projects trust.',
    '"We capture high-end photography that help your business stand out, tell your story, and build instant authority with your audience."',
  ],

  bentoHeading: 'Our Photo',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/video-production/imgi_4_8849646b5a328f2de4e375ef109594bebc4858b9-1200x1472.png',
  bentoMainTitle: 'Brand Portrait',
  bentoMainSubtitle: 'Session',
  bentoMainDesc: 'Professional portraits and brand lifestyle imagery that help you connect with your audience on a personal level.',
  bentoCard1Title: 'Product Media',
  bentoCard1Desc: 'High-quality product photography designed for e-commerce and marketing conversion.',
  bentoCard1Icon: Image,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Monitor,

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Project One', category: 'Lifestyle', image: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Product', image: '/video-production/imgi_82_95ce326d59a9bcefe3d54972376402e1c0f6d792-768x880.png' },
    { title: 'Project Three', category: 'Corporate', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png' },
    { title: 'Project Four', category: 'Events', image: '/video-production/imgi_85_9babda97975af7d29219e4183c688efe0d0463f4-720x728.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Commercial Photo', description: 'High-quality filming and stills with professional crews and equipment.', image: '/video-production/imgi_26_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg' },
    { icon: Image, title: 'Product Stills', description: 'Video advertisements designed to get clicks and conversions.', image: '/video-production/imgi_30_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { icon: Layers, title: 'Editing & Retouch', description: 'Professional post-production including editing, color, and effects.', image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Sparkles, title: 'Motion Capture', description: 'Fast-paced editing perfect for TikTok, Reels, and YouTube.', image: '/video-production/imgi_21_73ca3279a0631316a07443f727af6f7cb0fb106d-132x84.png' },
    { icon: Zap, title: 'Flash Systems', description: 'Beautiful lighting and composition for a professional look.', image: '/video-production/imgi_10_720ce9fb43ee5ce93fbed66e56bfe075aee95760-1000x1000.png' },
    { icon: Monitor, title: 'Digital Assets', description: 'Speed-optimized editing to get your content live quickly.', image: '/video-production/imgi_25_8174c6cb21efd19c01df7cddbdcadf03bfbc2477-720x720.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Capture',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Storyboarding', description: 'Planning the visual narrative and mood for your shoot.' },
    { title: 'Capture session', description: 'Executing the session with our expert team and high-end gear.' },
    { title: 'Selection Lab', description: 'A selective refining lab where only the best frames are chosen.' },
    { title: 'Delivery', description: 'Delivering your final images ready for all your marketing needs.' },
  ],

  differentiators: [
    { title: 'Expert Equipment', description: 'We use professional cameras and lighting to ensure a cinematic result.' },
    { title: 'Clear Storytelling', description: 'Every image we build is designed to tell a clear, engaging story.' },
    { title: 'Results Focus', description: 'We produce images that help you grow your business and build trust.' },
  ],

  results: {
    company: 'Nexus Living',
    quote: "The brand images they produced for us were incredible. It really helped us connect with our customers.",
    author: 'Sam Thorne',
    role: 'Marketing Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Ads Lift', value: '2.4x' },
      { label: 'Customer Trust', value: '92%' },
      { label: 'Growth Rating', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Nexus',
      image: '/video-production/imgi_2_8babda97975af7d29219e4183c688efe0d0463f4-720x728.png',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your brand imagery?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Photography',
  faqs: [
    { question: 'How long to produce?', answer: 'Most session projects take between 2–4 weeks from planning to final delivery.' },
    { question: 'Do you travel?', answer: 'Yes, we have crews available to travel globally for high-end photography.' },
    { question: 'What photo types?', answer: 'We specialize in brand portraits, product media, and high-impact ads.' },
  ],
};

export default function PhotographyPage() {
  return <ServicePageTemplate data={data} />;
}
