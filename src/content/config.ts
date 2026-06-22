import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const techniques = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/techniques' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    icon: z.string().default('sparkles'),
    helpsWith: z.array(z.string()).default([]),
    order: z.number().default(99),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

const concerns = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concerns' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    icon: z.string().default('heart'),
    relatedTechniques: z.array(z.string()).default([]),
    order: z.number().default(99),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    context: z.string().optional(),
    quote: z.string(),
    // TODO(asset): add `image` when real client photos are provided.
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

export const collections = { techniques, concerns, testimonials, articles };
