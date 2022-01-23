import { AiFillLinkedin } from 'react-icons/ai'

export function LinkedInLink() {
    return (
        <div
            className={`hidden md:flex bg-gradient text-light hover:opacity-75 rounded-full p-3 fixed bottom-20 left-4 justify-center items-center cursor-pointer shadow-xl`}
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
