import { AiFillLinkedin } from 'react-icons/ai'
import { useAppSelector } from '@/src/app'

export function LinkedInLink() {
    const { dir } = useAppSelector(state => state.ui.settings.locale)
    return (
        <div
            className={`hidden md:block bg-gradient text-light shadow-md hover:opacity-75 rounded-full p-3 fixed bottom-20 ${
                dir === 'rtl' ? 'right-4' : 'left-4'
            } flex justify-center items-center cursor-pointer shadow-xl`}
        >
            <a
                href="https://www.linkedin.com/in/younes-alturkey"
                target="_blank"
                rel="noreferrer"
            >
                <AiFillLinkedin size={24} />
            </a>
        </div>
    )
}
