export function absoluteUrl(path: string, siteUrl: string) {
  return new URL(path, siteUrl).toString();
}
