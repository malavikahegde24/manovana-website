/**
 * Single source of truth for site-wide constants: NAP, social links,
 * navigation, and CTA URLs. Swap placeholder URLs here when real assets arrive.
 */

export const SITE = {
  name: 'Manovana',
  legalName: 'Manovana, Malavika Hegde',
  coach: 'Malavika Hegde',
  role: 'Mind Coach & Life Coach',
  url: 'https://manovana.netlify.app',
  tagline:
    'Manovana helps minds Heal, Grow and Bloom, the Flower of Happiness, Love and Peace in your Mind Garden, using a holistic blend of proven healing techniques.',
  shortTagline: 'Heal. Grow. Bloom your Mind Garden.',
  description:
    'Manovana is the mind-coaching practice of Malavika Hegde, helping people heal emotional pain, break limiting patterns, and find inner peace through meditation, NLP, hypnotherapy, EFT and more.',
  peopleImpacted: '21,000+',
  email: 'malavikahegde24@gmail.com',
  // Phone is intentionally NOT published on the website (per client notes).
  languages: ['Kannada', 'English'],
  locale: 'en_IN',
  region: 'Bangalore, India',
} as const;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/malavikahegde24',
  instagramHandle: '@malavikahegde24',
} as const;

/**
 * CTA / external integration URLs.
 * TODO(asset): replace `registrationUrl` with the Google Form link (Phase 2).
 */
export const LINKS = {
  bookingUrl: '/book', // all book/schedule CTAs point at the paid-session booking page
  registrationUrl: '/contact', // masterclass registration deferred to Phase 2
  contact: '/contact',
  assessment: '/assessment', // free Mind Detox Scorecard
  bookSession: '/book', // paid 1-2-1 session booking (pay via UPI → confirm via form)
} as const;

/**
 * WhatsApp contact for clarity calls & masterclass registration.
 * `link` opens a chat; append `?text=` (URL-encoded) for a pre-filled message.
 */
export const WHATSAPP = {
  number: '919448455887',
  display: '+91 94484 55887',
  link: 'https://wa.me/919448455887',
} as const;

/**
 * Paid sessions with Malavika, surfaced by the Mind Detox Scorecard result.
 * Flow: pay via UPI → fill the Google Form with details + payment screenshot
 * to confirm the booking. The full UPI ID / QR live in the form itself, not
 * on-site (kept minimal here per client request).
 *
 * TODO(client): the 60-min and package-of-4 plans are paused, not deleted —
 * uncomment below to bring them back to the booking flow.
 */
export const OFFERS = {
  upiId: 'malavikahegde24@okhdfcbank',
  payeeName: 'Malavika Hegde',
  bookingFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSeWqOFVlvy2v8ONQ3_EBg8wwi0uZ3kGybBJ9leizH3QI0Lg5w/viewform',
  plans: [
    { id: 'intro', label: 'First 30 min call', price: '₹1,499', amount: 1499 },
    // { id: 'session', label: 'Ongoing 60 min 1-2-1 session', price: '₹3,500', amount: 3500 },
    // {
    //   id: 'package4',
    //   label: 'Package of 4 sessions',
    //   price: '₹11,999',
    //   amount: 11999,
    //   originalPrice: '₹14,000',
    //   discount: 'Save 15%',
    // },
  ],
} as const;

/**
 * Free gifts. The guided meditation is served from our own /public/audio and
 * downloaded directly when a visitor leaves their email on the homepage.
 */
export const FREEBIES = {
  meditationAudioUrl: '/audio/detox-your-mind-guided-meditation.mp4',
  meditationFileName: 'Detox Your Mind, Guided Meditation by Malavika Hegde.mp4',
} as const;

/**
 * Cal.com scheduling.
 * TODO(asset): set `calLink` to Malavika's real Cal.com link, e.g.
 * "malavikahegde/consultation". While empty, /schedule shows an email fallback.
 */
export const SCHEDULING = {
  calLink: '',
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
