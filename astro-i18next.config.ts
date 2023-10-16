const config = {
  defaultLocale: 'pt',
  locales: ['pt', 'en'],
  load: ['server', 'client'],
  i18nextServerPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
  i18nextClientPlugins: {
    '{initReactI18next}': 'react-i18next',
  },
}

export default config
