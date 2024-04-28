import { BsMedium } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

export function ArticleLinkCard(props: any) {
    const { img, text, medium, linkedin } = props
    return (
        <div className="bg-lightForeground dark:bg-darkForeground shadow-md w-full rounded-xl flex flex-col md:flex-row justify-between items-center gap-16 py-4 px-8">
            <img
                src={img}
                alt="Company logo"
                draggable={false}
                width={44}
                height={44}
                className="hover:opacity-75"
            />
            <p className="w-full text-center lg:text-justify">{text}</p>
            <div className="flex justify-between items-center gap-8 text-ored">
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <FaLinkedinIn
                        size={48}
                        className="hover:opacity-75 cursor-pointer"
                    />
                </a>
                <a href={medium} target="_blank" rel="noreferrer">
                    <BsMedium
                        size={48}
                        className="hover:opacity-75 cursor-pointer"
                    />
                </a>
            </div>
        </div>
    )
}
