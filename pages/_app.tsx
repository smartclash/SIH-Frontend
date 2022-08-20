import type {AppProps} from 'next/app'
import Navbar from '@/components/User/Navbar'
import Footer from '@/components/User/Footer'
import '../styles/bulma.sass'

// @TODO: Should use layouts
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
