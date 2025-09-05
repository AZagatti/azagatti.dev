/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />
import 'astro'

type SupportedLocale = 'pt' | 'en'

declare module 'astro' {
  interface AstroGlobal {
    readonly currentLocale: SupportedLocale
  }
}
