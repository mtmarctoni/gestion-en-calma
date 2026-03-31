import { defineField, defineType } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Sobre mí',
  type: 'document',
  fields: [
    defineField({ name: 'seo', title: 'SEO', type: 'seo', validation: (rule) => rule.required() }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
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
      name: 'story',
      title: 'Historia',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(2).max(4),
    }),
    defineField({
      name: 'values',
      title: 'Valores',
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
      validation: (rule) => rule.min(3).max(4),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Sobre mí' }),
  },
});
