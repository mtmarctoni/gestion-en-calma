import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'seo', title: 'SEO', type: 'seo', validation: (rule) => rule.required() }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'primaryCta',
          title: 'CTA principal',
          type: 'cta',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'secondaryCta',
          title: 'CTA secundaria',
          type: 'cta',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'trustItems',
      title: 'Franja de confianza',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(3).max(4),
    }),
    defineField({
      name: 'painPoints',
      title: 'Pain points',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Puntos',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (rule) => rule.min(3).max(4),
        }),
      ],
    }),
    defineField({
      name: 'featuredServicesTitle',
      title: 'Título de servicios destacados',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'outcomes',
      title: 'Resultados',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Resultados',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (rule) => rule.min(3).max(5),
        }),
      ],
    }),
    defineField({
      name: 'idealClients',
      title: 'Cliente ideal',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'intro',
          title: 'Intro',
          type: 'text',
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'items',
          title: 'Tipos de cliente',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (rule) => rule.min(4).max(8),
        }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Proceso',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'steps',
          title: 'Pasos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', title: 'Título', type: 'string' }),
                defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 3 }),
              ],
            },
          ],
          validation: (rule) => rule.min(4).max(4),
        }),
      ],
    }),
    defineField({
      name: 'founder',
      title: 'Bloque fundadora',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Párrafos',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (rule) => rule.min(2).max(3),
        }),
      ],
    }),
    defineField({
      name: 'finalCta',
      title: 'CTA final',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'body',
          title: 'Texto',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'primaryCta',
          title: 'CTA principal',
          type: 'cta',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'secondaryCta',
          title: 'CTA secundaria',
          type: 'cta',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home' }),
  },
});
