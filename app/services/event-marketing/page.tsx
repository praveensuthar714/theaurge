'use client';

import ServicePageTemplate, { ServicePageData } from '@/components/service/ServicePageTemplate';
import { Target, Users, Zap, Globe } from 'lucide-react';

const data: ServicePageData = {
  moduleLabel: 'Service Module / 11',
  heroHeading: 'Event',
  heroSubheading: 'Marketing.',
  heroDescription: 'Events are more than just gatherings — they are powerful opportunities to create real, human connections with your audience. We design and execute experiences that go beyond the ordinary, turning ideas into memorable moments that reflect your brand’s identity and purpose.',
  heroBg: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png',
  primaryCTA: 'Get in Touch',

  valuePropLabel: 'Memorable Impact',
  valuePropAccent: 'Human Connection.|',
  valuePropBody: [
    "From concept to execution, we focus on engagement, storytelling, and impact. Whether it's a brand launch, activation, or promotional event, we ensure every detail contributes to a seamless and unforgettable experience.",
    '"A great event is an extension of your brand — leaving a lasting impression that drives community and growth."'
  ],

  bentoHeading: 'Our Event',
  bentoSubheading: 'Expertise.',
  bentoMainImage: '/photography/imgi_46_df018c187afafeb49e29548a8cf74da8fa90be3e-2560x1707.png',
  bentoMainTitle: 'Institutional',
  bentoMainSubtitle: 'Events',
  bentoMainDesc: 'High-end corporate gatherings designed to elevate your brand presence.',
  bentoCard1Title: 'Brand Activations',
  bentoCard1Desc: 'Immersive experiences that turn attendees into brand advocates.',
  bentoCard1Icon: Users,
  bentoCard2Title: 'Global Hub',
  bentoCard2Icon: Globe,
  bentoCard2Image: '/photography/imgi_47_9ffbedeaf31f316e6d18223fc532edcc8db93ff3-2560x1440.png',

  showcaseHeading: 'Our Events',
  showcaseItems: [
    { title: 'Nexus Summit', category: 'Corporate Event', image: '/photography/imgi_46_df018c187afafeb49e29548a8cf74da8fa90be3e-2560x1707.png', span: 'lg:col-span-2 lg:row-span-2' },
    { title: 'Eon Activation', category: 'Brand Launch', image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png' },
    { title: 'Vortex Gala', category: 'Exclusive Event', image: '/photography/imgi_47_9ffbedeaf31f316e6d18223fc532edcc8db93ff3-2560x1440.png' },
    { title: 'Global Discovery', category: 'Experiential', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png', span: 'lg:col-span-2' },
  ],

  modules: [
    { icon: Users, title: 'Event Planning', description: 'Conceptualizing brand events.', image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png' },
    { icon: Zap, title: 'Audience Engagement', description: 'Interactive and engaging experiences.', image: '/photography/imgi_46_df018c187afafeb49e29548a8cf74da8fa90be3e-2560x1707.png' },
    { icon: Target, title: 'Execution Management', description: 'Smooth and professional event handling.', image: '/photography/imgi_47_9ffbedeaf31f316e6d18223fc532edcc8db93ff3-2560x1440.png' },
    { icon: Globe, title: 'Promotion Strategy', description: 'Pre and post-event marketing.', image: '/performance-marketing/imgi_20_cc6f0b992c22f151d0f139dd516cd3b7979d49e4-2800x1450.png' }
  ],

  processLabel: 'Our Process',
  processHeading: 'The Event',
  processSubheading: 'Path.',
  processSteps: [
    { title: 'Conceptualization', description: 'Designing the core theme and objectives for your brand event.' },
    { title: 'Logistics Planning', description: 'Securing venues, partners, and technical requirements.' },
    { title: 'Execution', description: 'Managing the event on-site to ensure a seamless experience.' },
    { title: 'Post-Event Review', description: 'Analyzing engagement and gathering feedback for future growth.' },
  ],

  differentiators: [
    { title: 'Creative Vision', description: 'Events that are uniquely tailored to your brand identity.' },
    { title: 'Flawless Execution', description: 'Precision management ensuring every detail is perfect.' },
    { title: 'Audience Focus', description: 'Experiences designed around human connection and engagement.' },
  ],

  results: {
    company: 'Nexus Group',
    quote: "The brand launch event exceeded all expectations. It was an incredible experience that deeply connected us with our target audience.",
    author: 'Sarah Jenkins',
    role: 'Event Director @ Nexus',
    avatar: '/performance-marketing/imgi_121_6e3a391a57fd5a5722535b41efcb371b6ba2db58-196x196.png',
    metrics: [
      { label: 'Attendance', value: '100%+' },
      { label: 'Engagement', value: 'High' },
      { label: 'Brand Lift', value: '2.5x' },
    ],
    caseStudy: {
      title: 'Success: Launching the Nexus Global Summit',
      image: '/video-production/imgi_15_c04d7f33b7555728ba75e83de4d85a4a45e47333-2800x1450.png',
    }
  },

  ctaHeading: 'Ready to host',
  ctaSubheading: 'your next event?',
  ctaCTA: 'Get in Touch',

  faqHeading: 'Event Marketing',
  faqs: [
    { question: 'What type of events do you handle?', answer: 'We specialize in corporate brand events, product launches, conventions and targeted activations.' },
    { question: 'Do you manage execution on site?', answer: 'Yes, we provide full end-to-end execution and management for seamless running of the event.' },
    { question: 'Can you help with event promotion?', answer: 'Absolutely. We strategize pre and post-event marketing to guarantee exposure and retention.' },
  ],
};

export default function EventMarketingPage() {
  return <ServicePageTemplate data={data} />;
}
