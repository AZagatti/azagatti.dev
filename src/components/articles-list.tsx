import type { CollectionEntry } from 'astro:content'
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
    <div className="grid gap-y-16 gap-x-4 min-h-screen m-4 max-w-6xl px-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div key={article.data.title} className="mt-auto h-full">
          <a
            href={`/blog/${article.slug}`}
            className="no-underline flex flex-col justify-between h-full hover:opacity-80"
          >
            <div>
              <h3 className="text-3xl text-start mb-2">{article.data.title}</h3>
            </div>
            <div>
              <p className="text-gray-500 mb-4 dark:text-gray-300">
                {formatDate(new Date(article.data.pubDate), 'pt')} —
                {` ${article.data.minutesRead}`}
              </p>
              <img
                src={`${article.data.heroImage}`}
                alt={article.data.description}
                className="w-full h-52 object-cover rounded-md transition-[box-shadow 0.1s]"
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  )
}
