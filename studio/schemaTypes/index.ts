import { faqItem } from './documents/faqItem';
import { service } from './documents/service';
import { testimonial } from './documents/testimonial';
import { cta } from './objects/cta';
import { seo } from './objects/seo';
import { aboutPage } from './singletons/aboutPage';
import { contactPage } from './singletons/contactPage';
import { homePage } from './singletons/homePage';
import { servicesPage } from './singletons/servicesPage';
import { siteSettings } from './singletons/siteSettings';

export const schemaTypes = [
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  contactPage,
  service,
  faqItem,
  testimonial,
  cta,
  seo,
];
