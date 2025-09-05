import type { PropsWithChildren } from 'react'

interface HeaderProps {
  name: string
  currentLocale: 'pt' | 'en'
}

export const Header = ({
  children,
  name,
  currentLocale,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <>
      <div className="items-center justify-center w-full pt-8">
        <nav className="flex md:max-w-6xl px-4 xl:px-0 justify-between items-center flex-1 mx-auto">
          <h2 className="text-3xl">
            <a
              href={
                currentLocale === 'pt' ? '/blog' : `/${currentLocale}/blog`
              }
              className="no-underline hover:opacity-70"
            >
              {name}
            </a>
          </h2>
          <div className="flex items-center">{children}</div>
        </nav>
      </div>
      <hr className="my-8" />
    </>
  )
}
