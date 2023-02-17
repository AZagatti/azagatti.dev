import { formatDate } from '../utils/formatDate'

interface PostProps {
  children: React.ReactNode
  post: Record<string, any>
}

export const Post = ({ children, post }: PostProps) => {
  return (
    <main className="max-w-6xl px-8">
      <div className="max-w-full">
        <h2 className="text-3xl fontbold">{post.title}</h2>
        <h4 className="text-lg font-normal pb-8 pt-2">{`${formatDate(
          new Date(post.pubDate),
          'pt'
        )} — ${post.minutesRead}`}</h4>
        <div className="markdown">{children}</div>
      </div>
    </main>
  )
}
