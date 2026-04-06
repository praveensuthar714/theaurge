'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Globe, Search, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 08',
  heroHeading: 'Search Engine',
  heroSubheading: 'Optimisation.',
  heroDescription: 'Being visible is important — but being discoverable at the right moment is what truly matters. We help brands build a strong organic presence.',
  heroBg: '/performance-marketing/imgi_87_eed97c6479a951f6169af5645730a69694bc058a-768x880.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Organic Dominance',
  valuePropAccent: 'Strategic Visibility.|',
  valuePropBody: [
    "Our approach goes beyond traditional SEO — focusing on intent, relevance, and long-term visibility. From technical optimisation to content strategy and advanced practices like AEO and GEO, we ensure your brand stays ahead in search rankings.",
    '"When your audience is looking for answers, your brand should be the one they find first — we make that happen with precision and sustainable strategy."',
  ],

  bentoHeading: 'Our Search',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_1_8233166219079021cffd1f915256d7957270b153-1200x1472.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'SEO Audit',
  bentoMainDesc: 'Deep technical analysis identifying every roadblock preventing your brand from ranking high in search.',
  bentoCard1Title: 'Keyword Strategy',
  bentoCard1Desc: 'Finding high-impact keywords matched to your audience intent and search behaviour.',
  bentoCard1Icon: Search,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,
  bentoCard2Image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png',

  showcaseHeading: 'Our Results',
  showcaseItems: [
    { title: 'Nexus Organic', category: 'Growth Strategy', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Technical', category: 'Code Optimisation', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { title: 'Vortex Authority', category: 'Link Building', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Global Discovery', category: 'High-Intent SEO', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Search, title: 'Keyword Research', description: 'Finding high-impact keywords aligned with user intent and search volume.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Globe, title: 'On-Page SEO', description: 'Optimising website structure, meta tags, headings, and content for better ranking.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: BarChart, title: 'Local SEO', description: 'Improving visibility in local searches to capture high-intent nearby audiences.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'Technical SEO', description: 'Fixing backend issues — speed, crawlability, and structured data — for better ranking.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Content Authority', description: 'Writing high-value content that ranks for keywords and builds topical authority.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Zap, title: 'AEO & GEO', description: 'Optimising for Answer Engines and geographic targeting — the next frontier of SEO.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The SEO',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Technical Audit', description: 'Identifying every code-level issue holding back your brand in search rankings.' },
    { title: 'Keyword Map', description: 'Planning the keyword strategy and content authority blueprint for your niche.' },
    { title: 'Execution Stage', description: 'Building links, optimising pages, and publishing content for high-fidelity ranking.' },
    { title: 'Monitoring Lab', description: 'Continuous data tracking to refine rankings and scale your organic discovery.' },
  ],

  differentiators: [
    { title: 'Technical Dominance', description: 'We focus on code and structural perfection to earn search engine trust.' },
    { title: 'Intent-First Strategy', description: 'Focusing on what users are actually searching for — not just volume metrics.' },
    { title: 'Long-Term Visibility', description: 'Building sustainable organic presence that grows stronger over time.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "They took us from page 10 to page 1 for our most valuable keywords. The impact on enquiries was immediate and significant.",
    author: 'Growth Lead',
    role: 'Financial Services',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Organic Lift', value: '410%' },
      { label: 'Keywords Ranked', value: '150+' },
      { label: 'Conversion', value: '3.2x' },
    ],
    caseStudy: {
      title: 'Success: Ranking Nexus to Market Dominance',
      image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
    }
  },

  ctaHeading: 'Ready to dominate',
  ctaSubheading: 'your search market?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'SEO Services',
  faqs: [
    { question: 'What is AEO & GEO?', answer: 'AEO is Answer Engine Optimisation (for AI search results), GEO is optimising for geographic targeting in search.' },
    { question: 'How long to see organic results?', answer: 'SEO is a long-term growth engine — measurable results typically appear in 3–6 months of deployment.' },
    { question: 'What does your SEO audit cover?', answer: 'Technical site health, keyword gaps, on-page structure, content quality, backlinks, and speed optimisation.' },
  ],
};

export default function SEOPage() {
  return <ServicePageTemplate data={data} />;
}
