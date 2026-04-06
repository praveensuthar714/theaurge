'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Film, Aperture, PenTool, Camera, Monitor, Zap, Sparkles } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 01',
  heroHeading: 'Film',
  heroSubheading: 'Production.',
  heroDescription: 'We believe every story deserves to be felt, not just seen. We are storytellers driven by emotion, detail, and a cinematic vision that transforms simple ideas into powerful experiences.',
  heroBg: '/services_v2/video_production.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Imprint',
  valuePropAccent: 'of Storytelling.|',
  valuePropBody: [
    "From the first spark of imagination to the final frame on screen, we approach every project with honesty, depth, and a commitment to creating something that truly connects with people. We don't chase visuals alone — we build meaning behind every frame, every silence, and every moment.",
    '"For us, filmmaking is about leaving an imprint — something the audience carries even after the screen fades to black."',
  ],

  bentoHeading: 'Cinematic',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/video-production/imgi_1_1cb520cacdc4f2243bc2b93ee2f2e272b7485229-1200x1472.png',
  bentoMainTitle: 'Narrative',
  bentoMainSubtitle: 'Excellence',
  bentoMainDesc: 'Shaping ideas into strong, clear visions through original and emotionally driven concept development.',
  bentoCard1Title: 'Scriptwriting',
  bentoCard1Desc: 'Turning ideas into compelling narratives with structured storytelling and impactful dialogues.',
  bentoCard1Icon: PenTool,
  bentoCard2Title: 'Visual Language',
  bentoCard2Icon: Sparkles,

  showcaseHeading: 'Our Films',
  showcaseItems: [
    { title: 'Pages of Deception', category: 'Short Film | Marathi', image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'KPT Industries', category: 'Industrial Documentary', image: '/video-production/imgi_88_4d7ea09d8090f2712df671b9aa0528cff04fd377-768x880.png' },
    { title: 'Royal Enfield', category: 'Television Commercial', image: '/video-production/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { title: 'Yamaha', category: 'TV Commercial', image: '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Aperture, title: 'Concept Development', description: 'We shape your idea into a strong, clear vision — original, engaging, and emotionally driven.', image: '/video-production/imgi_1_1cb520cacdc4f2243bc2b93ee2f2e272b7485229-1200x1472.png' },
    { icon: PenTool, title: 'Scriptwriting', description: 'We turn ideas into compelling narratives with structured storytelling and impactful dialogues that keep audiences invested.', image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png' },
    { icon: Camera, title: 'Cinematography', description: 'We capture visuals with intention — using light, framing, and movement to elevate emotions and make every frame visually striking.', image: '/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png' },
    { icon: Monitor, title: 'Editing', description: 'We shape the story in post-production, controlling pace, rhythm, and narrative flow to create a seamless and engaging experience.', image: '/video-production/imgi_95_ee39160c7f7d77c2a9231edb89ee3720226de881-132x84.png' },
    { icon: Zap, title: 'Color Grading', description: 'We enhance the visual tone and mood, giving the film its final cinematic look and emotional texture.', image: '/video-production/imgi_17_6fbff2d882bd9e9c9a6c2bfddbf70608c7758339-2787x1457.png' },
    { icon: Film, title: 'Sound Design', description: 'We build the sonic world of the film — from subtle ambient layers to impactful sound elements that enhance emotion and realism.', image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'How We',
  processSubheading: 'Produce.',
  processSteps: [
    { title: 'Story & Storyboard', description: 'We design the visual language — references, tones, colors, and frames for clear cinematic direction.' },
    { title: 'Casting & Scouting', description: 'Finding the right faces and locations that enhance the story visually and practically.' },
    { title: 'Production', description: 'We guide the entire creative process on set — from sets and props to direction and cinematography.' },
    { title: 'Post-Production', description: 'Editing, sound design, and color grading to create the final polished cinematic product.' },
  ],

  differentiators: [
    { title: 'Emotional Depth', description: 'We build meaning behind every frame, every silence, and every moment — not just visuals.' },
    { title: 'End-to-End Ownership', description: 'Complete creative responsibility from concept development to final color graded delivery.' },
    { title: 'Cinematic Precision', description: 'Every detail — from production design to sound — is crafted to match the world of the story.' },
  ],

  results: {
    company: 'Pages Of Deception',
    quote: "A tightly woven Marathi narrative — end-to-end film execution with cinematic storytelling, strong performances, and atmospheric visuals that left a lasting emotional impact.",
    author: 'Prathamesh Savekar',
    role: 'Writer & Director',
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Runtime', value: '26 MIN' },
      { label: 'Language', value: 'MARATHI' },
      { label: 'Execution', value: 'END-TO-END' },
    ],
    caseStudy: {
      title: 'Success: Pages of Deception — A Short Film Narrative',
      image: '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png',
    }
  },

  ctaHeading: 'Ready to architect',
  ctaSubheading: 'your cinematic vision?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Film Production',
  faqs: [
    { question: 'What is your filmmaking philosophy?', answer: 'Filmmaking is about leaving an imprint — something the audience carries even after the screen fades to black.' },
    { question: 'What does end-to-end execution include?', answer: 'Everything from concept development, scriptwriting, casting, production design, to color grading and sound design.' },
    { question: 'Do you work on short films and industrials?', answer: 'Yes — we produced Pages of Deception, a 26-min Marathi short film, and industrial films like KPT Industries.' },
  ],
};

export default function FilmProductionPage() {
  return <ServicePageTemplate data={data} />;
}
