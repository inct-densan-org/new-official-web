import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'material-symbols'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
