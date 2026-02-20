export interface ValueItem {
  emoji: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;
}

export interface HighlightItem {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
}

export interface SocialItem {
  platform: string;
  url: string;
}

const DEMO_VALUES: ValueItem[] = [];

const DEMO_HIGHLIGHTS: HighlightItem[] = [];

function parseJSON<T>(raw: string | undefined, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || '이지원',
  nameEn: process.env.NEXT_PUBLIC_SITE_NAME_EN || 'Jiwon Lee',
  tagline: process.env.NEXT_PUBLIC_TAGLINE || '콘텐츠로 세상을 연결하는 크리에이터',
  taglineEn: process.env.NEXT_PUBLIC_TAGLINE_EN || 'Creator who connects the world through content',
  heroImageUrl: process.env.NEXT_PUBLIC_HERO_IMAGE_URL || null,
  story:
    process.env.NEXT_PUBLIC_STORY ||
    '',
  storyEn:
    process.env.NEXT_PUBLIC_STORY_EN ||
    '',
  values: parseJSON<ValueItem[]>(process.env.NEXT_PUBLIC_VALUES, DEMO_VALUES),
  highlights: parseJSON<HighlightItem[]>(process.env.NEXT_PUBLIC_HIGHLIGHTS, DEMO_HIGHLIGHTS),
  galleryImages: parseJSON<string[]>(process.env.NEXT_PUBLIC_GALLERY_IMAGES, []),
  email: process.env.NEXT_PUBLIC_EMAIL || 'hello@example.com',
  socials: parseJSON<SocialItem[]>(process.env.NEXT_PUBLIC_SOCIALS, []),
  gaId: process.env.NEXT_PUBLIC_GA_ID || null,
};

export type SiteConfig = typeof siteConfig;
