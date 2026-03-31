import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/franchise/dashboard',
          '/api/',
          '/admin/',
        ],
      },
    ],
    sitemap: 'https://anitio.in/sitemap.xml',
  };
}
