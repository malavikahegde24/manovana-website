/**
 * Malavika's professional certifications, most recent first.
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
    slug: 'enlightened-coach',
    title: 'Certified Enlightened Coach',
    issuer: 'Enlightenment Certification',
    year: '2025',
    short: 'Enlightened Coach',
  },
  {
    slug: 'relationship-expert',
    title: 'Relationship Certification Expert',
    issuer: 'Relationship Certification',
    year: '2025',
    short: 'Relationship Expert',
  },
  {
    slug: 'coaching-certification',
    title: 'Coaching Certification 1·2·1 — 75 hrs',
    issuer: 'Life By Design',
    year: '2025',
    short: 'Certified Coach',
  },
  {
    slug: 'compassion-key-master',
    title: 'Compassion Key — Master Practitioner',
    issuer: 'The Compassion Key®',
    year: '2025',
    short: 'Compassion Key Master',
  },
  {
    slug: 'reiki-usui-basics',
    title: 'Usui Reiki — Basics (Usui Shiki Ryoho)',
    issuer: 'Traditional Reiki',
    year: '2005',
    short: 'Usui Reiki',
  },
  {
    slug: 'reiki-advanced',
    title: 'Usui Reiki — Advanced (Usui Shiki Ryoho)',
    issuer: 'Traditional & Karuna Reiki',
    year: '2024',
    short: 'Advanced Reiki',
  },
  {
    slug: 'holistic-healing',
    title: 'Holistic Healing Therapy — 108 hrs',
    issuer: 'Spiritual Solutions Centre',
    year: '2022',
    short: 'Holistic Healing Therapist',
  },
];
