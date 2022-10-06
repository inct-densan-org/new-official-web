import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'

interface PropsInterface {
  model: boolean
  children?: React.ReactNode
}

const Dialog: React.FC<PropsInterface> = (props) => {
  /*-- styled-component --*/
  const DialogMain = styled(motion.div)`
    .dialog {
      position: fixed;
      z-index: 2;
      top: 50%;
      left: 50%;
      max-width: calc(100vw - 4rem);
      max-height: calc(100vh - 4rem);
      padding: 1rem 2rem;

      transform: translate(-50%, -50%);
      background-color: ${colors.white.default};
      border-radius: 0.5rem;
      overflow: auto;
    }

    .background {
      position: fixed;
      z-index: 1;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vh;

      transform: translate(-50%, -50%);
      background-color: ${colors.black.default}50;
    }
  `

  /*-- variables --*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    { props.model && <>
      <DialogMain>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          className='dialog'
        >
          { props.children }
        </motion.div>
        <motion.div className='background' />
      </DialogMain>
    </> }
  </>
}

Dialog.defaultProps = {
}

export default Dialog
