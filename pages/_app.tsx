import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import 'material-symbols'
import colors from '~/styles/colors'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&display=swap');

    body {
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans JP', sans-serif;
      color: ${ colors.black.default }
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    @media (prefers-color-scheme: dark) {
      html {
        color-scheme: dark;
      }
      body {
        color: ${ colors.white.default };
        background: ${ colors.black.default };
      }
    }
  `

  return <>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
}

export default MyApp
