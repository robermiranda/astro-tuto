import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';


export async function GET(context) {
    const posts = await getCollection("posts");

    return rss({
      title: 'Astro Learner | Blog',
      description: 'My journey learning Astro',
      site: context.site,
      items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
      customData: `<language>en-us</language>`,
    });
}