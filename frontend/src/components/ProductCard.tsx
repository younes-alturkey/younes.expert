import { LinkButton } from '@/src/components'
import { BiGlasses } from 'react-icons/bi'

export function ProductCard(props: any) {
    const { title, text, href } = props
    return (
        <div className="flex flex-col justify-center items-stretch gap-16 p-8 md:w-96 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <h4 className="text-xl md:text-2xl font-bold text-center">
                {title}
            </h4>
            <p className="text-lg text-center">{text}</p>

            <LinkButton text={<BiGlasses size={36} />} href={href} />
        </div>
    )
}
