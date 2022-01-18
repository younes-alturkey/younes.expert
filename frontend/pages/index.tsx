import { useAppSelector } from '@/src/app/hooks'
import CaseStudyCard from '@/src/components/CaseStudyCard'
import ProductCard from '@/src/components/ProductCard'
import { ALBAIK_IMG_URL, YOUNES_IMG_URL } from '@/src/config/index'
import AppLayout from '@/src/layout/AppLayout'
import { useRef } from 'react'
import { BsArrowDown } from 'react-icons/bs'

export default function HomePage() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    const overviewSectionRef = useRef<HTMLDivElement | null>(null)
    return (
        <AppLayout title={t.yat}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <img
                        src={YOUNES_IMG_URL}
                        className={styles.personalPhoto}
                        alt="Younes Alturkey's personal photo"
                        draggable={false}
                    />
                    <h2 className={styles.sectionTitle}>
                        {t.softwareEngineer}
                    </h2>
                    <p className={styles.sectionBodyCentered}>
                        {t.discoverMyWork}
                    </p>
                    <div
                        className={styles.scrollToBtn}
                        onClick={() =>
                            overviewSectionRef.current?.scrollIntoView()
                        }
                    >
                        <BsArrowDown size={36} />
                    </div>
                </section>

                <section className={styles.section}>
                    <div ref={overviewSectionRef} className="invisible mb-8" />
                    <h2 className={styles.sectionTitle}>{t.overview}</h2>
                    <p className={styles.sectionBody}>{t.overviewText}</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.digitalProducts}</h2>
                    <div className={styles.productsContainer}>
                        <ProductCard
                            title={t.hungrynuts}
                            text={t.hungrynutsOverview}
                            href="/"
                        />

                        <ProductCard
                            title={t.hungrynuts}
                            text={t.hungrynutsOverview}
                            href="/"
                        />

                        <ProductCard
                            title={t.hungrynuts}
                            text={t.hungrynutsOverview}
                            href="/"
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.caseStudies}</h2>
                    <div className={styles.caseStudiesContainer}>
                        <CaseStudyCard
                            img={ALBAIK_IMG_URL}
                            text={t.albaikCaseStudyText}
                            href="/"
                        />

                        <CaseStudyCard
                            img={ALBAIK_IMG_URL}
                            text={t.albaikCaseStudyText}
                            href="/"
                        />

                        <CaseStudyCard
                            img={ALBAIK_IMG_URL}
                            text={t.albaikCaseStudyText}
                            href="/"
                        />
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

const styles = {
    container: 'flex flex-col justify-center items-center gap-32 mb-64',
    section: 'w-full flex flex-col gap-12 justify-center items-center',
    sectionTitle: 'text-3xl md:text-5xl font-bold mb-4',
    sectionBodyCentered: 'leading-loose text-justify md:text-center',
    sectionBody: 'text-justify leading-loose md:w-7/12',
    personalPhoto: 'rounded-full shadow-2xl hover:opacity-75 mb-8',
    scrollToBtn:
        'flex flex-col justify-center items-center gap-8 rounded-full p-2 bg-gradient text-light cursor-pointer hover:opacity-75 animate-bounce',
    productsContainer:
        'flex flex-col md:flex-row flex-wrap justify-between items-center gap-20',
    caseStudiesContainer:
        'w-full flex flex-col justify-center items-center gap-20 md:gap-8 md:px-20',
}
