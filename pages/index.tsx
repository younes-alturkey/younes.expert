import { useRef } from 'react'
import {
    BsArrowDown,
    BsFillPhoneFill,
    BsStack,
    BsFillPeopleFill,
} from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import {
    ProductCard,
    CertCard,
    SkillCard,
    ArticleLinkCard,
} from '@/src/components'
import { AppLayout } from '@/src/layout'
import { ARTICLES_URLS, EXTERNAL_URLS, MEDIA_URLS } from 'config'
import { useAppSelector } from '@/src/app'
import { FaCode, FaDatabase } from 'react-icons/fa'
import { GiPencilBrush } from 'react-icons/gi'
import { SiHiveBlockchain } from 'react-icons/si'
import { TechCard } from '@/src/components/TechCard'

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
                            alt="KAU_IMG_URL"
                            img={MEDIA_URLS.KAU_IMG_URL}
                            document={MEDIA_URLS.BSC_PDF_URL}
                            text={t.bsc + ' — ' + t.gpaScore}
                        />
                        <CertCard
                            alt="SAFCSP_IMG_URL"
                            img={MEDIA_URLS.SAFCSP_IMG_URL}
                            document={MEDIA_URLS.TUWAIQ_PDF_URL}
                            text={t.fullstackDotNet}
                        />
                        <CertCard
                            alt="SCE_IMG_URL"
                            img={MEDIA_URLS.SCE_IMG_URL}
                            document={MEDIA_URLS.SCE_PDF_URL}
                            text={t.csSpecialist}
                        />
                        <CertCard
                            alt="IELTS IMG URL"
                            img={MEDIA_URLS.IELTS_IMG_URL}
                            document={MEDIA_URLS.IELTS_PDF_URL}
                            text={t.ieltBandScore}
                        />
                        <CertCard
                            alt="SA-CSD IMG URL"
                            img={MEDIA_URLS.SA_CSD_IMG_URL}
                            document={MEDIA_URLS.SA_CSD_PDF_URL}
                            text={t.sa_csd}
                        />
                        <CertCard
                            alt="SCALED AGILE TEAMS IMG URL"
                            img={MEDIA_URLS.SAFE_PRACTITIONER_IMG_URL}
                            document={MEDIA_URLS.SAFE_PRACTITIONER_PDF_URL}
                            text={t.safe_practitioner}
                        />
                        <CertCard
                            alt="SCALED AGILE SCRUM Master IMG URL"
                            img={MEDIA_URLS.SAFE_SM_IMG_URL}
                            document={MEDIA_URLS.SAFE_SM_PDF_URL}
                            text={t.safe_sm}
                        />
                        <CertCard
                            alt="CSD_IMG_URL"
                            img={MEDIA_URLS.CSD_IMG_URL}
                            document={MEDIA_URLS.CSD_PDF_URL}
                            text={t.csd}
                        />
                        <CertCard
                            alt="KAU_IMG_URL"
                            img={MEDIA_URLS.KAU_IMG_URL}
                            document={MEDIA_URLS.BEST_CODE_PDF_URL}
                            text={t.bestCode}
                        />
                        <CertCard
                            alt="KAU_IMG_URL"
                            img={MEDIA_URLS.KAU_IMG_URL}
                            document={MEDIA_URLS.VIJEY_LETTER_PDF_URL}
                            text={t.recommendationLetter}
                        />
                        <CertCard
                            alt="KAU_IMG_URL"
                            img={MEDIA_URLS.KAU_IMG_URL}
                            document={MEDIA_URLS.ASIF_LETTER_PDF_URL}
                            text={t.recommendationLetter}
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.digitalProducts}</h2>
                    <div className={styles.cardRowContainer}>
                        <ProductCard
                            title={t.bitchunkTitle}
                            text={t.bitchunkText}
                            code={EXTERNAL_URLS.BITCHUNK_GITHUB_URL}
                            link={EXTERNAL_URLS.BITCHUNK_URL}
                        />

                        <ProductCard
                            title={t.spaceShooterTitle}
                            text={t.spaceShooterText}
                            code={EXTERNAL_URLS.SPACESHOOTER_GITHUB_URL}
                            link={EXTERNAL_URLS.SPACESHOOTER_URL}
                        />

                        <ProductCard
                            title={t.nahdiInTitle}
                            text={t.nahdiInText}
                            code={EXTERNAL_URLS.NAHDIIN_GITHUB_URL}
                            link={EXTERNAL_URLS.NAHDIIN_URL}
                        />
                        <ProductCard
                            title={t.nahdiMobileTitle}
                            text={t.nahdiMobileText}
                            code={EXTERNAL_URLS.NAHDIMOBILE_GITHUB_URL}
                            link={EXTERNAL_URLS.NAHDIMOBILE_URL}
                        />
                        <ProductCard
                            title={t.soudahATSTitle}
                            text={t.soudahATSText}
                            code={EXTERNAL_URLS.SOUDAHATS_GITHUB_URL}
                            link={EXTERNAL_URLS.SOUDAHATS_URL}
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.techArticles}</h2>
                    <div className={styles.cardColContainer}>
                        <ArticleLinkCard
                            img={MEDIA_URLS.YAT_IMG_URL}
                            text={t.becomingWorldClass}
                            linkedin={
                                ARTICLES_URLS.BECOMINGWORLDCLASS_LINKEDIN_URL
                            }
                            medium={
                                ARTICLES_URLS.BECOMINGWORLDCLASS_LINKEDIN_URL
                            }
                        />
                        <ArticleLinkCard
                            img={MEDIA_URLS.YAT_IMG_URL}
                            text={t.lawsOfUX10}
                            medium={ARTICLES_URLS.LAWSOFUX10_MEDIUM_URL}
                            linkedin={ARTICLES_URLS.LAWSOFUX10_LINKEDIN_URL}
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
                            title={t.blockchain}
                            icon={
                                <SiHiveBlockchain
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
                            title={t.backgroundDev}
                            icon={
                                <FaDatabase
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
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.techStack}</h2>
                    <div className={styles.cardRowContainer}>
                        <TechCard
                            title={t.html}
                            img={MEDIA_URLS.HTML_IMG_URL}
                        />
                        <TechCard title={t.css} img={MEDIA_URLS.CSS_IMG_URL} />
                        <TechCard title={t.js} img={MEDIA_URLS.JS_IMG_URL} />
                        <TechCard title={t.ts} img={MEDIA_URLS.TS_IMG_URL} />
                        <TechCard
                            title={t.csharp}
                            img={MEDIA_URLS.CSHARP_IMG_URL}
                        />
                        <TechCard
                            title={t.solidity}
                            img={MEDIA_URLS.SOLIDITY_IMG_URL}
                        />
                        <TechCard
                            title={t.node}
                            img={MEDIA_URLS.NODE_IMG_URL}
                        />
                        <TechCard
                            title={t.react}
                            img={MEDIA_URLS.REACT_IMG_URL}
                        />
                        <TechCard
                            title={t.reactNative}
                            img={MEDIA_URLS.REACT_IMG_URL}
                        />
                        <TechCard
                            title={t.nextjs}
                            img={MEDIA_URLS.NEXT_IMG_URL}
                        />
                        <TechCard
                            title={t.electron}
                            img={MEDIA_URLS.ELECTRON_IMG_URL}
                        />
                        <TechCard
                            title={t.redux}
                            img={MEDIA_URLS.REDUX_IMG_URL}
                        />
                        <TechCard
                            title={t.tailwindcss}
                            img={MEDIA_URLS.TAILWINDCSS_IMG_URL}
                        />
                        <TechCard
                            title={t.dotnet}
                            img={MEDIA_URLS.DOTNET_IMG_URL}
                        />
                        <TechCard
                            title={t.azure}
                            img={MEDIA_URLS.AZURE_IMG_URL}
                        />
                        <TechCard
                            title={t.azuredevops}
                            img={MEDIA_URLS.AZUREDEVOPS_IMG_URL}
                        />
                        <TechCard
                            title={t.mongodb}
                            img={MEDIA_URLS.MONGODB_IMG_URL}
                        />
                        <TechCard
                            title={t.mysql}
                            img={MEDIA_URLS.MYSQL_IMG_URL}
                        />
                        <TechCard
                            title={t.sqlite}
                            img={MEDIA_URLS.SQLITE_IMG_URL}
                        />
                        <TechCard
                            title={t.postgres}
                            img={MEDIA_URLS.POSTGRES_IMG_URL}
                        />
                        <TechCard
                            title={t.wordpress}
                            img={MEDIA_URLS.WORDPRESS_IMG_URL}
                        />
                        <TechCard title={t.git} img={MEDIA_URLS.GIT_IMG_URL} />
                        <TechCard
                            title={t.adobexd}
                            img={MEDIA_URLS.ADOBEXD_IMG_URL}
                        />
                        <TechCard
                            title={t.figma}
                            img={MEDIA_URLS.FIGMA_IMG_URL}
                        />
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>{t.workWithMe}</h2>
                    <div className="bg-lightForeground dark:bg-darkForeground shadow-md w-full rounded-xl flex flex-col xl:flex-row justify-between items-center gap-8 p-8">
                        <h2 className="text-3xl text-center">{t.myValues}</h2>
                        <a
                            href={EXTERNAL_URLS.YAT_EMAIL_URL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <HiOutlineMail
                                size={48}
                                className="text-ored hover:opacity-75 cursor-pointer"
                            />
                        </a>
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

const styles = {
    container: 'flex flex-col justify-center items-center gap-52 mb-32',
    section: 'w-full flex flex-col gap-6 justify-center items-center',
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
