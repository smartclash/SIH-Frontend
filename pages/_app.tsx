import type {AppProps} from 'next/app'
import Head from 'next/head'
import Navbar from '@/components/User/Navbar'
import Footer from '@/components/User/Footer'
import '../styles/bulma.sass'
import Image from 'next/image'

// @TODO: Should use layouts
function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Rakshak</title>
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
