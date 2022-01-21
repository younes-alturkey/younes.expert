import { HiOutlineMail } from 'react-icons/hi'
import { useAppSelector } from '@/src/app'
import { EXTERNAL_URLS } from '@/src/config'

export function EmailLink() {
    const { dir } = useAppSelector(state => state.ui.settings.locale)
    return (
        <div
            className={`hidden md:block bg-gradient text-light shadow-md hover:opacity-75 rounded-full p-3 fixed bottom-20 ${
                dir === 'rtl' ? 'right-4' : 'left-4'
            } flex justify-center items-center cursor-pointer shadow-xl`}
        >
            <a
                href={EXTERNAL_URLS.YAT_EMAIL_URL}
                target="_blank"
                rel="noreferrer"
            >
                <HiOutlineMail size={24} />
            </a>
        </div>
    )
}
