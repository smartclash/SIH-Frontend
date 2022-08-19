import type {AppProps} from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
