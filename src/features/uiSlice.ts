import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ar, en } from 'locale'
import {
    getLocalStorageByKey,
    getUpdatedLocale,
    saveLocalStorage,
} from 'helpers'
import { UIState } from 'types'

const initialState: UIState = {
    settings: {
        locale: {
            lang: 'en',
            dir: 'ltr',
            t: en,
        },
        darkMode: true,
    },
    appInitialized: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLocale: (state, action) => {
            const lang = action.payload as string
            state.settings.locale = getUpdatedLocale(lang)
            const settingsToSave = {
                ...state.settings,
                locale: {
                    lang: state.settings.locale.lang,
                    dir: state.settings.locale.dir,
                },
            }
            saveLocalStorage('settings', settingsToSave)
        },
        toggleDarkMode: state => {
            const root = window.document.documentElement
            state.settings.darkMode = !state.settings.darkMode

            if (state.settings.darkMode) {
                root.classList.remove('light')
                root.classList.add('dark')
            } else {
                root.classList.remove('dark')
                root.classList.add('light')
            }

            const settingsToSave = {
                ...state.settings,
                locale: {
                    lang: state.settings.locale.lang,
                    dir: state.settings.locale.dir,
                },
            }
            saveLocalStorage('settings', settingsToSave)
        },
    },
    extraReducers: builder => {
        // Init app
        builder.addCase(initApp.fulfilled, (state, action) => {
            const { settings } = action.payload

            if (settings) {
                const { locale, darkMode } = settings
                const { lang } = locale
                const isAr = lang === 'ar'
                const t = isAr ? ar : en

                const root = window.document.documentElement
                root.lang = isAr ? 'ar' : 'en'
                root.dir = isAr ? 'rtl' : 'ltr'

                if (darkMode) {
                    root.classList.remove('light')
                    root.classList.add('dark')
                } else {
                    root.classList.remove('dark')
                    root.classList.add('light')
                }

                state.settings = {
                    ...settings,
                    locale: {
                        ...locale,
                        t,
                    },
                }
            } else {
                const root = window.document.documentElement
                root.lang = state.settings.locale.lang
                root.dir = state.settings.locale.dir

                root.classList.remove('light')
                root.classList.add('dark')
            }

            state.appInitialized = true
        })
    },
})

export const { setLocale, toggleDarkMode } = uiSlice.actions

export default uiSlice.reducer

export const initApp = createAsyncThunk('ui/initApp', async () => {
    const settings = getLocalStorageByKey('settings')
    return {
        settings,
    }
})
