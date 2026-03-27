'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Globe, Search, BarChart, Rocket, Shield, Zap } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 07',
  heroHeading: 'Professional SEO',
  heroSubheading: '& Optimization.',
  heroDescription: 'Optimizing your digital presence to rank higher, reach more customers, and dominate your market.',
  heroBg: '/performance-marketing/imgi_87_eed97c6479a951f6169af5645730a69694bc058a-768x880.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'The Visibility',
  valuePropAccent: 'Engine.|',
  valuePropBody: [
    'Search engine optimization is more than just keywords. It\'s about building a digital foundation that search engines trust and rank.',
    '"We build technical SEO systems that help your business get found and grow through organic search results and smart data strategy."',
  ],

  bentoHeading: 'Our SEO',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/performance-marketing/imgi_1_8233166219079021cffd1f915256d7957270b153-1200x1472.png',
  bentoMainTitle: 'Search Strategy',
  bentoMainSubtitle: 'Execution',
  bentoMainDesc: 'In-depth keyword research and competitor analysis to identify the best ways for you to rank on Google.',
  bentoCard1Title: 'Technical SEO',
  bentoCard1Desc: 'Optimizing your website code and performance for faster speeds and better crawlability.',
  bentoCard1Icon: Globe,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Search,

  showcaseHeading: 'Our Results',
  showcaseItems: [
    { title: 'Project One', category: 'Organic', image: '/performance-marketing/imgi_36_30428773e4435b802644bd16c9216f7f84ff6cb7-3216x1090.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Project Two', category: 'Technical', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
    { title: 'Project Three', category: 'Growth', image: '/performance-marketing/imgi_3_8e1325c7b507a7bfda755f8c3b98594affda26fd-3600x1110.png' },
    { title: 'Project Four', category: 'Optimization', image: '/performance-marketing/imgi_38_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Globe, title: 'Organic Growth', description: 'Expertly managed campaigns that maximize your brand visibility and leads.', image: '/performance-marketing/imgi_90_804da7ef513c8dd50a21df24b897e76f21745bd1-1024x1024.png' },
    { icon: Search, title: 'Technical Cleanup', description: 'Optimizing your site code for faster load times and better search indexing.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' },
    { icon: BarChart, title: 'Data Analysis', description: 'Advanced tracking and reporting for complete visibility into your growth.', image: '/performance-marketing/imgi_23_79e575aed58775b9f7c0faa23c1874718728a1ad-2800x1450.png' },
    { icon: Rocket, title: 'Search Strategy', description: 'Keyword research and strategy built to help you outrank your competitors.', image: '/performance-marketing/imgi_17_2e6b344e7fb7c169cdbedc5e992ea7368676f16b-2800x1450.png' },
    { icon: Shield, title: 'Brand Authority', description: 'Positioning and content that makes your brand stand out in search results.', image: '/performance-marketing/imgi_15_891037571e51c30078bf931b3bac1081b95986df-2800x1450.png' },
    { icon: Zap, title: 'Core Vitals', description: 'A technical refining lab where your site speed and performance are perfected.', image: '/performance-marketing/imgi_2_b6e053d53b36b8503efab763689f64199d89af34-2160x1223.png' },
  ],

  processLabel: 'Our Process',
  processHeading: 'The SEO',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Audit Session', description: 'Researching your current search presence and identifying opportunities.' },
    { title: 'Technical Sync', description: 'Optimizing your site code and structure for better indexing and speed.' },
    { title: 'Growth Phase', description: 'Executing your keyword strategy and building brand authority online.' },
    { title: 'Optimization', description: 'Constant data labs to refine your strategy and drive even more growth.' },
  ],

  differentiators: [
    { title: 'Data-Backed', description: 'Every SEO strategy we build is based on real market data and results.' },
    { title: 'Results Focus', description: 'We focus entirely on metrics that actually help your bottom line grow.' },
    { title: 'White-Hat Style', description: 'Sustainable, ethical SEO practices designed for long-term project success.' },
  ],

  results: {
    company: 'Nexus Finance',
    quote: "The SEO strategy they built for our launch was a game-changer. We reached page one within months.",
    author: 'Sam Thorne',
    role: 'Growth Lead @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Organic Lift', value: '110%' },
      { label: 'Keyword Scope', value: '35+' },
      { label: 'Growth Rating', value: '150%' },
    ],
    caseStudy: {
      title: 'Success: A Brand Narrative for Nexus',
      image: '/performance-marketing/imgi_14_10b6468101169b5d6a5739cf9952e8313827ac03-2787x1457.png',
    }
  },

  ctaHeading: 'Ready to rank',
  ctaSubheading: 'your business today?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'SEO',
  faqs: [
    { question: 'How long for results?', answer: 'Most SEO systems show measurable growth results within 3–6 months of deployment.' },
    { question: 'How do you track growth?', answer: 'We use advanced tracking labs to monitor your rankings and organic traffic daily.' },
    { question: 'Do you scale globally?', answer: 'Yes, our SEO systems are built for both local and international market expansion.' },
  ],
};

export default function SEOPage() {
  return <ServicePageTemplate data={data} />;
}
