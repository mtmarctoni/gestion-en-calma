import { defineField, defineType } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción corta',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(220),
    }),
    defineField({
      name: 'longDescription',
      title: 'Descripción larga',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'outcomes',
      title: 'Resultados o beneficios',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(2).max(5),
    }),
    defineField({
      name: 'deliverables',
      title: 'Qué suele incluir',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (rule) => rule.min(2).max(6),
    }),
    defineField({
      name: 'featured',
      title: 'Destacar en home',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'shortDescription',
    },
  },
});
