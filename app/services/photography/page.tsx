'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Camera, Image, Layers, Sparkles, Zap, Monitor } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 05',
  heroHeading: 'Premium',
  heroSubheading: 'Photography.',
  heroDescription: "Photography is more than just capturing an image — it's about capturing a feeling, a moment, and a story within a single frame. We create visuals that are not only aesthetically powerful but also purposeful and brand-driven.",
  heroBg: '/video-production/imgi_40_ac7bdf55928d15f333796ec5b6f049cd330536dd-3324x2208.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Soul',
  valuePropAccent: 'of Visual Narrative.|',
  valuePropBody: [
    "Whether it's showcasing a product, documenting an event, or highlighting architectural brilliance, we focus on every detail that brings the subject to life.",
    "With a deep understanding of lighting, composition, and storytelling, we ensure that every image communicates something meaningful. Because the right photograph doesn't just look good — it speaks, connects, and leaves a lasting impression.",
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
    { icon: Camera, title: 'Product Photography', description: 'Clean, high-quality visuals that highlight product features.', image: '/video-production/imgi_26_7ca29b913ed150d2a1287cb616600d5802078d10-1920x1468.jpg' },
    { icon: Image, title: 'Event Photography', description: 'Capturing moments with emotion and storytelling.', image: '/video-production/imgi_30_e6990dc1feabda8b14b5f855f6e0c65783366fd0-1080x1080.png' },
    { icon: Layers, title: 'Architectural Photography', description: 'Showcasing spaces with precision and creativity.', image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Monitor, title: 'Lighting Setup', description: 'Professional lighting to enhance visual quality.', image: '/video-production/imgi_25_8174c6cb21efd19c01df7cddbdcadf03bfbc2477-720x720.png' },
    { icon: Sparkles, title: 'Post Editing', description: 'Refining images to achieve a polished final look.', image: '/video-production/imgi_21_73ca3279a0631316a07443f727af6f7cb0fb106d-132x84.png' },
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
  ctaSubheading: "your brand's visual story?",
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
