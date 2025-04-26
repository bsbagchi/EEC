import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cgcarbon.in';

  const routes = [
    '',
    '/about',
    '/product',
    '/product/product1',
    '/product/product2',
    '/product/product3',
    '/activated',
    '/application',
    '/service',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as 'daily' | 'weekly', // Fixed type
    priority: route === '' ? 1 : route.includes('product/') ? 0.8 : 0.7,
  }));

  return routes;
}
