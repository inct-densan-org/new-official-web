import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import Dialog from './Dialog'
import Icon from './Icon'

interface PropsInterface {
  contestName: string
  record: string
  year: number
  delay?: number
  onClick?: () => void
}

const ActivityRecordCard: React.FC<PropsInterface> = (props) => {
  /*-- styled-component --*/
  const ActivityRecordCardMain = styled(motion.div)`
    .card {
      display: flex;
      flex-flow: column;

      position: relative;
      min-height: 5rem;
      padding: 1rem  1.5rem;
      margin: 0.5rem;

      background-color: ${colors.white.default};
      border: solid 2px ${colors.black.default}10;
      border-radius: 0.5rem;
      cursor: pointer;

      h3 {
        margin: 0px;
        margin-bottom: 0.5rem;
      }

      .record, .year {
        display: inline-flex;
        align-items: center;

        margin: 0.175rem 0px;

        .material-symbols-rounded {
          color: ${colors.black.lighten[1]};
        }
      }

      .open-icon {
        position: absolute;
        bottom: 0.5rem;
        right: 1rem;
      }
    }
  `

  /*-- variables--*/
  const [ isOpenDialog, updateIsOpenDialog ] = useState(false)

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element  --*/
  return <>
    <ActivityRecordCardMain>
      <motion.div
        onClick={() => { updateIsOpenDialog(true) }}
        className='card'
      >
        <h3>
          { props.contestName }
        </h3>
        <span className='record'>
          <Icon
            icon='military_tech'
            fill
          />
          &ensp;{ props.record }
        </span>
        <span className='year'>
          <Icon
            icon='event'
            fill
          />
          &ensp;{ props.year }年
        </span>
        <div className='open-icon'>
          <Icon
            icon='import_contacts'
          />
        </div>
      </motion.div>
      <Dialog
        model={isOpenDialog}
        onClose={() => { updateIsOpenDialog(false) }}
        >
        asd
      </Dialog>
    </ActivityRecordCardMain>
  </>
}

ActivityRecordCard.defaultProps = {
}

export default ActivityRecordCard
