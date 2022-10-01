import type { AppPropsWithLayout } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import 'material-symbols'
import colors from '~/styles/colors'

const MyApp = ({ Component, pageProps }: AppPropsWithLayout ) => {
  const GlobalStyle = createGlobalStyle`
    body {
      padding: 0;
      margin: 0;
      font-family: 'Noto Sans JP', sans-serif;
      color: ${ colors.black.default };
      background-color: ${ colors.white.default };
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    /* @media (prefers-color-scheme: dark) {
      html {
        color-scheme: dark;
      }
      body {
        color: ${ colors.white.default };
        background: ${ colors.black.darken[2] };
      }
    } */
  `

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
