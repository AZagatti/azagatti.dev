import type { PropsWithChildren } from 'react'

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="items-center justify-center w-full pt-8">
        <nav className="flex max-w-6xl px-2 md:px-8 justify-between items-center flex-1 mx-auto">
          <h2 className="text-3xl">
            <a href="/blog" className="no-underline hover:opacity-70">
              André Zagatti
            </a>
          </h2>
          {children}
        </nav>
      </div>
      <hr />
    </>
  )
}
