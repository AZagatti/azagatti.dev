import { localizePath } from 'astro-i18next'
import type { CollectionEntry } from 'astro:content'
import i18next from 'i18next'
import { formatDate } from '../utils/formatDate'

interface ArticlesListProps {
  articles: Array<
    CollectionEntry<'blog'> & {
      data: {
        minutesRead: string
      }
    }
  >
}

export const ArticlesList = ({ articles }: ArticlesListProps) => {
  return (
    <div className="grid gap-y-10 gap-x-4 min-h-screen md:max-w-6xl px-4 xl:px-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div key={article.data.title} className="mt-auto h-full">
          <a
            href={localizePath(`/blog/${article.slug}`)}
            className="no-underline flex flex-col h-full hover:opacity-80"
          >
            <img
              src={article.data.heroImage}
              alt={article.data.description}
              width="373"
              height="177"
              className="h-auto object-cover block rounded-md transition-[box-shadow 0.1s]"
            />
            <p className="text-gray-500 dark:text-gray-300 my-2">
              {formatDate(
                new Date(article.data.pubDate),
                i18next.language as 'pt' | 'en'
              )}{' '}
              —{` ${article.data.minutesRead}`}
            </p>
            <h3 className="text-3xl text-start">{article.data.title}</h3>
          </a>
        </div>
      ))}
    </div>
  )
}
