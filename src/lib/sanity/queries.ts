export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  domain,
  tagline,
  founderName,
  location,
  email,
  phone,
  whatsappUrl,
  instagramUrl,
  primaryCta{label, href, variant},
  secondaryCta{label, href, variant},
  navLinks[]{href, label},
  legalLinks[]{href, label},
  seo{title, description, "ogImage": ogImage.asset->url}
}`;

export const servicesQuery = `*[_type == "service"] | order(featured desc, title asc){
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  longDescription,
  outcomes,
  deliverables,
  featured
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(orderRank asc, _createdAt asc){
  _id,
  name,
  role,
  quote
}`;

export const faqQuery = `*[_type == "faqItem"] | order(orderRank asc, _createdAt asc){
  _id,
  question,
  answer
}`;

export const homePageQuery = `*[_type == "homePage"][0]{
  seo{title, description, "ogImage": ogImage.asset->url},
  hero{
    eyebrow,
    title,
    subtitle,
    primaryCta{label, href, variant},
    secondaryCta{label, href, variant}
  },
  trustItems,
  painPoints,
  featuredServicesTitle,
  outcomes,
  idealClients,
  process,
  founder,
  finalCta{
    title,
    body,
    primaryCta{label, href, variant},
    secondaryCta{label, href, variant}
  }
}`;

export const servicesPageQuery = `*[_type == "servicesPage"][0]{
  seo{title, description, "ogImage": ogImage.asset->url},
  intro,
  categories
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  seo{title, description, "ogImage": ogImage.asset->url},
  eyebrow,
  title,
  intro,
  story,
  values
}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  seo{title, description, "ogImage": ogImage.asset->url},
  eyebrow,
  title,
  intro,
  primaryCta{label, href, variant},
  secondaryCta{label, href, variant},
  formTitle,
  formIntro
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  shortDescription,
  longDescription,
  outcomes,
  deliverables,
  featured
}`;
