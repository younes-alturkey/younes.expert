import { en, ar } from '@/src/locale'
import { REST, Locale } from '@/src/types'

export function getUpdatedLocale(lang: string): Locale {
    const newLocale = lang
    const newDir = newLocale === 'en' ? 'ltr' : 'rtl'

    const root = window.document.documentElement
    root.lang = newLocale
    root.dir = newDir

    switch (lang) {
        case 'ar':
            return {
                lang: 'ar',
                dir: 'rtl',
                t: ar,
            }
        case 'en':
            return {
                lang: 'en',
                dir: 'ltr',
                t: en,
            }
        default:
            return {
                lang: 'ar',
                dir: 'rtl',
                t: ar,
            }
    }
}

export function getCurrentLocale() {
    const currentSettings = getLocalStorageByKey('settings')
    const { lang } = currentSettings.locale
    switch (lang) {
        case 'ar':
            return {
                lang: 'ar',
                dir: 'rtl',
                t: ar,
            }
        case 'en':
            return {
                lang: 'en',
                dir: 'ltr',
                t: en,
            }
        default:
            return {
                lang: 'ar',
                dir: 'rtl',
                t: ar,
            }
    }
}

export function saveLocalStorage(key: string, data: any): void {
    if (typeof window !== 'undefined')
        localStorage.setItem(key, JSON.stringify(data))
}

export function getLocalStorageByKey(key: string) {
    if (typeof window !== 'undefined')
        return JSON.parse(localStorage.getItem(key)!)
}

export function getAllStorage() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while (i--) {
        values.push(localStorage.getItem(keys[i]))
    }

    return values
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function defaultHeader(reqType: REST, token: string) {
    return {
        method: reqType,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    }
}

export function defaultHeaderWithBody(reqType: REST, token: string, data: any) {
    return {
        method: reqType,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(data),
    }
}
