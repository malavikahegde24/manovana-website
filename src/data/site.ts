/**
 * Single source of truth for site-wide constants: NAP, social links,
 * navigation, and CTA URLs. Swap placeholder URLs here when real assets arrive.
 */

export const SITE = {
  name: 'Manovana',
  legalName: 'Manovana — Malavika Hegde',
  coach: 'Malavika Hegde',
  role: 'Mind Coach & Life Coach',
  url: 'https://manovana.netlify.app',
  tagline:
    'Manovana helps minds Heal, Grow and Bloom — the Flower of Happiness, Love and Peace in your Mind Garden, using a holistic blend of proven healing techniques.',
  shortTagline: 'Heal. Grow. Bloom your Mind Garden.',
  description:
    'Manovana is the mind-coaching practice of Malavika Hegde, helping people heal emotional pain, break limiting patterns, and find inner peace through meditation, NLP, hypnotherapy, EFT and more.',
  peopleImpacted: '18,000+',
  email: 'malavikahegde24@gmail.com',
  // Phone is intentionally NOT published on the website (per client notes).
  languages: ['Kannada', 'English'],
  locale: 'en_IN',
  region: 'Karnataka, India',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/malavikahegde24',
  instagramHandle: '@malavikahegde24',
} as const;

/**
 * CTA / external integration URLs.
 * TODO(asset): replace `bookingUrl` with the real Cal.com scheduling link.
 * TODO(asset): replace `registrationUrl` with the Google Form link (Phase 2).
 */
export const LINKS = {
  bookingUrl: '/contact#book', // placeholder until Cal link is provided
  registrationUrl: '/contact', // masterclass registration deferred to Phase 2
  contact: '/contact',
} as const;

export const NAV = [
  { label: 'About', href: '/about' },
  { label: 'How I Help', href: '/#help-with' },
  { label: 'Approach', href: '/approach' },
  { label: 'Sessions', href: '/services' },
  { label: 'Stories', href: '/testimonials' },
  { label: 'Insights', href: '/articles' },
  { label: 'Contact', href: '/contact' },
] as const;

export type NavItem = (typeof NAV)[number];
