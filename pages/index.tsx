import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '~/components/utils/Button'

const IndexMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  width: 100vw;
  height: 100vh;

  .title {
    text-align: center;

    h1 {
      margin: 0px;

      font-size: 5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

const Index: NextPage = () => {
  return <>
    <Head>
      <title>一関高専 - 電子計算機部</title>
      <meta name="description" content="INCT Densan homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <IndexMain>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          delay: 0.5,
          stiffness: 260,
          damping: 16
        }}
        className="title"
      >
        <h1>一関高専</h1>
        <h1>電子計算機部</h1>
        <p>- 指先から世界を変える -</p>
      </motion.div>
      <Button icon='face'>我が部について</Button>
    </IndexMain>
  </>
}

export default Index
