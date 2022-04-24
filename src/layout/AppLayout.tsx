import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { initApp } from '@/src/features'
import { WhatsAppLink, EmailLink, PhoneLink } from '@/src/components'
import { useAppDispatch, useAppSelector } from '@/src/app'
import { PageHead } from 'types'
import { Header, Main, Footer } from '@/src/layout'
import Head from 'next/head'
import ScrollToTop from 'react-scroll-to-top'
import { BsArrowUpShort } from 'react-icons/bs'

export function AppLayout(props: PageHead) {
    const { settings, appInitialized } = useAppSelector(state => state.ui)
    const { locale, darkMode } = settings
    const { lang } = locale
    const isAr = lang === 'ar' ? true : false

    const { title = '', keywords = '', description = '', children } = props

    const dispatch = useAppDispatch()

    useEffect(() => {
        !appInitialized && dispatch(initApp())
        //eslint-disable-next-line
    }, [])

    return (
        <div className="relative flex flex-col justify-center items-center">
            <Head>
                <meta name="theme-color" content="#F12F40" />
                <meta name="author" content="Younes Alturkey" />
                <meta property="og:title" content="Younes Alturkey" />
                <meta
                    property="og:description"
                    content="Learn about Younes's work, products, articles, skills, and download latest cv"
                />
                <meta
                    property="og:image"
                    content="/images/og-card-1200x630.png"
                />
                <meta property="og:url" content="https://younesalturkey.sa" />
                <meta
                    name="twitter:card"
                    content="/images/twitter-card-600x314.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content={lang} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <title>{title}</title>
            </Head>

            <ScrollToTop
                smooth
                component={<BsArrowUpShort size={40} />}
                style={{
                    backgroundColor: '#F12F40',
                    color: '#FFFFFF',
                }}
            />

            <ToastContainer
                position="top-center"
                rtl={isAr}
                toastStyle={{
                    color: darkMode ? '#FFFFFF' : '#121212',
                    backgroundColor: darkMode ? '#121212' : '#FFFFFF',
                }}
                autoClose={3000}
                closeButton={false}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            <PhoneLink />

            <EmailLink />

            <WhatsAppLink />

            <Header />

            <Main>{children}</Main>

            <Footer />
        </div>
    )
}
