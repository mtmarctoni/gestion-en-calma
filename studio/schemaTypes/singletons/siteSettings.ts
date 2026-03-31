import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Nombre del sitio',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'domain',
      title: 'Dominio',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'founderName',
      title: 'Nombre de la fundadora',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
    defineField({
      name: 'whatsappUrl',
      title: 'Enlace de WhatsApp',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'instagramUrl', title: 'Instagram', type: 'url' }),
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
    defineField({
      name: 'navLinks',
      title: 'Navegación',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'href', title: 'Enlace', type: 'string' }),
            defineField({ name: 'label', title: 'Texto', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'legalLinks',
      title: 'Links legales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'href', title: 'Enlace', type: 'string' }),
            defineField({ name: 'label', title: 'Texto', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO por defecto',
      type: 'seo',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Ajustes del sitio' }),
  },
});
