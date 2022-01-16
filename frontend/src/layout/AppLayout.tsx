import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import { useAppDispatch, useAppSelector } from '@/src/app/hooks'
import { useEffect } from 'react'
import { initApp } from '@/src/features/uiSlice'
import { PageHead } from '@/src/types/types'
import Header from '@/src/layout/Header'
import Main from '@/src/layout/Main'
import Footer from '@/src/layout/Footer'
import WhatsAppLink from '@/src/components/WhatsAppLink'

export default function Layout(props: PageHead) {
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
        <div className="relative flex flex-col h-screen">
            <Head>
                <meta name="theme-color" content="#F12F40" />
                <meta name="author" content="Younes Alturkey" />
                <meta property="og:title" content="Younes Alturkey" />
                <meta
                    property="og:description"
                    content="Discover Younes's services, skills, projects, articles, and latest cv"
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

            <WhatsAppLink />

            <Header />
            <div className="overflow-y-auto flex flex-col justify-center items-center">
                <Main>{children}</Main>
                <Footer />
            </div>
        </div>
    )
}
