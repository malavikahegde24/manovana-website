/**
 * SEO + structured-data (JSON-LD) builders.
 * Centralises meta generation so no page ships without a unique, well-formed
 * title and description (see documents/factors.txt requirements).
 */
import { SITE, SOCIAL } from '../data/site';

export interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/" — used to build the canonical URL. */
  path: string;
  /** Open Graph image path (absolute or root-relative). */
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** When true, search engines are asked not to index the page. */
  noindex?: boolean;
}

/** Keep titles within a sane SERP length; append brand if room allows. */
export function formatTitle(title: string): string {
  const branded = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return branded.length > 60 ? title : branded;
}

export function canonical(path: string): string {
  return new URL(path, SITE.url).href;
}

/** Organisation / LocalBusiness — used on home & about. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE.name,
    alternateName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    areaServed: SITE.region,
    availableLanguage: SITE.languages,
    sameAs: [SOCIAL.instagram],
    founder: personJsonLd(),
    knowsAbout: [
      'Mind Coaching',
      'Life Coaching',
      'Meditation',
      'Neuro Linguistic Programming',
      'Hypnotherapy',
      'Emotional Freedom Technique',
      'Past Life Regression',
    ],
  };
}

/** The coach — Malavika Hegde. */
export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.coach,
    jobTitle: SITE.role,
    worksFor: { '@type': 'Organization', name: SITE.name },
    url: SITE.url,
    sameAs: [SOCIAL.instagram],
    knowsLanguage: SITE.languages,
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: canonical(opts.path),
    provider: { '@type': 'Person', name: SITE.coach },
    areaServed: SITE.region,
    availableLanguage: SITE.languages,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}
