export const env = {
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'https://gestion-en-calma.vercel.app',
  sanityProjectId:
    import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? import.meta.env.SANITY_STUDIO_PROJECT_ID ?? '',
  sanityDataset:
    import.meta.env.PUBLIC_SANITY_DATASET ?? import.meta.env.SANITY_STUDIO_DATASET ?? 'production',
  sanityReadToken: import.meta.env.SANITY_API_READ_TOKEN ?? '',
  resendApiKey: import.meta.env.RESEND_API_KEY ?? '',
  contactFormToEmail: import.meta.env.CONTACT_FORM_TO_EMAIL ?? '',
  contactFormFromEmail: import.meta.env.CONTACT_FORM_FROM_EMAIL ?? '',
};

export function isSanityConfigured() {
  return Boolean(env.sanityProjectId && env.sanityDataset);
}

export function isContactEmailConfigured() {
  return Boolean(env.resendApiKey && env.contactFormToEmail && env.contactFormFromEmail);
}
