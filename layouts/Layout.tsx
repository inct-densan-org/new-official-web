import { ReactNode } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import colors from '~/styles/colors'
import mixins from '~/styles/mixins'
import Header from '~/components/layouts/Header'
import { useRouter } from 'next/router'

type LayoutProps = Required<{
  readonly children: ReactNode
  readonly metaTitle: String
}>

const Layout = ({ children, metaTitle }: LayoutProps) => {
  // const
  const router = useRouter()

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
        <div className='meta-title'>
          <h1>
            { metaTitle }
          </h1>
          <p>
            { router.pathname }
          </p>
          <hr />
        </div>
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
  justify-self: start;
  align-self: flex-start;

  width: 100%;
  height: 100%;
  padding-top: 2rem;

  color: ${colors.black.default};

  .meta-title {
    min-width: 30%;
    width: fit-content;
    margin: auto;
    padding-bottom: 1rem;

    text-align: center;
  }
`

export default Layout
