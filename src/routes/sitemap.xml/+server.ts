import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
  const site = url.origin;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${site}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>`;

  return new Response(body, {
    headers: { 'content-type': 'application/xml; charset=utf-8' }
  });
};
