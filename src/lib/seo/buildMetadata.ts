import type { SEO } from '@/data/fallbackContent';
import { absoluteUrl } from '@/lib/utils/url';

export function buildMetadata({
  seo,
  siteName,
  siteUrl,
  pathname,
}: {
  seo: SEO;
  siteName: string;
  siteUrl: string;
  pathname: string;
}) {
  const canonical = absoluteUrl(pathname, siteUrl);
  const ogImage = seo.ogImage ? absoluteUrl(seo.ogImage, siteUrl) : undefined;

  return {
    canonical,
    title: seo.title,
    description: seo.description,
    ogImage,
    siteName,
  };
}
