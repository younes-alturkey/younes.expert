import LinkButton from '@/src/components/LinkButton'
import { useAppSelector } from '@/src/app/hooks'

export default function ProductCard(props: any) {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    const { title, text, href } = props
    return (
        <div className="flex flex-col justify-center items-stretch gap-16 p-8 md:w-96 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <h4 className="text-xl md:text-2xl font-bold text-center">
                {title}
            </h4>
            <p className="text-lg text-center">{text}</p>

            <LinkButton text={t.details} href={href} />
        </div>
    )
}
