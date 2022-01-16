import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useAppSelector } from '../app/hooks'

export default function WhatsAppLink() {
    const { dir } = useAppSelector(state => state.ui.settings.locale)
    return (
        <div
            className={`bg-gradient text-light hover:opacity-75 rounded-full p-3 fixed bottom-4 ${
                dir === 'rtl' ? 'right-4' : 'left-4'
            } flex justify-center items-center cursor-pointer shadow-xl`}
        >
            <a
                href="https://wa.me/966538654514"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineWhatsApp size={36} />
            </a>
        </div>
    )
}
