import { useAppSelector } from '@/src/app/hooks'
import AppLayout from '@/src/layout/AppLayout'

export default function HomePage() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    return (
        <AppLayout title={t.yat}>
            <h2>{t.yat}</h2>
        </AppLayout>
    )
}
