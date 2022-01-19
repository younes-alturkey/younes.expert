import { useAppSelector } from '@/src/app'

export function Footer() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    return (
        <footer className="w-full flex justify-center items-center p-4 mb-4 hover:opacity-75">
            <a
                href="https://www.linkedin.com/in/younes-alturkey"
                target="_blank"
                rel="noreferrer"
            >
                <p>
                    {t.yat} &copy; {new Date().getFullYear()}
                </p>
            </a>
        </footer>
    )
}
