import { useAppDispatch, useAppSelector } from '@/src/app'
import { EmailLink, PhoneLink, WhatsAppLink } from '@/src/components'
import { initApp } from '@/src/features'
import { Footer, Header, Main } from '@/src/layout'
import Head from 'next/head'
import { useEffect } from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import ScrollToTop from 'react-scroll-to-top'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PageHead } from 'types'

export function AppLayout(props: PageHead) {
    const { settings, appInitialized } = useAppSelector(state => state.ui)
    const { locale, darkMode } = settings
    const { lang } = locale
    const isAr = lang === 'ar' ? true : false

    const { title = 'Younes Alturkey', children } = props

    const dispatch = useAppDispatch()

    useEffect(() => {
        !appInitialized && dispatch(initApp())
        //eslint-disable-next-line
    }, [])

    return (
        <div className="relative flex flex-col justify-center items-center">
            <Head>
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
