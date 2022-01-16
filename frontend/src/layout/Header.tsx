import { useAppDispatch, useAppSelector } from '@/src/app/hooks'
import Toggle from '@/src/components/Toggle'
import { BiGlobe } from 'react-icons/bi'
import { toggleDarkMode, setLocale } from '@/src/features/uiSlice'
import { CV_PDF_URL } from '@/src/config/index'

export default function Header() {
    const disaptch = useAppDispatch()
    const { t, lang } = useAppSelector(state => state.ui.settings.locale)
    return (
        <header className="sticky top-0 left-0 shadow-md dark:shadow-2xl z-999">
            <nav className="flex justify-between items-center p-4">
                <div
                    className="flex justify-center items-center gap-4 cursor-pointer select-none hover:opacity-75"
                    onClick={() => disaptch(toggleDarkMode())}
                >
                    <Toggle />
                    <p className="hidden md:block">{t.darkTheme}</p>
                </div>
                <div className="text-xl md:text-2xl text-gradient font-bold cursor-pointer select-none hover:opacity-75">
                    <a href={CV_PDF_URL} target="_blank" rel="noreferrer">
                        {t.myCV}
                    </a>
                </div>
                <div
                    className="flex justify-center items-center gap-4 cursor-pointer select-none hover:opacity-75"
                    onClick={() =>
                        disaptch(setLocale(lang === 'ar' ? 'en' : 'ar'))
                    }
                >
                    <BiGlobe
                        className={`${lang === 'en' && 'text-ored'}`}
                        size={32}
                    />
                    <p className="hidden md:block">{t.yat}</p>
                </div>
            </nav>
        </header>
    )
}
