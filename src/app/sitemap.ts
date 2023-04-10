import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jacobc.co.za',
      lastModified: new Date(),
    },
  ];
}
