import type {AppProps} from 'next/app'
import '../styles/bulma.sass'

// @TODO: Should use layouts
function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
