import Link from 'next/link'
import { BiGlasses } from 'react-icons/bi'
import { MEDIA_URLS } from '@/src/config'

export function ProductCard(props: any) {
    const { title, text, href } = props
    return (
        <div className="flex flex-col justify-center items-center gap-8 p-8 px-5 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <img
                src={MEDIA_URLS.YAT_IMG_URL}
                width={64}
                height={64}
                alt="Younes Alturkey logo"
                className="hover:opacity-75"
                draggable={false}
            />
            <h4 className="text-xl font-bold text-center text-ored bg-light dark:bg-dark py-3 px-6 rounded-xl flex justify-center items-center hover:opacity-75">
                {title}
            </h4>

            <div className="w-72 text-sm text-center">
                <p>{text}</p>
            </div>

            <Link href={href}>
                <BiGlasses
                    size={48}
                    className="text-ored hover:opacity-75 cursor-pointer"
                />
            </Link>
        </div>
    )
}
