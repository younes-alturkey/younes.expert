import { useAppSelector } from '@/src/app'

export function CertCard(props: any) {
    const { img, document } = props
    const { t } = useAppSelector(state => state.ui.settings.locale)
    return (
        <div className="flex flex-col justify-between items-center gap-8 p-8 w-80 rounded-xl shadow-md bg-lightForeground dark:bg-darkForeground">
            <img
                src={img}
                className="hover:opacity-75"
                alt="Certification official logo"
                width={160}
                height={160}
                draggable={false}
            />
            <div className="w-full text-success font-bold bg-light dark:bg-dark p-3 rounded-xl flex justify-center items-center hover:opacity-75 cursor-pointer">
                <a href={document} target="_blank" rel="noreferrer">
                    <p>{t.certified}</p>
                </a>
            </div>
        </div>
    )
}
