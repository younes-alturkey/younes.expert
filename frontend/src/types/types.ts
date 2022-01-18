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
    yat: string
    darkTheme: string
    myCV: string
    softwareEngineer: string
    discoverMyWork: string
    notLookingForJobs: string
    quickMsg: string
    overview: string
    overviewText: string
    digitalProducts: string
    discoverMore: string
    details: string
    hungrynuts: string
    hungrynutsOverview: string
    pageNotFound: string
    error404: string
    home: string
    more: string
    caseStudies: string
    albaikCaseStudyText: string
}
