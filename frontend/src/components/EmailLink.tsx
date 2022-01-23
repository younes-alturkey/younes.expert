import { HiOutlineMail } from 'react-icons/hi'
import { EXTERNAL_URLS } from '@/src/config'

export function EmailLink() {
    return (
        <div
            className={`hidden md:flex bg-gradient text-light hover:opacity-75 rounded-full p-3 fixed bottom-20 left-4 justify-center items-center cursor-pointer shadow-xl`}
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
