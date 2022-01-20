import { useAppDispatch, useAppSelector } from '@/src/app'
import { Toggle } from '@/src/components'
import { BiGlobe } from 'react-icons/bi'
import { MEDIA_URLS } from '@/src/config'
import { toggleDarkMode, setLocale } from '@/src/features'

export function Header() {
    const disaptch = useAppDispatch()
    const { t, lang } = useAppSelector(state => state.ui.settings.locale)
    return (
        <header className="w-full sticky top-0 left-0 shadow-md border-b dark:border-gray-900 z-999 bg-light dark:bg-dark">
            <nav className="flex justify-between items-center p-4">
                <div
                    className="flex justify-center items-center gap-4 cursor-pointer select-none hover:opacity-75"
                    onClick={() => disaptch(toggleDarkMode())}
                >
                    <Toggle />
                    <p className="hidden md:block">{t.darkTheme}</p>
                </div>
                <div className="text-xl md:text-2xl text-gradient font-bold cursor-pointer select-none hover:opacity-75">
                    <a
                        href={MEDIA_URLS.CV_PDF_URL}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {t.yat}
                    </a>
                </div>
                <div
                    className="flex justify-center items-center gap-4 cursor-pointer select-none hover:opacity-75"
                    onClick={() =>
                        disaptch(setLocale(lang === 'ar' ? 'en' : 'ar'))
                    }
                >
                    <p className="hidden md:block">{t.switchLang}</p>
                    <BiGlobe
                        className={`${lang === 'en' && 'text-ored'}`}
                        size={32}
                    />
                </div>
            </nav>
        </header>
    )
}
