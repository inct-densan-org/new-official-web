import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Button from '~/components/utils/Button'
import colors from '~/styles/colors'
import { routerPathLists } from '~/utils/routerLinks'

const IndexMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  position: relative;
  width: 100vw;
  height: 100vh;

  hr {
    width: 50%;
    border-color: ${colors.white.darken[1]};
  }

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

  .buttons {
    display: flex;
    flex-flow: column;

    position: relative;
    padding: 3rem 1rem;

    &::before {
      content: '- links -';
      position: absolute;
      top: 1rem;
      left: 50%;

      transform: translateX(-50%);
      color: ${colors.black.lighten[1]};
      font-size: 0.9rem;
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
        whileHover={{
          // scale: 1.5
        }}
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
          stiffness: 260,
          damping: 16
        }}
        className="title"
      >
        <h1>一関高専</h1>
        <h1>電子計算機部</h1>
        <p>- 指先から世界を変える -</p>
      </motion.div>
      <motion.hr />
      <div className='buttons'>
        {
          routerPathLists.map(link => {
            return <>
              <Button
                icon={link.icon}
                link={link.link}
              >
                { link.node }
              </Button>
            </>
          })
        }
      </div>
    </IndexMain>
  </>
}

export default Index
