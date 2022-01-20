import { FaLinkedinIn } from 'react-icons/fa'
import { BsMedium } from 'react-icons/bs'
import Link from 'next/link'

export function ArticleLinkCard(props: any) {
    const { img, text, medium, linkedin } = props
    return (
        <div className="bg-lightForeground dark:bg-darkForeground shadow-md w-full rounded-xl flex flex-col md:flex-row justify-between items-center gap-16 py-4 px-8">
            <img
                src={img}
                alt="Company logo"
                draggable={false}
                className="hover:opacity-75"
            />
            <p className="w-full text-justify">{text}</p>
            <div className="flex justify-between items-center gap-8 text-ored">
                <Link href={linkedin}>
                    <FaLinkedinIn
                        size={32}
                        className="hover:opacity-75 cursor-pointer"
                    />
                </Link>
                <Link href={medium}>
                    <BsMedium
                        size={32}
                        className="hover:opacity-75 cursor-pointer"
                    />
                </Link>
            </div>
        </div>
    )
}
