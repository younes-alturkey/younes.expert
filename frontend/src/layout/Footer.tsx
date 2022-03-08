import { useAppSelector } from '@/src/app'
import {
    BsGithub,
    BsLinkedin,
    BsMedium,
    BsReddit,
    BsTwitter,
} from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import { EXTERNAL_URLS } from '@/src/config'

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
                    <BsTwitter size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_REDDIT_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsReddit size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_MEDIUM_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsMedium size={28} className={styles.socialLinkIcon} />
                </a>
                <a
                    href={EXTERNAL_URLS.YAT_CODEPEN_URL}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaCodepen size={28} className={styles.socialLinkIcon} />
                </a>
            </div>
        </footer>
    )
}

const styles = {
    socialLinkIcon: 'hover:text-ored hover:opacity-75 cursor-pointer',
    linkText: 'hover:text-ored hover:opacity-75 cursor-pointer ltr',
}
