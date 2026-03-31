import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

export const client = sanityClient;
export const imageBuilder = createImageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}
