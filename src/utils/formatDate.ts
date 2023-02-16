const pt = {
  1: 'janeiro',
  2: 'fevereiro',
  3: 'março',
  4: 'abril',
  5: 'maio',
  6: 'junho',
  7: 'julho',
  8: 'agosto',
  9: 'setembro',
  10: 'outubro',
  11: 'novembro',
  12: 'dezembro',
}

const locales = {
  pt,
}

type Locale = 'pt'

export const formatDate = (date: Date, locale: Locale) => {
  const day = date.getDate()
  const month = (date.getMonth() + 1) as keyof typeof pt
  const year = date.getFullYear()
  const localeMonth = locales[locale]
  return `${day} de ${localeMonth[month]}, ${year}`
}
