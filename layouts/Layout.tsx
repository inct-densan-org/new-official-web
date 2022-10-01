import { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import colors from '~/styles/colors'
import mixins from '~/styles/mixins'
import Header from '~/components/layouts/Header'

type LayoutProps = Required<{
  readonly children: ReactNode
  readonly metaTitle: String
}>

const Layout = ({ children, metaTitle }: LayoutProps) => {
  // const

  // method

  return <>
    <LayoutMain>
      <Head>
        <title>{metaTitle}&#65372;一関高専 - 電子計算機部</title>
        <meta name="description" content="INCT Densan homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        {children}
      </Main>
    </LayoutMain>
  </>
}

const LayoutMain = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;

  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 56px calc(100vh - 56px - 40px) 40px;
  align-items: center;
`

const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  ${mixins.checkIsSp} {
    grid-column: 1/4;
    grid-row: 2/4;
  }
  justify-self: start;
  align-self: flex-start;

  width: 100%;
  height: 100%;
  padding-top: 16px;

  color: ${colors.black.default};
`

export default Layout
