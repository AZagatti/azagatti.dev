import { formatDate } from '../utils/formatDate'

interface PostProps {
  children: React.ReactNode
  post: Record<string, any>
  currentLocale: 'pt' | 'en'
}

export const Post = ({ children, post, currentLocale }: PostProps) => {
  return (
    <article className="max-w-full md:max-w-6xl px-4 xl:px-0">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-base font-normal pb-8 pt-2 text-gray-500 dark:text-gray-300">{`${formatDate(
        new Date(post.pubDate),
        currentLocale
      )} — ${post.minutesRead}`}</p>
      <div className="markdown md:max-w-4xl">{children}</div>
    </article>
  )
}
