import type {AppProps} from 'next/app'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
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
