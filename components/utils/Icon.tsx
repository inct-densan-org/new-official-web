import React from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import { IconNameType } from '~/types/icon/iconName'

export interface PropsInterface {
  icon: IconNameType
  size?: string | number
  color?: string
  fill?: boolean
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  grade?: -25 | 0 | 200
  opticalSize?: 20 | 24 | 40 | 48
  style?: React.CSSProperties
}

const Icon: React.FC<PropsInterface> = (props) => {
  const Icon = styled.span`
    color: ${props.color};
    font-variation-settings: 'FILL' ${props.fill ? 1 : 0}, 'wght' ${props.weight}, 'GRAD' ${props.grade}, 'opsz' ${props.opticalSize};
  `

  return <>
    <Icon
      className='material-symbols-rounded'
      style={props.style}
    >
      { props.icon }
    </Icon>
  </>
}

Icon.defaultProps = {
  color: colors.black.lighten[1],
  fill: false,
  weight: 500,
  grade: 0,
  opticalSize: 48
}

export default Icon
