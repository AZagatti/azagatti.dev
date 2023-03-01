import { formatDate } from '../utils/formatDate'

interface PostProps {
  children: React.ReactNode
  post: Record<string, any>
}

export const Post = ({ children, post }: PostProps) => {
  return (
    <article className="max-w-full md:max-w-6xl px-4">
      <h2 className="text-3xl fontbold">{post.title}</h2>
      <p className="text-lg font-normal pb-8 pt-2 text-gray-500 dark:text-gray-300">{`${formatDate(
        new Date(post.pubDate),
        'pt'
      )} — ${post.minutesRead}`}</p>
      <div className="markdown">{children}</div>
    </article>
  )
}
