import { AnimatePresence, motion } from 'framer-motion'
import styled from 'styled-components'
import colors from '~/styles/colors'

interface PropsInterface {
  model: boolean
  children?: React.ReactNode
  onClose?: () => void
}

const Dialog: React.FC<PropsInterface> = (props) => {
  /*-- styled-component --*/
  const DialogMain = styled.div`
    .dialog {
      position: fixed;
      z-index: 99;
      inset: 0;
      margin: auto;
      width: fit-content;
      height: fit-content;
      max-width: calc(100vw - 4rem);
      max-height: calc(100vh - 4rem);
      padding: 1rem 2rem;

      background-color: ${colors.white.default};
      border-radius: 0.5rem;
      overflow: auto;
    }

    .background {
      position: fixed;
      z-index: 98;
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
    <DialogMain>
      <AnimatePresence>
        { props.model && <>
          <motion.div
            key='dialog'
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0,
            }}
            transition={{
              type: 'spring',
              duration: 0.5,
            }}
            className='dialog'
          >
            { props.children }
          </motion.div>
          <motion.div
            onClick={props.onClose}
            className='background'
          />
        </> }
      </AnimatePresence>
    </DialogMain>
  </>
}

Dialog.defaultProps = {
}

export default Dialog
