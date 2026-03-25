'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Image, Layers, Sparkles, Zap, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 05',
  heroHeading: 'Professional',
  heroSubheading: 'Photography.',
  heroDescription: 'Capturing high-quality imagery that defines your brand and tells your story with visual clarity.',
  heroBg: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2074&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Power',
  valuePropAccent: 'of Images.|',
  valuePropBody: [
    'A professional photograph does more than just show a product; it creates an emotional connection and projects trust.',
    '"We capture high-end photography that help your business stand out, tell your story, and build instant authority with your audience."',
  ],

  bentoHeading: 'Our Photo',
  bentoSubheading: 'Expertise.',
  bentoMainImage: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=1200',
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
    { title: 'Project One', category: 'Lifestyle', image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Product', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Three', category: 'Corporate', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600' },
    { title: 'Project Four', category: 'Events', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Commercial Photo', description: 'High-quality filming and stills with professional crews and equipment.', image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=400' },
    { icon: Image, title: 'Product Stills', description: 'Video advertisements designed to get clicks and conversions.', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=400' },
    { icon: Layers, title: 'Editing & Retouch', description: 'Professional post-production including editing, color, and effects.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Motion Capture', description: 'Fast-paced editing perfect for TikTok, Reels, and YouTube.', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Flash Systems', description: 'Beautiful lighting and composition for a professional look.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
    { icon: Monitor, title: 'Digital Assets', description: 'Speed-optimized editing to get your content live quickly.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
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
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Ads Lift', value: '2.4x' },
      { label: 'Customer Trust', value: '92%' },
      { label: 'Growth Rating', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Nexus',
      image: 'https://images.unsplash.com/photo-1492691223115-f86a89694073?auto=format&fit=crop&q=80&w=400&v=2',
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
