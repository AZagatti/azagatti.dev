import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeSlug from 'rehype-slug'
import { remarkReadingTime } from './src/utils/readingTime'

// https://astro.build/config
export default defineConfig({
  site: 'https://azagatti.dev',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
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
  integrations: [mdx(), sitemap(), react()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
})
