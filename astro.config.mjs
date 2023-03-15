import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/static'
import astroI18next from 'astro-i18next'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import { remarkReadingTime } from './src/utils/readingTime'

// https://astro.build/config
export default defineConfig({
  site: 'https://azagatti.dev',
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noreferrer noopener'],
        },
      ],
    ],
    syntaxHighlight: 'prism',
  },
  integrations: [mdx(), sitemap(), react(), tailwind(), astroI18next()],
  output: 'static',
  adapter: vercel({
    analytics: true,
  }),
})
