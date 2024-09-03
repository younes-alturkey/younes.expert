import { useAppSelector } from '@/src/app'
import { EXTERNAL_URLS } from 'config'
import { BsGithub, BsLinkedin, BsMedium, BsTwitterX } from 'react-icons/bs'
import { FaRedditAlien } from 'react-icons/fa'
import { FaUpwork } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { SiLeetcode } from 'react-icons/si'

export function Footer() {
    const { t } = useAppSelector(state => state.ui.settings.locale)
    return (
        <footer className="container flex flex-col xl:flex-row justify-between items-center gap-8 py-4 px-8 mb-16">
            <a
                href={EXTERNAL_URLS.YAT_PHONENUMBER_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.linkText}
            >
                <p>{t.phoneNumber}</p>
            </a>
            <a
                href={EXTERNAL_URLS.YAT_EMAIL_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.linkText}
            >
                <p>{t.email}</p>
            </a>

            <div className="flex justify-between items-center gap-4 ltr">
                <a
                    href={EXTERNAL_URLS.YAT_LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <RiInstagramFill
                        size={28}
                        className={styles.socialLinkIcon}
                    />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_TWITTER_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsTwitterX size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_REDDIT}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaRedditAlien
                        size={28}
                        className={styles.socialLinkIcon}
                    />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_MEDIUM_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsMedium size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_LEETCODE_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <SiLeetcode size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_UPWORK_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaUpwork size={28} className={styles.socialLinkIcon} />
                </a>
            </div>
        </footer>
    )
}

const styles = {
    socialLinkIcon: 'hover:text-ored hover:opacity-75 cursor-pointer',
    linkText: 'hover:text-ored hover:opacity-75 cursor-pointer ltr',
}
