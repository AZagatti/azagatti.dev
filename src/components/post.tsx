import { formatDate } from '../utils/formatDate'

interface PostProps {
  children: React.ReactNode
  post: Record<string, any>
}

export const Post = ({ children, post }: PostProps) => {
  return (
    <article className="max-w-6xl px-2 md:px-8">
      <div className="max-w-full">
        <h2 className="text-3xl fontbold">{post.title}</h2>
        <p className="text-lg font-normal pb-8 pt-2 text-gray-500 dark:text-gray-300">{`${formatDate(
          new Date(post.pubDate),
          'pt'
        )} — ${post.minutesRead}`}</p>
        <div className="markdown">{children}</div>
      </div>
    </article>
  )
}
