import { AiFillPhone } from 'react-icons/ai'
import { EXTERNAL_URLS } from '@/src/config'

export function PhoneLink() {
    return (
        <div
            className={`hidden md:flex bg-gradient text-light hover:opacity-75 rounded-full p-3 fixed bottom-36 left-4 justify-center items-center cursor-pointer shadow-xl`}
        >
            <a
                href={EXTERNAL_URLS.YAT_PHONENUMBER_URL}
                target="_blank"
                rel="noreferrer"
            >
                <AiFillPhone size={24} />
            </a>
        </div>
    )
}
