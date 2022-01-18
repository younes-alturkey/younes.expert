import Link from 'next/link'
import { FiLink2 } from 'react-icons/fi'

export default function CaseStudyCard(props: any) {
    const { img, text, href } = props
    return (
        <div className="bg-lightForeground dark:bg-darkForeground shadow-md w-full rounded-xl flex flex-col md:flex-row justify-between items-center gap-16 py-4 px-8">
            <img
                src={img}
                alt="Company logo"
                draggable={false}
                className="hover:opacity-75"
            />
            <p className="w-full text-justify">{text}</p>
            <Link href={href}>
                <FiLink2
                    size={48}
                    className="text-ored cursor-pointer hover:opacity-75"
                />
            </Link>
        </div>
    )
}
