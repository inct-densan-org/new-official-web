import React from 'react'
import styled from 'styled-components'
import { IconNameType } from '~/types/icon/iconName'

interface propsInterface {
  icon: IconNameType
  size?: string | number
  style?: React.CSSProperties
}

interface stateInterface {
}

const Icon: React.FC<propsInterface> = (props) => {
  const Icon = styled.span`
    .material-symbols-rounded {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
    }
  `

  return <>
    <Icon className='material-symbols-rounded' style={ props.style }>
      { props.icon }
    </Icon>
  </>
}

Icon.defaultProps = {
}

export default Icon
