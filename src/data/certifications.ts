/**
 * Malavika's professional certifications, displayed in this order.
 * Images are self-contained in /public/images/certificates.
 * `short` is used for the homepage credential badges; the full record powers the
 * certificate carousel on /about.
 */
export interface Certification {
  slug: string;
  title: string;
  issuer?: string;
  year: string;
  short: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    slug: 'holistic-healing',
    title: 'Holistic Healing Therapy',
    issuer: 'Spiritual Solutions Centre',
    year: '2022',
    short: 'Holistic Healing Therapy',
  },
  {
    slug: 'coaching-certification',
    title: 'Coaching Mastery',
    issuer: 'Life By Design',
    year: '2025',
    short: 'Coaching Mastery',
  },
  {
    slug: 'relationship-expert',
    title: 'Relationship Counselling',
    issuer: 'Relationship Certification',
    year: '2025',
    short: 'Relationship Counselling',
  },
  {
    slug: 'enlightened-coach',
    title: 'Enlightenment Coaching',
    issuer: 'Enlightenment Certification',
    year: '2025',
    short: 'Enlightenment Coaching',
  },
  {
    slug: 'compassion-key-master',
    title: 'Compassion Key Mastery',
    issuer: 'The Compassion Key®',
    year: '2025',
    short: 'Compassion Key Mastery',
  },
  {
    slug: 'reiki-advanced',
    title: 'Advanced Usui Reiki Healing',
    issuer: 'Traditional & Karuna Reiki',
    year: '2024',
    short: 'Advanced Usui Reiki Healing',
  },
];
