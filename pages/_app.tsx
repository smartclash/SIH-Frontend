import type {AppProps} from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import "../styles/bulma.sass";
import '../styles/globals.css'


import '../styles/bulma.sass'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
