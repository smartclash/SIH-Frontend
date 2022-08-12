import type { AppProps } from 'next/app'
import "../styles/bulma.sass"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
