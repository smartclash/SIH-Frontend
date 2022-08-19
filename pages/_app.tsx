import type { AppProps } from 'next/app'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import "../styles/bulma.sass"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
    ) 
}

export default MyApp
