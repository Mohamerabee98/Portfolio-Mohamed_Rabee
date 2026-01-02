import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://myportfolio-ae246.web.app' });

  const pages = [
    '/',
    '/#Projects',
    '/#Skills',
    '/#Experience',
    '/#Contact',
  ];

  pages.forEach((page) => {
    sitemap.write({ url: page, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('./dist/sitemap.xml').write(data);
}

generateSitemap();
