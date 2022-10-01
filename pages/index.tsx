import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { animate, motion, useAnimationControls, useMotionValue } from 'framer-motion'
import Button from '~/components/utils/Button'
import colors from '~/styles/colors'
import { routerPathLists } from '~/utils/routerLinks'
import { useEffect, useState } from 'react'

const Index: NextPage = () => {
  const [ isMouseDown, updateIsMouseDown ] = useState(false)

  const x = useMotionValue(100)
  const y = useMotionValue(100)
  const scale = useAnimationControls()

  const getMousePosition: React.MouseEventHandler = (event) => {
    x.set(event.pageX - 48)
    y.set(event.pageY - 48)
    scale.start({
      scale: 1,
      transition: { duration: 1 }
    })
    if (!isMouseDown) {
    }
  }
  const click = async () => {
    await scale.start({
      scale: 1.5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ,
      transition: { duration: 0.1 }
    })
    scale.start({
      scale: 1,
      transition: { duration: 0.1 }
    })
  }

  const IndexMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  position: relative;
  width: 100vw;
  height: 100vh;

  user-select: none;
  cursor: none;

  hr {
    width: 50%;
  }

  .pointer {
    position: fixed;
    z-index: 9999;
    width: 6rem;
    height: 6rem;

    background-color: ${ colors.white.default };
    border-radius: 50%;
    mix-blend-mode: difference;
    pointer-events: none;

    ::after {
      position: absolute;
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50%);
      background-color: ${ colors.white.default };
      border-radius: 50%;
      mix-blend-mode: difference;
      pointer-events: none;
    }
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

  return <>
    <Head>
      <title>一関高専 - 電子計算機部</title>
      <meta name="description" content="INCT Densan homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <IndexMain
      onMouseMove={getMousePosition}
      onClick={click}
    >
      <motion.div
        style={{
          top: y,
          left: x,
        }}
        animate={
          scale
        }
        className='pointer'
      />
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
          routerPathLists.map((link, i) => {
            return <>
              <Button
                icon={link.icon}
                link={link.link}
                style={{
                  cursor: 'none'
                }}
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
