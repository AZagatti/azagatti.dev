import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

interface Data {
  astro: {
    frontmatter: {
      minutesRead: string
    }
  }
}

export function remarkReadingTime() {
  return function (tree: Node, { data }: { data: Data }) {
    const textOnPage = toString(tree, {
      includeImageAlt: false,
    })
    const readingTime = getReadingTime(textOnPage)
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text
  }
}
