export type PageHead = {
    title?: string
    keywords?: string
    description?: string
    children?: JSX.Element | JSX.Element[]
}

export type Locale = {
    lang: 'ar' | 'en'
    dir: 'rtl' | 'ltr'
    t: AppLocale
}

export type UIState = {
    settings: {
        locale: Locale
        darkMode: boolean
    }
    appInitialized: boolean
}

export type AppLocale = {
    lang: string
    switchLang: string
}
