import { useAppSelector } from '@/src/app/hooks'
import AppLayout from '@/src/layout/AppLayout'
import LinkButton from '@/src/components/LinkButton'

export default function NotFoundPage() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    return (
        <AppLayout title={t.pageNotFound}>
            <section className={styles.section}>
                <h2 className={styles.errorCode}>{t.error404}</h2>
                <h2 className={styles.errorMsg}>{t.pageNotFound}</h2>
                <LinkButton text={t.home} href="/" />
            </section>
        </AppLayout>
    )
}

const styles = {
    section: 'h-70-screen flex flex-col justify-center items-center gap-16',
    errorCode: 'text-gradient text-5xl font-bold',
    errorMsg: 'text-3xl',
}
