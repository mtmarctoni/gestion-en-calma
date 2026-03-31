import {
  aboutPageFallback,
  contactPageFallback,
  faqFallback,
  homePageFallback,
  servicesFallback,
  servicesPageFallback,
  siteSettingsFallback,
  testimonialsFallback,
  type AboutPageData,
  type ContactPageData,
  type FAQItem,
  type HomePageData,
  type Service,
  type ServicesPageData,
  type SiteSettings,
  type Testimonial,
} from '@/data/fallbackContent';
import { client } from '@/lib/sanity/client';
import {
  aboutPageQuery,
  contactPageQuery,
  faqQuery,
  homePageQuery,
  serviceBySlugQuery,
  servicesPageQuery,
  servicesQuery,
  siteSettingsQuery,
  testimonialsQuery,
} from '@/lib/sanity/queries';
import { isSanityConfigured } from '@/lib/utils/env';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function mergeWithFallback<T>(fallback: T, value: unknown): T {
  if (value === null || value === undefined) {
    return fallback;
  }

  if (Array.isArray(fallback)) {
    return (Array.isArray(value) && value.length > 0 ? value : fallback) as T;
  }

  if (isPlainObject(fallback) && isPlainObject(value)) {
    const mergedEntries = Object.keys(fallback).map((key) => {
      const fallbackValue = fallback[key as keyof typeof fallback];
      const incomingValue = value[key];

      return [key, mergeWithFallback(fallbackValue, incomingValue)];
    });

    return Object.fromEntries(mergedEntries) as T;
  }

  return (value ?? fallback) as T;
}

async function fetchOrFallback<T>(query: string, fallback: T, params?: Record<string, string>) {
  if (!isSanityConfigured()) {
    return fallback;
  }

  try {
    const result = await client.fetch<T | null>(query, params ?? {});
    return mergeWithFallback(fallback, result);
  } catch {
    return fallback;
  }
}

export async function loadSiteSettings(): Promise<SiteSettings> {
  return fetchOrFallback(siteSettingsQuery, siteSettingsFallback);
}

export async function loadHomePage(): Promise<HomePageData> {
  return fetchOrFallback(homePageQuery, homePageFallback);
}

export async function loadServices(): Promise<Service[]> {
  return fetchOrFallback(servicesQuery, servicesFallback);
}

export async function loadServiceBySlug(slug: string): Promise<Service | null> {
  const fallback = servicesFallback.find((service) => service.slug === slug) ?? null;
  return fetchOrFallback(serviceBySlugQuery, fallback, { slug });
}

export async function loadTestimonials(): Promise<Testimonial[]> {
  return fetchOrFallback(testimonialsQuery, testimonialsFallback);
}

export async function loadFaqItems(): Promise<FAQItem[]> {
  return fetchOrFallback(faqQuery, faqFallback);
}

export async function loadServicesPage(): Promise<ServicesPageData> {
  return fetchOrFallback(servicesPageQuery, servicesPageFallback);
}

export async function loadAboutPage(): Promise<AboutPageData> {
  return fetchOrFallback(aboutPageQuery, aboutPageFallback);
}

export async function loadContactPage(): Promise<ContactPageData> {
  return fetchOrFallback(contactPageQuery, contactPageFallback);
}
