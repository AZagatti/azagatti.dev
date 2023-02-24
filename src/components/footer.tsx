import { GithubIcon } from './icons/github'
import { LinkedinIcon } from './icons/linkedin'
import { TwitterIcon } from './icons/twitter'

export const Footer = () => {
  return (
    <>
      <hr />
      <div className="w-full flex items-center justify-center">
        <div className="max-w-6xl px-8 flex-1">
          <div className="flex gap-8 justify-between">
            <div>
              <h4 className="text-xl mb-8">André Zagatti</h4>
              <p className="text-lg">
                Frontend Software Engineering, specializing in mobile with React
                Native
              </p>
            </div>
            <div className="flex items-start">
              <a
                className="ml-8 text-2xl no-underline"
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/azagatti"
                aria-label="Check my Github"
              >
                <GithubIcon />
              </a>
              <a
                className="ml-8 text-2xl no-underline"
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/andre-zagatti/"
                aria-label="Check my Linkedin"
              >
                <LinkedinIcon />
              </a>
              <a
                className="ml-8 text-2xl no-underline"
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/andre-zagatti/"
                aria-label="Check my Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>
          <p className="mt-16 mb-8 text-base">
            © {new Date().getFullYear()}, André Zagatti
          </p>
        </div>
      </div>
    </>
  )
}
