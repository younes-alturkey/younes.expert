import { AiOutlineWhatsApp } from 'react-icons/ai'

export function WhatsAppLink() {
    return (
        <div
            className={`bg-gradient text-light hover:opacity-75 rounded-full p-3 fixed bottom-4 left-4 hidden md:flex justify-center items-center cursor-pointer shadow-xl`}
        >
            <a
                href="https://wa.me/966538654514"
                target="_blank"
                rel="noreferrer"
            >
                <AiOutlineWhatsApp size={24} />
            </a>
        </div>
    )
}
