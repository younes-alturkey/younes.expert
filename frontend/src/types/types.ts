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
    techArticles: string
    importanceOfUxUi: string
    linkedIn: string
    medium: string
    lawsOfUX10: string
    buildingLocalClones: string
    certsAndAchieves: string
    certified: string
    technicalSpecialties: string
    fullStackWeb: string
    fullStackMobile: string
    backgroundDev: string
    uiDev: string
    uiuxDesign: string
    projectMgmt: string
    blockchain: string
    workWithMe: string
    myValues: string
    msgMe: string
    graduatedBsc: string
    ieltBandScore: string
    gpaScore: string
    honors: string
    bsc: string
    tuwaiqGraduated: string
    email: string
    phoneNumber: string
    bitchunkTitle: string
    bitchunkText: string
    back: string
    csSpecialist: string
    spaceShooterTitle: string
    spaceShooterText: string
    nahdiInTitle: string
    nahdiInText: string
    nahdiMobileTitle: string
    nahdiMobileText: string
    soudahATSTitle: string
    soudahATSText: string
    techStack: string
    ts: string
    adobexd: string
    apache: string
    cpanel: string
    csharp: string
    css: string
    html: string
    dotnet: string
    figma: string
    nextjs: string
    nginx: string
    node: string
    react: string
    reactNative: string
    tailwindcss: string
    wordpress: string
    redux: string
    electron: string
    git: string
    azuredevops: string
    azure: string
    mongodb: string
    mysql: string
    postgres: string
    postman: string
    solidity: string
    sqlite: string
    websockets: string
    js: string
    becomingWorldClass: string
}
