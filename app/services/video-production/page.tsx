'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Zap, Sparkles, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 03',
  heroHeading: 'Professional Video',
  heroSubheading: 'Production.',
  heroDescription: 'Creating high-quality cinematic videos and advertisements that help your brand tell its story and connect with your audience.',
  heroBg: '/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Power',
  valuePropAccent: 'of Video.|',
  valuePropBody: [
    'In a world of constant scrolling, high-quality video is the best way to be heard. We create videos that grab attention and build instant trust with your viewers.',
    '"We produce professional films and ads that help your business stand out, tell your story, and drive more engagement across all platforms."',
  ],

  bentoHeading: 'Our Video',
  bentoSubheading: 'Services.',
  bentoMainImage: '/video-production/imgi_1_1cb520cacdc4f2243bc2b93ee2f2e272b7485229-1200x1472.png',
  bentoMainTitle: 'Brand Film',
  bentoMainSubtitle: 'Production',
  bentoMainDesc: 'Professional films that define your brand and help you project authority in your market.',
  bentoCard1Title: 'High-Impact Ads',
  bentoCard1Desc: 'Short-form video content designed for social media growth and real business results.',
  bentoCard1Icon: Zap,
  bentoCard1Image: '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg',
  bentoCard2Title: 'Motion Graphics',
  bentoCard2Icon: Sparkles,
  bentoCard2Image: '/video-production/imgi_17_6fbff2d882bd9e9c9a6c2bfddbf70608c7758339-2787x1457.png',

  showcaseHeading: 'Our Films',
  showcaseItems: [
    { title: 'Nexus Campaign', category: 'Brand Film', image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Narrative', category: 'Ad Film', image: '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg' },
    { title: 'Vortex Motion', category: 'Motion', image: '/video-production/imgi_17_6fbff2d882bd9e9c9a6c2bfddbf70608c7758339-2787x1457.png' },
    { title: 'Apex Short Film', category: 'Short Film', image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Pre-Production', description: 'Comprehensive planning, storyboarding, and creative direction for every narrative.', image: '/video-production/imgi_88_4d7ea09d8090f2712df671b9aa0528cff04fd377-768x880.png' },
    { icon: Zap, title: 'Studio Session', description: 'High-end cinematography using professional lighting and cinematic gear.', image: '/video-production/imgi_94_27fd1dbb1002c4a4c250ce5c7b12e8007cb6788c-176x112.png' },
    { icon: Sparkles, title: 'Post-Production', description: 'Expertly crafted editing, color grading, and visual effects to polish your story.', image: '/video-production/imgi_95_ee39160c7f7d77c2a9231edb89ee3720226de881-132x84.png' },
    { icon: Monitor, title: 'Ad Production', description: 'High-conversion video advertisements designed for maximum business impact.', image: '/video-production/imgi_93_14889faec37d0518e063b9be7b252973365178fe-132x84.png' },
    { icon: Camera, title: 'Social Content', description: 'Fast-paced, high-engagement content optimized for TikTok, Reels, and YouTube.', image: '/video-production/imgi_97_c6bcc2d726ce736fecee2796a146aab4574660e6-132x84.png' },
    { icon: Zap, title: 'Narrative Film', description: 'Cinematic brand documentaries and films that build authority and trust.', image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png' },
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
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Engagement', value: '2.4x' },
      { label: 'Brand Recall', value: '92%' },
      { label: 'Video ROI', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Stellar',
      image: '/video-production/imgi_10_33767250764af83fd74059d7a2f07d76455fb869-2400x1176.png',
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

