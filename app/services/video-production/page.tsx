'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Zap, Sparkles, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 03',
  heroHeading: 'Professional Video',
  heroSubheading: 'Production.',
  heroDescription: 'Creating high-quality cinematic videos and advertisements that help your brand tell its story and connect with your audience.',
  heroBg: '/video-production/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Power',
  valuePropAccent: 'of Video.|',
  valuePropBody: [
    'In a world of constant scrolling, high-quality video is the best way to be heard. We create videos that grab attention and build instant trust with your viewers.',
    '"We produce professional films and ads that help your business stand out, tell your story, and drive more engagement across all platforms."',
  ],

  bentoHeading: 'Our Video',
  bentoSubheading: 'Services.',
  bentoMainImage: '/video-production/imgi_10_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png',
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
    { title: 'Nexus Campaign', category: 'Brand Film', image: '/video-production/imgi_13_81b6522f52cc241b6bd7218483f140be359dd2b6-2400x1260.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Narrative', category: 'Ad Film', image: '/video-production/imgi_68_43cd1cce775c4e63a36195e13dd3913f3e9caa28-768x880.png' },
    { title: 'Vortex Motion', category: 'Motion', image: '/video-production/imgi_70_3b4df6c308e199c6b80eb1b9248604fb265d8f9d-768x880.png' },
    { title: 'Apex Short Film', category: 'Short Film', image: '/video-production/imgi_71_39c97cafcdcc6468c15ef19eed05c26029d6d329-768x880.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Film Production', description: 'High-quality filming with professional crews and equipment.', image: '/video-production/imgi_3_c0a72587cff2a0330d036f2daa0c2966e509e83e-88x56.png' },
    { icon: Zap, title: 'Ad Production', description: 'Video advertisements designed to get clicks and conversions.', image: '/video-production/imgi_4_b670e23665c3387cd4659a89392b0d416395c161-72x56.png' },
    { icon: Sparkles, title: 'Editing & VFX', description: 'Professional post-production including editing, color, and effects.', image: '/video-production/imgi_5_39ea31c2e790762ccd4c267eedac6ea28aa192c4-72x56.png' },
    { icon: Monitor, title: 'Social Video', description: 'Fast-paced editing perfect for TikTok, Reels, and YouTube.', image: '/video-production/imgi_6_188877b82aca48b7db038b5ea7ae4b442c1c75db-72x56.png' },
    { icon: Camera, title: 'Cinematic Style', description: 'Beautiful lighting and composition for a professional look.', image: '/video-production/imgi_7_1280ab7981c4a3009811b0d80327ca3f76c32de3-72x56.png' },
    { icon: Zap, title: 'Fast Turnaround', description: 'Speed-optimized editing to get your content live quickly.', image: '/video-production/imgi_8_cd13368aad2d06cc072aa42b992e897c2867d9ac-72x56.png' },
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
    avatar: '/branding/imgi_111_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Engagement', value: '2.4x' },
      { label: 'Brand Recall', value: '92%' },
      { label: 'Video ROI', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Stellar',
      image: '/video-production/imgi_88_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
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

