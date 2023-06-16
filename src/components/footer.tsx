import { useTranslation } from 'react-i18next'

import { GithubIcon } from './icons/github'
import { LinkedinIcon } from './icons/linkedin'
import { TwitterIcon } from './icons/twitter'
import { YoutubeIcon } from './icons/youtube'
import { InstagramIcon } from './icons/instagram'

export const Footer = () => {
  const { t, i18n } = useTranslation()

  return (
    <>
      <hr className="my-8" />

      <div className="w-full flex items-center justify-center">
        <div className="md:max-w-6xl px-4 xl:px-0 flex-1">
          {i18n.language !== 'en' ? (
            <div className="flex gap-8 justify-between flex-col md:flex-row mb-4">
              <div className="flex-1">
                <form
                  klicksend-form-id="aauBz57"
                  method="post"
                  action="//handler.klicksend.com.br/subscription/aauBz57"
                >
                  <h2 className="mb-2 text-lg font-bold">
                    Se inscreva para novidades:
                  </h2>
                  <input
                    className="mb-2 p-2 rounded-md border-[1px] border-gray-600 dark:border-gray-100 w-full md:w-80"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <div klicksend-gdpr-text="">
                    <p className="text-xs">
                      Para mais informações, acesse:
                      <a
                        href="https://klickpages.com.br/politica-de-privacidade/"
                        target="_blank"
                        rel="noopener"
                        className="ml-1 dark:text-blue-400 text-blue-800"
                      >
                        Política de Privacidade
                      </a>
                    </p>
                  </div>
                  <div>
                    <div className="mt-2 mb-4">
                      <input
                        type="checkbox"
                        name="gdpr"
                        id="gdpr"
                        placeholder="Concordo em receber os e-mails"
                        defaultValue="Concordo em receber os e-mails"
                        required
                      />
                      <label
                        htmlFor="gdpr"
                        className="dark:text-gray-200 text-gray-900 ml-2"
                      >
                        Concordo em receber os e-mails
                      </label>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        left: -5000,
                      }}
                      aria-hidden
                    >
                      <input type="text" name="b_aauBz57" tabIndex={-1} />
                    </div>
                  </div>
                  <button className="py-2 px-8 bg-gray-800 dark:bg-gray-100 rounded-md text-gray-200 dark:text-gray-900 hover:opacity-90 transition-opacity">
                    Enviar
                  </button>
                </form>
              </div>
              <div className="flex-1 flex md:justify-end">
                <div>
                  <img
                    src="/img/logo.png"
                    alt="A. Zagatti Logo"
                    width="200"
                    height="56"
                  />
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex gap-8 justify-between flex-col md:flex-row">
            <div className="flex-1">
              <h4 className="text-xl mb-8">{t('name')}</h4>
              <p className="text-lg">{t('footer.description')}</p>
            </div>
            <div className="flex-1">
              <div className=" flex md:justify-end">
                <a
                  className="md:ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/azagatti"
                  aria-label={t('footer.aria.github')!}
                >
                  <GithubIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/in/andre-zagatti/"
                  aria-label={t('footer.aria.linkedin')!}
                >
                  <LinkedinIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://twitter.com/andre_zagatti/"
                  aria-label={t('footer.aria.twitter')!}
                >
                  <TwitterIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/@AZagatti"
                  aria-label={t('footer.aria.youtube')!}
                >
                  <YoutubeIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/reactwayjs"
                  aria-label={t('footer.aria.instagram')!}
                >
                  <InstagramIcon />
                </a>
              </div>
              {i18n.language !== 'pt' ? (
                <div className="flex md:justify-end mt-4">
                  <img
                    src="/img/logo.png"
                    alt="A. Zagatti Logo"
                    width="200"
                    height="56"
                  />
                </div>
              ) : null}
            </div>
          </div>
          <p className="mt-16 mb-8 text-base">
            {t('footer.year', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </>
  )
}
