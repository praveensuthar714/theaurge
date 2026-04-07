'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, Users, Zap, Globe, MapPin, Radio, Megaphone } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 12',
  heroHeading: 'Offline',
  heroSubheading: 'Marketing.',
  heroDescription: 'In a digitally dominated world, offline marketing still holds unmatched power in creating real-world presence and recall. We craft campaigns that connect with audiences beyond screens, using traditional media channels in impactful and strategic ways.',
  heroBg: '/bgimagectaservice.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Real-World Reach',
  valuePropAccent: 'Tangible Connection.|',
  valuePropBody: [
    "From high-visibility billboards to engaging on-ground activations, we ensure your brand reaches people where it matters most.",
    '"Because sometimes, the strongest impressions are made in the real world. We architect offline strategies that translate into lasting business metrics."'
  ],

  bentoHeading: 'Our Offline',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Campaigns',
  bentoMainDesc: 'Strategic real-world media deployments designed for high-impact visibility and recall.',
  bentoCard1Title: 'High-Visibility',
  bentoCard1Desc: 'Dominate physical spaces with billboards and print media.',
  bentoCard1Icon: MapPin,
  bentoCard2Title: 'Mass Audience',
  bentoCard2Icon: Radio,
  bentoCard2Image: '/bgimagectaservice.png',

  showcaseHeading: 'Our Campaigns',
  showcaseItems: [
    { title: 'Nexus Urban', category: 'Billboard Campaign', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Radio', category: 'Audio Reach', image: '/bgimagectaservice.png' },
    { title: 'Vortex Activation', category: 'On-ground Promo', image: '/scene2.png' },
    { title: 'Global Discovery', category: 'Print Media', image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: MapPin, title: 'Billboards & Print Ads', description: 'High-visibility advertising.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Radio, title: 'Radio & PVR Ads', description: 'Mass audience reach campaigns.', image: '/bgimagectaservice.png' },
    { icon: Users, title: 'On-ground Promotions', description: 'Direct audience interaction strategies.', image: '/scene2.png' }
  ],

  processLabel: 'Our Process',
  processHeading: 'The Offline',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Market Map', description: 'Identifying key geographic locations and demographic concentrations.' },
    { title: 'Media Strategy', description: 'Selecting the optimal mix of billboards, radio, print, and activations.' },
    { title: 'Campaign Launch', description: 'Deploying the physical media properties across targeted locations.' },
    { title: 'Impact Tracking', description: 'Measuring baseline lifts in brand awareness and physical footfall.' },
  ],

  differentiators: [
    { title: 'Strategic Placements', description: 'We don`t just buy space; we buy attention in the right locations.' },
    { title: 'Integrated Approach', description: 'Connecting your offline campaigns directly to your digital funnels.' },
    { title: 'Mass Scalability', description: 'Capability to manage expansive outreach uniformly across regions.' },
  ],

  results: {
    company: 'Nexus Real Estate',
    quote: "The billboard and radio campaign drove an unprecedented volume of walk-ins and direct inquiries that established us visibly in the city.",
    author: 'James T.',
    role: 'Marketing Director @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Footfall Spike', value: '45%' },
      { label: 'Brand Lift', value: 'High' },
      { label: 'Reach', value: '500k+' },
    ],
    caseStudy: {
      title: 'Success: Capturing the Urban Market',
      image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png',
    }
  },

  ctaHeading: 'Ready to rule',
  ctaSubheading: 'the physical world?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Offline Marketing',
  faqs: [
    { question: 'Why use offline marketing?', answer: 'It provides tangible brand presence, high-trust indicators, and reaches audiences that digital alone cannot penetrate.' },
    { question: 'What is PVR advertising?', answer: 'Ads played in cinemas before movies, delivering high attention to a captive geographic audience.' },
    { question: 'How do you measure ROI?', answer: 'We use vanity URLs, QR codes, dedicated phone lines, and analyze baseline lift to track offline conversions.' },
  ],
};

export default function OfflineMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
