import { MetadataRoute } from 'next';
import { courses } from '@/data/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://anitio.in';

  const courseUrls = courses.map(c => ({
    url: `${base}/courses/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/courses`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/admission`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/admission/offline`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/admission/status`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/exam`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/exam/online`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/exam/admit-card`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/results`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/schedule`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/payment`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/franchise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/franchise/register`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/franchise/login`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/notices`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...courseUrls,
  ];
}
