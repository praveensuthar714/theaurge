'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Palette, PenTool, Layout, Layers, Sparkles, Box } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 03',
  heroHeading: 'Brand',
  heroSubheading: 'Identity.',
  heroDescription: 'A brand is not just seen — it is felt, remembered, and experienced. We build identities that go beyond visuals and create lasting impressions.',
  heroBg: '/branding/imgi_27_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Beyond Visuals',
  valuePropAccent: 'Long-term Connection.|',
  valuePropBody: [
    "From crafting distinctive logos to designing complete brand systems, we ensure every element reflects your vision, values, and purpose. Our approach combines strategy with creativity — ensuring your brand stands out in a crowded market while maintaining clarity and consistency.",
    '"A strong brand identity doesn't just attract attention — it builds trust, recognition, and long-term connection with your audience."',
  ],

  bentoHeading: 'Our Design',
  bentoSubheading: 'Approach.',
  bentoMainImage: '/branding/imgi_1_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Positioning',
  bentoMainDesc: 'Shaping how your brand is perceived in the market through strategic positioning and purposeful design.',
  bentoCard1Title: 'Logo Design',
  bentoCard1Desc: 'Unique, timeless logos that represent your brand identity effectively across all touchpoints.',
  bentoCard1Icon: PenTool,
  bentoCard2Title: 'Guidelines',
  bentoCard2Icon: Sparkles,
  bentoCard2Image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png',

  showcaseHeading: 'Our Portfolio',
  showcaseItems: [
    { title: 'Rotex IT Solutions', category: 'Tech Branding', image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Ashish Food & Beverages', category: 'F&B Packaging', image: '/branding/imgi_87_0acb20f2a9708d15596ec5b6f421c6fa6758729b-1152x1320.png' },
    { title: 'Everloved Stories', category: 'Wedding Brand', image: '/branding/imgi_89_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { title: 'Beyond Travelers', category: 'Tours & Travel', image: '/branding/imgi_15_18990d94cc12d56d2c085ecdfb53274f8750514a-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Palette, title: 'Brand Discovery', description: 'Understanding your business, audience, and vision to build a strong, purposeful foundation.', image: '/branding/imgi_104_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png' },
    { icon: PenTool, title: 'Logo Design', description: 'Crafting unique, timeless logos that represent your brand identity across every touchpoint.', image: '/branding/imgi_34_ac3433e8aca5f4b71308bf543d7f1c3fe7d7c421-1091x1180.png' },
    { icon: Layout, title: 'Visual Identity System', description: 'Defining colours, typography, and design elements that create a consistent brand presence.', image: '/branding/imgi_40_430e7f03ca2bad360d64fe6402111cb3daf585ea-720x1000.png' },
    { icon: Layers, title: 'Stationery Design', description: 'Business cards, letterheads, and brand materials designed professionally for every interaction.', image: '/branding/imgi_29_89d6d74ed1aebdcfdeda25abc653c8baadd38eb0-2739x3902.png' },
    { icon: Box, title: 'Brand Positioning', description: 'Shaping how your brand is perceived and remembered in the marketplace.', image: '/branding/imgi_16_5eb51c831faf8bd7ded910ee22f08f1909fb1c89-2800x1450.png' },
    { icon: Sparkles, title: 'Brand Guidelines', description: 'A comprehensive rulebook to maintain brand consistency across all platforms and media.', image: '/branding/imgi_14_5e9ab7d8c5dc501821b63b40e00a3655d56fdbab-1040x584.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The Identity',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Discovery Phase', description: 'Deep diving into your business values, audience psychology, and market positioning.' },
    { title: 'Concept Design', description: 'Developing original logo concepts and complete visual identity systems.' },
    { title: 'System Building', description: 'Architecting the full brand toolkit, colour system, typography, and guidelines.' },
    { title: 'Final Deployment', description: 'Launching your brand with precision and consistency across all brand channels.' },
  ],

  differentiators: [
    { title: 'Meaningful Design', description: 'Identities that go beyond visuals to create lasting emotional impressions.' },
    { title: 'Strategic Clarity', description: 'Combining strategy with creativity for clear market distinction and recall.' },
    { title: 'Timeless Quality', description: 'Focusing on building trust and long-term audience recognition over trends.' },
  ],

  results: {
    company: 'Rotex IT Solutions',
    quote: "End-to-end branding including logo design, stationery, and complete visual identity — reflecting trust, innovation, and clarity across all brand touchpoints.",
    author: 'Tech Lead',
    role: 'Rotex IT Solutions',
    avatar: '/video-production/imgi_100_226be715409b0d808df20bfb96176d7b0bd0d97e-768x768.jpg',
    metrics: [
      { label: 'Trust Index', value: '4.9/5' },
      { label: 'Brand Recall', value: '72%' },
      { label: 'Market Scope', value: 'GLOBAL' },
    ],
    caseStudy: {
      title: 'Success: Institutional Identity for Rotex IT Solutions',
      image: '/branding/imgi_84_643d1b3c67e393f909a870625276cee749d16674-2376x1320.png',
    }
  },

  ctaHeading: 'Ready to architect',
  ctaSubheading: 'your brand identity?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Brand Identity',
  faqs: [
    { question: 'What is included in brand identity?', answer: 'Logo design, visual identity system, colour palette, typography, stationery, positioning, and brand guidelines.' },
    { question: 'Do you provide brand guidelines?', answer: 'Yes — a comprehensive rulebook covering logo usage, colours, and typography for every platform.' },
    { question: 'What brands have you worked with?', answer: 'Rotex IT Solutions, Ashish Food & Beverages, Beyond Travelers, Everloved Stories, Captain GBP, and Nexus Civil.' },
  ],
};

export default function BrandIdentityPage() {
  return <ServicePageTemplate data={data} />;
}
