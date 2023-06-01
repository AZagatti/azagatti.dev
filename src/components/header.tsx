import { localizePath } from 'astro-i18next'
import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'

export const Header = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="items-center justify-center w-full pt-8">
        <nav className="flex md:max-w-6xl px-4 xl:px-0 justify-between items-center flex-1 mx-auto">
          <h2 className="text-3xl">
            <a
              href={localizePath('/blog')}
              className="no-underline hover:opacity-70"
            >
              {t('name')}
            </a>
          </h2>
          <div className="flex">{children}</div>
        </nav>
      </div>
      <hr className="my-8" />
    </>
  )
}
