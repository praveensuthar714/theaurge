'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Zap, Sparkles, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 02',
  heroHeading: 'Video',
  heroSubheading: 'Production.',
  heroDescription: 'We believe every story holds the power to move people — it just needs to be told the right way. We are visual storytellers driven by emotion, detail, and cinematic excellence.',
  heroBg: '/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Power',
  valuePropAccent: 'to Move People.|',
  valuePropBody: [
    "Whether it's an ad film crafted to influence decisions, a documentary that captures truth and depth, or a corporate video that defines your brand voice — we approach every project with purpose and precision.",
    '"We don't just create videos — we create experiences that connect, inspire, and stay with the audience long after the screen fades to black. Every frame carries intention. Every cut has meaning."',
  ],

  bentoHeading: 'Our Video',
  bentoSubheading: 'Services.',
  bentoMainImage: '/video-production/imgi_1_1cb520cacdc4f2243bc2b93ee2f2e272b7485229-1200x1472.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Ads & TVCs',
  bentoMainDesc: 'High-energy visuals and performance-driven storytelling designed for TV commercials and social media.',
  bentoCard1Title: 'Documentaries',
  bentoCard1Desc: 'Capturing truth and depth through grounded storytelling and trust-building visuals.',
  bentoCard1Icon: Camera,
  bentoCard1Image: '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg',
  bentoCard2Title: 'Corporate Film',
  bentoCard2Icon: Sparkles,
  bentoCard2Image: '/video-production/imgi_17_6fbff2d882bd9e9c9a6c2bfddbf70608c7758339-2787x1457.png',

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Royal Enfield', category: 'TV Commercial', image: '/video-production/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Yamaha', category: 'TVC — End-to-End', image: '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg' },
    { title: 'Brixton', category: 'Brand Film', image: '/video-production/imgi_17_6fbff2d882bd9e9c9a6c2bfddbf70608c7758339-2787x1457.png' },
    { title: 'Suvarndeep', category: 'Premium Product Film', image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Ad Films & TVCs', description: 'High-energy, sharp-edited TV commercials that capture brand spirit and drive viewer emotion.', image: '/video-production/imgi_88_4d7ea09d8090f2712df671b9aa0528cff04fd377-768x880.png' },
    { icon: Zap, title: 'Brand Films', description: 'Attitude-driven visual storytelling that matches a brand personality with bold cinematic execution.', image: '/video-production/imgi_94_27fd1dbb1002c4a4c250ce5c7b12e8007cb6788c-176x112.png' },
    { icon: Sparkles, title: 'Documentaries', description: 'Warm visuals and grounded storytelling that build trust and emotional connection with the audience.', image: '/video-production/imgi_95_ee39160c7f7d77c2a9231edb89ee3720226de881-132x84.png' },
    { icon: Monitor, title: 'Corporate Videos', description: 'Professional films defining your brand voice with clarity, purpose, and visual precision.', image: '/video-production/imgi_93_14889faec37d0518e063b9be7b252973365178fe-132x84.png' },
    { icon: Camera, title: 'Product Films', description: 'Premium presentation, product detailing, and strong visual storytelling to elevate brand presence.', image: '/video-production/imgi_97_c6bcc2d726ce736fecee2796a146aab4574660e6-132x84.png' },
    { icon: Zap, title: 'Industrial Films', description: 'Presenting industrial processes with clarity, authenticity, and a cinematic visual language that communicates scale.', image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Video',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Concept & Script', description: 'Shaping your idea into an original and emotionally driven cinematic vision.' },
    { title: 'Storyboard Design', description: 'Designing the visual language — references, tones, and frames — before we shoot.' },
    { title: 'Production Stage', description: 'Handling sets, props, casting, and on-set direction with cinematic precision.' },
    { title: 'Post-Production', description: 'Editing, color grading, and sound design to deliver the final immersive product.' },
  ],

  differentiators: [
    { title: 'Emotional Impact', description: 'Every frame carries intention; every cut has meaning — we build stories that stay.' },
    { title: 'Strategic Purpose', description: 'We create experiences that connect and inspire, not just videos that play.' },
    { title: 'Versatile Scope', description: 'TVCs, brand films, documentaries, product films — we excel across all formats.' },
  ],

  results: {
    company: 'Yamaha',
    quote: "An end-to-end TVC executed entirely by our team — high-energy visuals, sharp edits, and performance-driven storytelling that captured Yamaha's spirit of speed and innovation.",
    author: 'Marketing Division',
    role: 'Yamaha Automobiles',
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Scope', value: 'END-TO-END' },
      { label: 'Format', value: 'TVC' },
      { label: 'Market ROI', value: '180%' },
    ],
    caseStudy: {
      title: 'Success: Capturing the Spirit of Yamaha',
      image: '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg',
    }
  },

  ctaHeading: 'Ready to build',
  ctaSubheading: 'your next visual experience?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Video Production',
  faqs: [
    { question: 'What video formats do you produce?', answer: 'We specialize in TVC ad films, brand films, documentaries, corporate videos, and premium product films.' },
    { question: 'Do you handle scripting and concept?', answer: 'Yes — we turn your idea into a compelling narrative with structured storytelling from concept to final cut.' },
    { question: 'Do you work with automotive brands?', answer: 'Yes — we have worked with Royal Enfield, Yamaha, and Brixton on brand films and TVCs.' },
  ],
};

export default function VideoProductionPage() {
  return <ServicePageTemplate data={data} />;
}
