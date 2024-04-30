import { store } from '@/src/app'
import Head from '@/src/components/Head'
import md from '@/src/config/metadata'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head metadata={md} />
            <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
