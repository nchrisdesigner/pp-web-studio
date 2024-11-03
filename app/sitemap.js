// app/sitemap.js

export default function sitemap() {
  const BASE_URL = 'https://www.pixelperfekt.gr';
  
  const urls = [
    { url: `${BASE_URL}/`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/web-design`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/brand-design`, lastModified: new Date().toISOString() },
    { url: `${BASE_URL}/video-motion`, lastModified: new Date().toISOString() },
  ];

  return urls;
}
