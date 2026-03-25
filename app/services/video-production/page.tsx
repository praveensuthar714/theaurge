'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Zap, Sparkles, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 03',
  heroHeading: 'Professional Video',
  heroSubheading: 'Production.',
  heroDescription: 'Creating high-quality cinematic videos and advertisements that help your brand tell its story and connect with your audience.',
  heroBg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Power',
  valuePropAccent: 'of Video.|',
  valuePropBody: [
    'In a world of constant scrolling, high-quality video is the best way to be heard. We create videos that grab attention and build instant trust with your viewers.',
    '"We produce professional films and ads that help your business stand out, tell your story, and drive more engagement across all platforms."',
  ],

  bentoHeading: 'Our Video',
  bentoSubheading: 'Services.',
  bentoMainImage: 'https://images.unsplash.com/photo-1478720330259-f1530e87a321?auto=format&fit=crop&q=80&w=1200&v=2',
  bentoMainTitle: 'Brand Film',
  bentoMainSubtitle: 'Production',
  bentoMainDesc: 'Professional films that define your brand and help you project authority in your market.',
  bentoCard1Title: 'High-Impact Ads',
  bentoCard1Desc: 'Short-form video content designed for social media growth and real business results.',
  bentoCard1Icon: Zap,
  bentoCard2Title: 'Motion Graphics',
  bentoCard2Icon: Sparkles,

  showcaseHeading: 'Our Films',
  showcaseItems: [
    { title: 'Nexus Campaign', category: 'Brand Film', image: 'https://images.unsplash.com/photo-1598897349489-bc474642db4f?q=80&w=600', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Narrative', category: 'Ad Film', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=600' },
    { title: 'Vortex Motion', category: 'Motion', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600' },
    { title: 'Apex Short Film', category: 'Short Film', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=600', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Film Production', description: 'High-quality filming with professional crews and equipment.', image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Ad Production', description: 'Video advertisements designed to get clicks and conversions.', image: 'https://images.unsplash.com/photo-1598818381102-535839d1b338?auto=format&fit=crop&q=80&w=400' },
    { icon: Sparkles, title: 'Editing & VFX', description: 'Professional post-production including editing, color, and effects.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400' },
    { icon: Monitor, title: 'Social Video', description: 'Fast-paced editing perfect for TikTok, Reels, and YouTube.', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=400' },
    { icon: Camera, title: 'Cinematic Style', description: 'Beautiful lighting and composition for a professional look.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
    { icon: Zap, title: 'Fast Turnaround', description: 'Speed-optimized editing to get your content live quickly.', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc511d?auto=format&fit=crop&q=80&w=400' },
  ],

  processLabel: 'Our Process',
  processHeading: 'How We',
  processSubheading: 'Produce.',
  processSteps: [
    { title: 'Pre-Production', description: 'Planning your narrative, storyboarding, and setting the creative direction.' },
    { title: 'The Shoot', description: 'Executing the filming with our expert team and high-end equipment.' },
    { title: 'Post-Production', description: 'Editing, color grading, and adding final sound for a polished look.' },
    { title: 'Delivery', description: 'Delivering your final video files ready for all your marketing channels.' },
  ],

  differentiators: [
    { title: 'High Quality', description: 'We use professional equipment and talent to ensure a cinematic result.' },
    { title: 'Clear Storytelling', description: 'Every film we build is designed to tell a clear, engaging story.' },
    { title: 'Results Focused', description: 'We produce videos that are built to help you grow your business.' },
  ],

  results: {
    company: 'Stellar Logistics',
    quote: "The brand film they produced for us was incredible. It really helped us connect with our customers and look professional.",
    author: 'Markus Vane',
    role: 'Creative Director @ Stellar',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    metrics: [
      { label: 'Engagement', value: '2.4x' },
      { label: 'Brand Recall', value: '92%' },
      { label: 'Video ROI', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Stellar',
      image: 'https://images.unsplash.com/photo-1492691223115-f86a89694073?auto=format&fit=crop&q=80&w=400&v=2',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your new video?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Video',
  faqs: [
    { question: 'How long to produce?', answer: 'Most video projects take between 4–8 weeks from planning to final delivery.' },
    { question: 'Do you travel?', answer: 'Yes, we have crews available to travel globally for high-end film production.' },
    { question: 'What video types?', answer: 'We specialize in brand films, commercials, and high-impact social media ads.' },
  ],
};

export default function VideoProductionPage() {
  return <ServicePageTemplate data={data} />;
}

