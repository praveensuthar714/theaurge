export interface CaseStudyCredit {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  section: string;
  tagline?: string;
  description: string;
  associate?: string;
  credits?: CaseStudyCredit[];
  /** Substrings matched against title, brand folder, or category path (case-insensitive). */
  matchKeys: string[];
}

export const PORTFOLIO_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pages-of-deception',
    title: 'Pages Of deception',
    section: 'Films',
    tagline: 'Short Film | Marathi Language | 26 min',
    description:
      'A Marathi short film produced by The Aurge, Pages of Deception explores layered human emotions through a tightly woven narrative. We were responsible for end-to-end film execution, focusing on cinematic storytelling, strong performances, and atmospheric visuals. The film reflects our commitment to meaningful narratives that leave a lasting emotional impact.',
    credits: [
      { label: 'Written & Directed by', value: 'Prathamesh Savekar' },
      { label: 'Cinematography', value: 'Zaid Mulani' },
      { label: 'Screenplay', value: 'Prathamesh Savekar, Digmbar Patil' },
      { label: 'Cast', value: 'Satish Tandale, Akshay Polake, Anil Rabade, Pramod Kulkarni' },
      { label: 'Creative Director & Edit', value: 'Digambar Patil' },
      { label: 'Art Direction', value: 'Shubham Wadikar, Devyani Shinde, Aditi lalit, Abhinav B.' },
      { label: 'Music', value: 'Mohit Kulkarni' },
      { label: 'Sound', value: 'Aditya chavan' },
      { label: 'Assistant Cinematographer', value: 'Akshay Sutar' },
      { label: 'Sound Recordist', value: 'Akash Bhosale' },
      { label: 'Executive Producer', value: 'Kaustubh Bhosale, Piyush Bhosale' },
    ],
    matchKeys: ['pages of deception', 'deception'],
  },
  {
    id: 'kpt-industries',
    title: 'KPT Industries',
    section: 'Documentaries',
    tagline: 'Industrial',
    associate: 'In Associate with Devs Media',
    description:
      'We collaborated on this project by handling the shoot and supporting scripting and story development. Our focus was on presenting the industrial process with clarity, authenticity, and a cinematic visual language that communicates scale and precision.',
    matchKeys: ['kpt'],
  },
  {
    id: 'nisarg-resort-doc',
    title: 'Nisarg Resort',
    section: 'Documentaries',
    tagline: 'Hospitality',
    associate: 'In Associate with Devs Media',
    description:
      "We contributed to story development and production, capturing the essence of nature, hospitality, and guest experience. The film blends calm visuals with thoughtful storytelling to reflect the resort's philosophy and ambience.",
    matchKeys: ['nisarg'],
  },
  {
    id: 'nourishing-farm-doc',
    title: 'Nourishing Farm',
    section: 'Documentaries',
    tagline: 'Nutrition & Lifestyle',
    associate: 'In Associate with Devs Media',
    description:
      "We worked closely on concept, story, and shoot, highlighting the farm-to-fork journey and the brand's focus on healthy living. The documentary uses warm visuals and grounded storytelling to build trust and emotional connection with the audience.",
    matchKeys: ['nourishing'],
  },
  {
    id: 'suvarndeep',
    title: 'Suvarndeep',
    section: 'Ad Films & Commercials',
    tagline: 'Product',
    associate: 'In Associate with Boomrang Media',
    description:
      'A fully managed project where we handled concept, scripting, production, and post-production. The film focuses on premium presentation, product detailing, and strong visual storytelling to elevate the brand presence.',
    matchKeys: ['suvarn'],
  },
  {
    id: 'nourishing-farm-ad',
    title: 'Nourishing Farm',
    section: 'Ad Films & Commercials',
    tagline: 'Nutrition & Lifestyle',
    associate: 'In Associate with Devs Media',
    description:
      "We were involved in both shooting and script support, ensuring the brand's philosophy of healthy living and authenticity was communicated clearly and emotionally.",
    matchKeys: ['nourishing farm ad'],
  },
  {
    id: 'brixton-ad',
    title: 'Brixton',
    section: 'Ad Films & Commercials',
    tagline: 'Automobile',
    description:
      "We independently managed concept, shoot, and post-production, focusing on bold visuals and attitude-driven storytelling to match Brixton's premium motorcycle image.",
    matchKeys: ['brixton'],
  },
  {
    id: 'royal-enfield',
    title: 'Royal Enfield',
    section: 'Social Media',
    tagline: 'Automobile',
    description:
      'We manage end-to-end social media marketing, including content strategy, creatives, and campaign execution. Our focus is on storytelling-driven visuals, consistent brand voice, and high-impact content that strengthens community engagement and brand recall.',
    matchKeys: ['royal enfield', 'enfield'],
  },
  {
    id: 'yamaha',
    title: 'Yamaha',
    section: 'Social Media',
    tagline: 'Automobile',
    description:
      "Complete social media handling with a strong emphasis on performance-oriented content and visual consistency. We create engaging posts, reels, and campaigns that reflect Yamaha's energy, speed, and innovation.",
    matchKeys: ['yamaha'],
  },
  {
    id: 'brixton-social',
    title: 'Brixton',
    section: 'Social Media',
    tagline: 'Automobile',
    description:
      "End-to-end social media marketing handled by our team. Bold visuals, attitude-driven creatives, and sharp messaging are used to match Brixton's distinctive brand personality.",
    matchKeys: ['brixton social'],
  },
  {
    id: 'heera-panna',
    title: 'Heera Panna',
    section: 'Social Media',
    tagline: 'Retail',
    description:
      'We handle full-scale social media management, from content planning to execution. The approach blends premium aesthetics with strategic storytelling to enhance visibility, trust, and audience engagement.',
    matchKeys: ['heera'],
  },
  {
    id: 'nisarg-social',
    title: 'Nisarg Resort',
    section: 'Social Media',
    tagline: 'Hospitality',
    associate: 'In Associate with Devs Media',
    description:
      'We provide video content editing and creative design support for social media platforms. Our work enhances visual storytelling while maintaining the calm, nature-driven identity of the brand.',
    matchKeys: ['nisarg social'],
  },
  {
    id: 'nourishing-social',
    title: 'Nourishing Farm',
    section: 'Social Media',
    tagline: 'Nutrition & Lifestyle',
    associate: 'In Associate with Devs Media',
    description:
      'We support the brand with video editing and design creatives for social media. The content focuses on healthy living, authenticity, and visually communicating the farm-to-fork philosophy.',
    matchKeys: ['nourishing social'],
  },
  {
    id: 'suprito',
    title: 'Suprito',
    section: 'Social Media',
    tagline: 'Fashion',
    description:
      'Full social media marketing execution including content creation, visual design, and storytelling. The focus is on clean aesthetics, brand consistency, and content that drives engagement and recognition.',
    matchKeys: ['suprito'],
  },
  {
    id: 'marvelous-hair',
    title: 'Marvelous Hair Studio',
    section: 'Social Media',
    tagline: 'Fashion',
    description:
      'We manage complete social media presence, focusing on trend-led visuals, reels, and brand storytelling. Our content strategy highlights transformation, style, and personality to connect strongly with the target audience.',
    matchKeys: ['marvelous', 'hair studio'],
  },
];

function normalizeKey(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function sectionBoost(study: CaseStudy, driveRoot?: string): number {
  if (!driveRoot) return 0;
  if (driveRoot === 'Social Media' && study.section === 'Social Media') return 50;
  if (driveRoot === 'TV Commercials' && study.section.includes('Commercial')) return 50;
  if (driveRoot === 'Documentries' && study.section === 'Documentaries') return 50;
  return 0;
}

export function findCaseStudyForItem(input: {
  title?: string;
  categoryPath?: string[];
  parentFolder?: string;
}): CaseStudy | undefined {
  const haystack = normalizeKey(
    [input.title, input.parentFolder, ...(input.categoryPath || [])].filter(Boolean).join(' ')
  );
  const driveRoot = input.categoryPath?.[0];

  let best: CaseStudy | undefined;
  let bestScore = 0;

  for (const study of PORTFOLIO_CASE_STUDIES) {
    for (const key of study.matchKeys) {
      const nk = normalizeKey(key);
      if (nk.length < 3) continue;
      if (haystack.includes(nk)) {
        const score = nk.length + sectionBoost(study, driveRoot);
        if (score > bestScore) {
          best = study;
          bestScore = score;
        }
      }
    }
  }

  return best;
}
