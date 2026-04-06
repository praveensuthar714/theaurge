#!/usr/bin/env python3
"""Script to update theAurge service pages with content from the PDF."""

import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def write(path, content):
    full_path = os.path.join(BASE, path)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated: {path}")

# ─── Film Production ────────────────────────────────────────────────────────────
write('app/services/film-production/page.tsx', """'use client';

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
""")

# ─── Video Production ───────────────────────────────────────────────────────────
write('app/services/video-production/page.tsx', """'use client';

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
    '"We don\'t just create videos — we create experiences that connect, inspire, and stay with the audience long after the screen fades to black. Every frame carries intention. Every cut has meaning."',
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
""")

# ─── Social Media Marketing ──────────────────────────────────────────────────────
write('app/services/social-media-marketing/page.tsx', """'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, TrendingUp, BarChart, Rocket, Shield, Zap, Sparkles } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 04',
  heroHeading: 'Social Media',
  heroSubheading: 'Marketing.',
  heroDescription: 'In a fast-moving digital world, attention is the most valuable currency. We help brands cut through the noise with strategies that are not just creative, but result-driven.',
  heroBg: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Digital Attention',
  valuePropAccent: 'Result-Driven Strategies.|',
  valuePropBody: [
    "Our focus is not just on reaching people, but on connecting with the right audience at the right time with the right message. We blend creativity, data, and strategy to create campaigns that perform, convert, and build lasting brand relationships.",
    '"From building a strong presence to leveraging influencer collaborations and scaling e-commerce growth, we craft digital ecosystems that drive visibility and engagement."',
  ],

  bentoHeading: 'Our Social',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
  bentoMainTitle: 'Full-Scale',
  bentoMainSubtitle: 'Management',
  bentoMainDesc: 'End-to-end social media handling from content planning to execution for major brands.',
  bentoCard1Title: 'Influencer Marketing',
  bentoCard1Desc: 'Collaborating with the right creators to boost authenticity, reach, and trust.',
  bentoCard1Icon: Sparkles,
  bentoCard2Title: 'E-commerce Growth',
  bentoCard2Icon: Rocket,
  bentoCard2Image: '/performance-marketing/imgi_19_06370dec062b519a87c00bcbe16dca558848aa78-2800x1450.jpg',

  showcaseHeading: 'Our Clients',
  showcaseItems: [
    { title: 'Royal Enfield', category: 'Automotive Social', image: '/video-production/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Heera Panna', category: 'Retail Management', image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png' },
    { title: 'Suprito Fashion', category: 'Fashion | Brand Consistency', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { title: 'Marvelous Hair Studio', category: 'Trend-Led Content', image: '/performance-marketing/imgi_16_be7e27123651deb726f382cd70f6ce86162a21da-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Target, title: 'Social Strategy', description: 'Planning content and campaigns that align with your brand voice for consistent growth.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Sparkles, title: 'Content Creation', description: 'Engaging posts, reels, and creatives that capture attention and drive audience recall.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: TrendingUp, title: 'Influencer Marketing', description: 'We collaborate with the right influencers to boost reach and build authentic trust.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'E-commerce Marketing', description: 'Optimizing campaigns to increase direct product sales and digital conversions.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: BarChart, title: 'Ad Campaign Mgmt', description: 'Running targeted ads across platforms for better reach, engagement, and ROI.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { icon: Shield, title: 'Analytics & Optimization', description: 'Continuous tracking and improvement of performance metrics for sustainable growth.', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Social',
  processSubheading: 'Pipeline.',
  processSteps: [
    { title: 'Audience Insight', description: 'Analyzing your audience behavior to craft a custom digital strategy and content plan.' },
    { title: 'Content Blueprint', description: 'Planning high-impact reels, posts, and creatives aligned with your brand tone.' },
    { title: 'Campaign Execution', description: 'Executing influencer collaborations and paid ad campaigns for maximum reach.' },
    { title: 'Data Optimization', description: 'Tracking performance and refining content to continuously maximize ROI.' },
  ],

  differentiators: [
    { title: 'Attention Currency', description: 'Strategy focused on cutting through digital noise and connecting with the right audience.' },
    { title: 'Ecosystem Build', description: 'Crafting digital environments that drive long-term visibility and engagement.' },
    { title: 'Performance Led', description: 'Result-driven campaigns that actually convert — not just reach.' },
  ],

  results: {
    company: 'Heera Panna',
    quote: "A blend of premium aesthetics and strategic storytelling that enhanced our social visibility, trust, and audience engagement significantly.",
    author: 'Retail Lead',
    role: 'Heera Panna Executive',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Visibility Lift', value: '3.5x' },
      { label: 'Trust Index', value: '92%' },
      { label: 'User Recall', value: '88%' },
    ],
    caseStudy: {
      title: 'Success: Scaling Heera Panna Socially',
      image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
    }
  },

  ctaHeading: 'Ready to cut',
  ctaSubheading: 'through the noise?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Social Media',
  faqs: [
    { question: 'What platforms do you manage?', answer: 'We handle end-to-end strategies across Instagram, Facebook, LinkedIn, Reels, and TikTok.' },
    { question: 'Do you work with influencers?', answer: 'Yes — we collaborate with high-impact influencers to boost brand trust and reach.' },
    { question: 'What brands have you managed?', answer: 'We manage Royal Enfield, Yamaha, Brixton, Heera Panna, Suprito, Marvelous Hair Studio, and Nourishing Farm.' },
  ],
};

export default function SocialMediaMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
""")

# ─── Photography ─────────────────────────────────────────────────────────────────
write('app/services/photography/page.tsx', """'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Image, Layers, Sparkles, Zap, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 05',
  heroHeading: 'Premium',
  heroSubheading: 'Photography.',
  heroDescription: 'Photography is more than just capturing an image — it is about capturing a feeling, a moment, and a story within a single frame.',
  heroBg: '/video-production/imgi_40_ac7bdf55928d15f333796ec5b6f049cd330536dd-3324x2208.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Soul',
  valuePropAccent: 'of Visual Narrative.|',
  valuePropBody: [
    "We create visuals that are not only aesthetically powerful but also purposeful and brand-driven. Whether it's showcasing a product, documenting an event, or highlighting architectural brilliance, we focus on every detail that brings the subject to life.",
    '"With a deep understanding of lighting, composition, and storytelling, we ensure that every image communicates something meaningful — because the right photograph doesn\'t just look good, it speaks and connects."',
  ],

  bentoHeading: 'Our Visual',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/video-production/imgi_4_8849646b5a328f2de4e375ef109594bebc4858b9-1200x1472.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Portraits',
  bentoMainDesc: 'Capturing faces, spaces, and products with a premium cinematic texture and purposeful composition.',
  bentoCard1Title: 'Product Media',
  bentoCard1Desc: 'Clean, high-quality visuals that highlight product features and drive customer trust.',
  bentoCard1Icon: Image,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Monitor,
  bentoCard2Image: '/video-production/imgi_26_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg',

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Chipde Saraf', category: 'Jewellery Photography', image: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Shidori', category: 'Food Photography', image: '/video-production/imgi_82_95ce326d59a9bcefe3d54972376402e1c0f6d792-768x880.png' },
    { title: 'Interior Shoot', category: 'Architectural', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png' },
    { title: 'Nourishing Farms', category: 'Nutrition & Lifestyle', image: '/video-production/imgi_85_9babda97975af7d29219e4183c688efe0d0463f4-720x728.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Camera, title: 'Product Photography', description: 'Clean, high-quality visuals that highlight product features and elevate brand value on every platform.', image: '/video-production/imgi_26_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg' },
    { icon: Image, title: 'Event Photography', description: 'Capturing moments with emotion and authentic storytelling that preserves the energy of the occasion.', image: '/video-production/imgi_30_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { icon: Layers, title: 'Architectural Photography', description: 'Showcasing spaces and structures with focus on spatial composition, perspective, and natural light.', image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Sparkles, title: 'Post-Editing', description: 'Refining every image for color balance, skin textures, and cinematicfinished tone.', image: '/video-production/imgi_21_73ca3279a0631316a07443f727af6f7cb0fb106d-132x84.png' },
    { icon: Zap, title: 'Jewellery Shoots', description: 'Fine detailing, textures, and premium finishes crafted to highlight craftsmanship and elegance.', image: '/video-production/imgi_10_720ce9fb43ee5ce93fbed66e56bfe075aee95760-1000x1000.png' },
    { icon: Monitor, title: 'Lighting Setup', description: 'Professional lighting designed to enhance visual quality and create the mood of each photograph.', image: '/video-production/imgi_25_8174c6cb21efd19c01df7cddbdcadf03bfbc2477-720x720.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Capture',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Pre-Viz Sync', description: 'Defining the visual mood, wardrobe, lighting setup, and reference direction before the shoot.' },
    { title: 'Capture Phase', description: 'Executing the session with professional grade gear, lighting, and artistic direction on set.' },
    { title: 'Selection Lab', description: 'Curating only the most impactful frames from the session for post-production refining.' },
    { title: 'Post-Editing', description: 'Polishing every detail for a high-end, cinematic, and intentional final look.' },
  ],

  differentiators: [
    { title: 'Cinematic Texture', description: 'Capturing every image with high-end equipment and purposeful professional lighting.' },
    { title: 'Artistic Intent', description: "We don't just take photos — we design them with clarity, depth, and brand purpose." },
    { title: 'Technical Quality', description: 'Premium post-editing for finalized high-fidelity brand imagery and visual recall.' },
  ],

  results: {
    company: 'Chipde Saraf',
    quote: "A dedicated jewellery shoot focused on fine detailing, textures, and premium finishes — crafted to highlight craftsmanship, elegance, and product value.",
    author: 'Brand Lead',
    role: 'Creative Division — In Associate with Devs Media',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Recall Lift', value: '4.8x' },
      { label: 'Detail Scope', value: '98%' },
      { label: 'Brand Trust', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: Capturing Chipde Saraf — Premium Jewellery Visuals',
      image: '/video-production/imgi_2_8babda97975af7d29219e4183c688efe0d0463f4-720x728.png',
    }
  },

  ctaHeading: 'Ready to capture',
  ctaSubheading: 'your brand\'s visual story?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Photography',
  faqs: [
    { question: 'What types of photography do you specialize in?', answer: 'Product, event, architectural, jewellery, food, and lifestyle photography — all with professional post-editing.' },
    { question: 'Do you handle post-editing?', answer: 'Yes — we refine every image for color balance, textures, and final cinematic tone.' },
    { question: 'Do you work with food brands?', answer: 'Yes — we handled Shidori food photography and Nourishing Farms lifestyle shoots.' },
  ],
};

export default function PhotographyPage() {
  return <ServicePageTemplate data={data} />;
}
""")

print("\\nAll service pages updated successfully!")
