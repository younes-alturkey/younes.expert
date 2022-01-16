import { useAppSelector } from '@/src/app/hooks'
import Button from '@/src/components/Button'
import AppLayout from '@/src/layout/AppLayout'

export default function HomePage() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    return (
        <AppLayout title={t.yat}>
            <div className="flex flex-col gap-8 justify-center items-center h-screen">
                <h1 className="text-4xl">{t.softwareEngineer}</h1>
                <h4 className="text-xl">{t.discoverMyWork}</h4>
                <div className="flex flex-col justify-center items-center gap-8 mt-12">
                    <Button text={t.quickMsg} />
                    <p className="text-sm opacity-50">{t.notLookingForJobs}</p>
                </div>
            </div>
        </AppLayout>
    )
}
