const pt = {
  1: 'Janeiro',
  2: 'Fevereiro',
  3: 'Março',
  4: 'Abril',
  5: 'Maio',
  6: 'Junho',
  7: 'Julho',
  8: 'Agosto',
  9: 'Setembro',
  10: 'Outubro',
  11: 'Novembro',
  12: 'Dezembro',
}

const en = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
}

const locales = {
  pt,
  en,
}

type Locale = keyof typeof locales

interface FormatReturnDateParams {
  day: number
  month: keyof typeof pt
  year: number
  localeMonth: typeof pt
  locale: Locale
}

const formatReturnDate = ({
  day,
  month,
  year,
  localeMonth,
  locale,
}: FormatReturnDateParams) => {
  if (locale === 'en') {
    return `${localeMonth[month]} ${day}, ${year}`
  }
  return `${day} de ${localeMonth[month].toLowerCase()}, ${year}`
}

export const formatDate = (date: Date, locale: Locale) => {
  const day = date.getDate()
  const month = (date.getMonth() + 1) as keyof typeof pt
  const year = date.getFullYear()
  const localeMonth = locales[locale]
  return formatReturnDate({ day, month, year, localeMonth, locale })
}
