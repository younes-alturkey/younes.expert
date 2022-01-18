import { AiFillPhone } from 'react-icons/ai'
import { useAppSelector } from '@/src/app/hooks'

export default function PhoneLink() {
    const { dir } = useAppSelector(state => state.ui.settings.locale)
    return (
        <div
            className={`bg-gradient text-light shadow-md hover:opacity-75 rounded-full p-3 fixed bottom-4 md:bottom-52 ${
                dir === 'rtl' ? 'right-4' : 'left-4'
            } flex justify-center items-center cursor-pointer shadow-xl`}
        >
            <a href="tel:+966538654514" target="_blank" rel="noreferrer">
                <AiFillPhone size={24} />
            </a>
        </div>
    )
}
