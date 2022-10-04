import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import Icon from './Icon'

interface propsInterface {
  contestName: string
  record: string
  year: number
}

const ActivityRecordCard: React.FC<propsInterface> = (props) => {
  /*-- styled-component --*/
    const ActivityRecordCardMain = styled(motion.div)`
      display: flex;
      flex-flow: column;

      min-height: 5rem;
      padding: 1rem  1.5rem;
      margin: 0.5rem;

      background-color: ${colors.white.default};
      border: solid 2px ${colors.black.default}10;
      border-radius: 0.5rem;

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
    `

  /*-- variables--*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element  --*/
  return <>
    <ActivityRecordCardMain>
      <h3>
        { props.contestName }
      </h3>
      <span className='record'>
        <Icon icon='military_tech' />
        &ensp;{ props.record }
      </span>
      <span className='year'>
        <Icon icon='event' />
        &ensp;{ props.year }年
      </span>
    </ActivityRecordCardMain>
  </>
}

ActivityRecordCard.defaultProps = {
}

export default ActivityRecordCard
