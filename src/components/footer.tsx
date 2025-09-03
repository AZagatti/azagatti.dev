import { GithubIcon } from './icons/github'
import { LinkedinIcon } from './icons/linkedin'
import { TwitterIcon } from './icons/twitter'
import { YoutubeIcon } from './icons/youtube'
import { InstagramIcon } from './icons/instagram'

interface FooterProps {
  translations: {
    name: string
    'footer.description': string
    'footer.aria.github': string
    'footer.aria.linkedin': string
    'footer.aria.twitter': string
    'footer.aria.youtube': string
    'footer.aria.instagram': string
    'footer.year': string
  }
}

export const Footer = ({ translations }: FooterProps) => {
  return (
    <>
      <hr className="my-8" />

      <div className="w-full flex items-center justify-center">
        <div className="md:max-w-6xl px-4 xl:px-0 flex-1">
          <div className="flex gap-8 justify-between flex-col md:flex-row">
            <div className="flex-1">
              <h4 className="text-xl mb-8">{translations.name}</h4>
              <p className="text-lg">{translations['footer.description']}</p>
            </div>
            <div className="flex-1">
              <div className=" flex md:justify-end">
                <a
                  className="md:ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://github.com/azagatti"
                  aria-label={translations['footer.aria.github']}
                >
                  <GithubIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/in/andre-zagatti/"
                  aria-label={translations['footer.aria.linkedin']}
                >
                  <LinkedinIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://twitter.com/andre_zagatti/"
                  aria-label={translations['footer.aria.twitter']}
                >
                  <TwitterIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.youtube.com/@AZagatti"
                  aria-label={translations['footer.aria.youtube']}
                >
                  <YoutubeIcon />
                </a>
                <a
                  className="ml-8 text-2xl no-underline"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://www.instagram.com/reactwayjs"
                  aria-label={translations['footer.aria.instagram']}
                >
                  <InstagramIcon />
                </a>
              </div>
              <div className="flex md:justify-end mt-4">
                <img
                  src="/img/logo.png"
                  alt="A. Zagatti Logo"
                  width="200"
                  height="56"
                />
              </div>
            </div>
          </div>
          <p className="mt-16 mb-8 text-base">
            {translations['footer.year'].replace(
              '{{year}}',
              new Date().getFullYear().toString()
            )}
          </p>
        </div>
      </div>
    </>
  )
}
