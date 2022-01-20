import { useRef } from 'react'
import {
    BsArrowDown,
    BsFillPhoneFill,
    BsStack,
    BsFillPeopleFill,
} from 'react-icons/bs'
import {
    ArticleLinkCard,
    ProductCard,
    CertCard,
    SkillCard,
    Button,
} from '@/src/components'
import { AppLayout } from '@/src/layout'
import { MEDIA_URLS } from '@/src/config'
import { useAppSelector } from '@/src/app'
import { FaCode, FaDatabase } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { SiHiveBlockchain } from 'react-icons/si'

export default function HomePage() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    const overviewSectionRef = useRef<HTMLDivElement | null>(null)
    return (
        <AppLayout title={t.yat}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <img
                        src={MEDIA_URLS.YOUNES_IMG_URL}
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

                <section className={styles.section} ref={overviewSectionRef}>
                    <h2 className={styles.sectionTitle}>{t.overview}</h2>
                    <p className={styles.sectionBody}>{t.overviewText}</p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        {t.certsAndAchieves}
                    </h2>
                    <div className={styles.cardRowContainer}>
                        <CertCard
                            img={MEDIA_URLS.KAU_IMG_URL}
                            document={MEDIA_URLS.BSC_PDF_URL}
                            text={t.bsc + ' — ' + t.gpaScore}
                        />

                        <CertCard
                            img={MEDIA_URLS.SAFCSP_IMG_URL}
                            document={MEDIA_URLS.BSC_PDF_URL}
                            text={t.tuwaiqGraduated}
                        />

                        <CertCard
                            img={MEDIA_URLS.IELTS_IMG_URL}
                            document={MEDIA_URLS.IELTS_PDF_URL}
                            text={t.ieltBandScore}
                        />
                        <CertCard
                            img={MEDIA_URLS.CSM_IMG_URL}
                            document={MEDIA_URLS.CV_PDF_URL}
                            text={t.certified}
                        />
                        <CertCard
                            img={MEDIA_URLS.ACSM_IMG_URL}
                            document={MEDIA_URLS.CV_PDF_URL}
                            text={t.certified}
                        />
                        <CertCard
                            img={MEDIA_URLS.CSPSM_IMG_URL}
                            document={MEDIA_URLS.CV_PDF_URL}
                            text={t.certified}
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.digitalProducts}</h2>
                    <div className={styles.cardRowContainer}>
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
                        <ProductCard
                            title={t.hungrynuts}
                            text={t.hungrynutsOverview}
                            href="/"
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>
                        {t.technicalSpecialties}
                    </h2>
                    <div className={styles.cardRowContainer}>
                        <SkillCard
                            title={t.fullStackWeb}
                            icon={
                                <BsStack
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />

                        <SkillCard
                            title={t.fullStackMobile}
                            icon={
                                <BsFillPhoneFill
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />

                        <SkillCard
                            title={t.backgroundDev}
                            icon={
                                <FaDatabase
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />

                        <SkillCard
                            title={t.uiDev}
                            icon={
                                <FaCode
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />

                        <SkillCard
                            title={t.uiuxDesign}
                            icon={
                                <GiPencilBrush
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />

                        <SkillCard
                            title={t.projectMgmt}
                            icon={
                                <BsFillPeopleFill
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />

                        <SkillCard
                            title={t.blockchain}
                            icon={
                                <SiHiveBlockchain
                                    size={64}
                                    className="text-ored hover:opacity-75"
                                />
                            }
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.techArticles}</h2>
                    <div className={styles.cardColContainer}>
                        <ArticleLinkCard
                            img={MEDIA_URLS.ALBAIK_IMG_URL}
                            text={t.albaikCaseStudyText}
                            medium="/"
                            linkedin="/"
                        />

                        <ArticleLinkCard
                            img={MEDIA_URLS.ALBAIK_IMG_URL}
                            text={t.albaikCaseStudyText}
                            medium="/"
                            linkedin="/"
                        />

                        <ArticleLinkCard
                            img={MEDIA_URLS.ALBAIK_IMG_URL}
                            text={t.albaikCaseStudyText}
                            medium="/"
                            linkedin="/"
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.workWithMe}</h2>
                    <div className="bg-lightForeground dark:bg-darkForeground shadow-md w-full rounded-xl flex flex-col xl:flex-row justify-between items-center gap-8 p-8">
                        <h2 className="text-3xl text-center">{t.myValues}</h2>
                        <Button text={t.msgMe} />
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

const styles = {
    container: 'flex flex-col justify-center items-center gap-52 mb-32',
    section: 'w-full flex flex-col gap-12 justify-center items-center',
    cardRowContainer:
        'w-full flex flex-col md:flex-row flex-wrap justify-center xl:justify-start items-center gap-12',
    cardColContainer: 'w-full flex flex-col justify-center items-center gap-12',
    sectionTitle: 'text-2xl xl:text-5xl font-bold mb-8',
    sectionBodyCentered: 'leading-loose text-justify xl:text-center',
    sectionBody: 'text-justify leading-loose lg:w-8/12',
    personalPhoto: 'rounded-full shadow-2xl hover:opacity-75 mb-8',
    scrollToBtn:
        'flex flex-col justify-center items-center gap-8 rounded-full p-2 bg-gradient text-light cursor-pointer hover:opacity-75 animate-bounce',
}
