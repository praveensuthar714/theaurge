'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import {
  Film,
  Aperture,
  PenTool,
  Camera,
  Monitor,
  Zap,
  Sparkles,
  Layers,
  Users,
  MapPin,
  Mic2,
  Palette,
  Clapperboard,
} from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 01',
  heroHeading: 'Film',
  heroSubheading: 'Production.',
  heroDescription:
    'We believe every story deserves to be felt, not just seen. At our core, we are storytellers driven by emotion, detail, and a cinematic vision that transforms simple ideas into powerful experiences.',
  heroBg: '/services_v2/video_production.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Imprint',
  valuePropAccent: 'of Storytelling.|',
  valuePropBody: [
    "From the first spark of imagination to the final frame on screen, we approach every project with honesty, depth, and a commitment to creating something that truly connects with people.",
    "We don't chase visuals alone, we build meaning behind every frame, every silence, and every moment. Because for us, filmmaking is about leaving an imprint something the audience carries even after the screen fades to black.",
  ],

  bentoHeading: 'Cinematic',
  bentoSubheading: 'Expertise.',
  bentoMainImage:
    '/video-production/imgi_1_1cb520cacdc4f2243bc2b93ee2f2e272b7485229-1200x1472.png',
  bentoMainTitle: 'Narrative',
  bentoMainSubtitle: 'Excellence',
  bentoMainDesc:
    'Shaping ideas into strong, clear visions through original and emotionally driven concept development.',
  bentoCard1Title: 'Scriptwriting',
  bentoCard1Desc:
    'We turn ideas into compelling narratives with structured storytelling, impactful dialogues, and a flow that keeps the audience invested till the end.',
  bentoCard1Icon: PenTool,
  bentoCard2Title: 'Visual Language',
  bentoCard2Icon: Sparkles,

  showcaseHeading: 'Our Films',
  showcaseItems: [
    {
      title: 'Pages of Deception',
      category: 'Short Film | Marathi',
      image:
        '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png',
      span: 'lg:col-span-2 lg:row-span-2',
    },
    {
      title: 'KPT Industries',
      category: 'Industrial Documentary',
      image:
        '/video-production/imgi_88_4d7ea09d8090f2712df671b9aa0528cff04fd377-768x880.png',
    },
    {
      title: 'Royal Enfield',
      category: 'Television Commercial',
      image:
        '/video-production/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png',
    },
    {
      title: 'Yamaha',
      category: 'TV Commercial',
      image:
        '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg',
      span: 'lg:col-span-2',
    },
  ],

  // ── 12 Full Capabilities from the PDF ───────────────────────────────────────
  modules: [
    {
      icon: Aperture,
      title: 'Concept Development',
      description:
        'We shape your idea into a strong, clear vision. Whether it\'s a rough thought or a blank slate, we build concepts that are original, engaging, and emotionally driven.',
      image:
        '/video-production/imgi_1_1cb520cacdc4f2243bc2b93ee2f2e272b7485229-1200x1472.png',
    },
    {
      icon: PenTool,
      title: 'Scriptwriting',
      description:
        'We turn ideas into compelling narratives with structured storytelling, impactful dialogues, and a flow that keeps the audience invested till the end.',
      image:
        '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png',
    },
    {
      icon: Layers,
      title: 'Story Boarding',
      description:
        'Before the shoot begins, we design the visual language — references, tones, colors, and frames — so the entire project has a clear and consistent cinematic direction.',
      image:
        '/video-production/imgi_2_e800e1c7193e1240c0ff286d0e202e1d05f812e9-3489x1310.png',
    },
    {
      icon: Users,
      title: 'Casting',
      description:
        'We find the right faces and performances that truly fit the story, ensuring authenticity and emotional depth in every character.',
      image:
        '/video-production/imgi_88_4d7ea09d8090f2712df671b9aa0528cff04fd377-768x880.png',
    },
    {
      icon: MapPin,
      title: 'Location Scouting',
      description:
        'We search and finalize locations that enhance the story visually and practically, adding realism and cinematic value to each scene.',
      image:
        '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png',
    },
    {
      icon: Sparkles,
      title: 'Production Design',
      description:
        'From sets to props, every detail is crafted to match the world of the story, creating an immersive and believable environment.',
      image:
        '/video-production/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png',
    },
    {
      icon: Clapperboard,
      title: 'Direction',
      description:
        'We guide the entire creative process on set, aligning performances, visuals, and storytelling to bring the vision to life exactly as intended.',
      image:
        '/video-production/imgi_16_39f583a882f8a533bf2247a41deec0179788356e-2800x1450.jpg',
    },
    {
      icon: Camera,
      title: 'Cinematography',
      description:
        'We capture visuals with intention — using light, framing, and movement to elevate emotions and make every frame visually striking.',
      image:
        '/video-production/imgi_17_6fbff2d882bd9e9c9a6c2bfddbf70608c7758339-2787x1457.png',
    },
    {
      icon: Mic2,
      title: 'Sound Design',
      description:
        'We build the sonic world of the film — from subtle ambient layers to impactful sound elements that enhance emotion and realism.',
      image:
        '/video-production/imgi_95_ee39160c7f7d77c2a9231edb89ee3720226de881-132x84.png',
    },
    {
      icon: Monitor,
      title: 'Editing',
      description:
        'We shape the story in post-production, controlling pace, rhythm, and narrative flow to create a seamless and engaging experience.',
      image:
        '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    },
    {
      icon: Palette,
      title: 'Color Grading',
      description:
        'We enhance the visual tone and mood, giving the film its final cinematic look and emotional texture.',
      image:
        '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png',
    },
  ],

  // ── Refined 4-Phase Production Pipeline ────────────────────────────────────
  processLabel: 'Our Process',
  processHeading: 'How We',
  processSubheading: 'Produce.',
  processSteps: [
    {
      title: 'Development & Pre-Visualization',
      description:
        'We begin with concept development and scriptwriting, followed by storyboarding that locks in the visual language — tones, colors, and frames — before a single camera rolls.',
    },
    {
      title: 'Casting & Location Scouting',
      description:
        'We find the right faces and performances, then scout and finalize locations that enhance the story visually and practically, adding realism to each scene.',
    },
    {
      title: 'Production',
      description:
        'With production design, direction, and cinematography working in sync, we guide the entire creative process on set to bring the vision to life exactly as intended.',
    },
    {
      title: 'Post-Production & Delivery',
      description:
        'Editing shapes the narrative. Sound design builds the sonic world. Color grading gives the film its final cinematic look. Every post element is crafted for emotional texture and precision.',
    },
  ],

  differentiators: [
    {
      title: 'Emotional Depth',
      description:
        "We build meaning behind every frame, every silence, and every moment — not just visuals. Filmmaking is about leaving an imprint.",
    },
    {
      title: 'End-to-End Ownership',
      description:
        'Complete creative responsibility from concept development and scriptwriting to color grading and sound design delivery.',
    },
    {
      title: 'Cinematic Precision',
      description:
        'Every detail — from production design to casting — is crafted to match the world of the story, creating an immersive and believable environment.',
    },
  ],

  results: {
    company: 'Pages Of Deception',
    quote:
      'A tightly woven Marathi narrative — end-to-end film execution with cinematic storytelling, strong performances, and atmospheric visuals that left a lasting emotional impact.',
    author: 'Prathamesh Savekar',
    role: 'Writer & Director',
    avatar:
      '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Runtime', value: '26 MIN' },
      { label: 'Language', value: 'MARATHI' },
      { label: 'Execution', value: 'END-TO-END' },
    ],
    caseStudy: {
      title: 'Success: Pages of Deception — A Short Film Narrative',
      image:
        '/video-production/imgi_101_19f70a604ac0ca6b8531e9a7c2fa32f3b23b0358-4230x2418.png',
    },
  },

  ctaHeading: 'Ready to architect',
  ctaSubheading: 'your cinematic vision?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Film Production',
  faqs: [
    {
      question: 'What is your filmmaking philosophy?',
      answer:
        'We believe every story deserves to be felt, not just seen. Filmmaking is about leaving an imprint — something the audience carries even after the screen fades to black. We build meaning behind every frame, every silence, and every moment.',
    },
    {
      question: 'What does end-to-end film production include?',
      answer:
        'Everything — from concept development, scriptwriting, storyboarding, casting, and location scouting, to production design, direction, cinematography, sound design, editing, and color grading.',
    },
    {
      question: 'Do you work on short films, commercials, and documentaries?',
      answer:
        'Yes. We have produced Pages of Deception (26-min Marathi short film), industrial documentaries like KPT Industries, and TV commercials for brands like Royal Enfield and Yamaha.',
    },
    {
      question: 'How do you approach concept development?',
      answer:
        'Whether it\'s a rough thought or a blank slate, we shape your idea into a strong, clear vision — building concepts that are original, engaging, and emotionally driven.',
    },
    {
      question: 'What is your storyboarding process?',
      answer:
        'Before the shoot begins, we design the entire visual language — references, tones, colors, and frames — so the project has a clear and consistent cinematic direction from day one.',
    },
  ],
};

export default function FilmProductionPage() {
  return <ServicePageTemplate data={data} />;
}
