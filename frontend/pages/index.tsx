import { useAppSelector } from '@/src/app/hooks'
import { YOUNES_IMG_URL } from '@/src/config/index'
import AppLayout from '@/src/layout/AppLayout'
import { useRef } from 'react'
import { BsArrowDown } from 'react-icons/bs'

export default function HomePage() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    const overviewSectionRef = useRef<HTMLElement | null>(null)
    return (
        <AppLayout title={t.yat}>
            <section className={styles.section}>
                <img
                    src={YOUNES_IMG_URL}
                    className={styles.personalPhoto}
                    alt="Younes Alturkey's personal photo"
                    draggable={false}
                />
                <h2 className={styles.sectionTitle}>{t.softwareEngineer}</h2>
                <p className={styles.sectionBodyCentered}>{t.discoverMyWork}</p>
                <div
                    className="flex flex-col justify-center items-center gap-8 rounded-full p-2 bg-gradient cursor-pointer hover:opacity-75 animate-bounce"
                    onClick={() => overviewSectionRef.current?.scrollIntoView()}
                >
                    <BsArrowDown size={32} />
                </div>
            </section>

            <section className={styles.section} ref={overviewSectionRef}>
                <h2 className={styles.sectionTitle}>{t.overview}</h2>
                <p className={styles.sectionBody}>{t.overviewText}</p>
            </section>
        </AppLayout>
    )
}

const styles = {
    section: 'flex flex-col gap-12 justify-center items-center h-screen',
    sectionTitle: 'text-3xl md:text-5xl font-bold',
    sectionBodyCentered: 'leading-loose text-justify md:text-center',
    sectionBody: 'text-justify leading-loose md:w-7/12',
    personalPhoto: 'rounded-full shadow-2xl hover:opacity-75 mb-8',
}
