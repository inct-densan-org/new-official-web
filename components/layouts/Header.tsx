import React from 'react'
import styled from 'styled-components'
import { IconNameType } from '~/types/icon/iconName'

interface propsInterface {
}

interface stateInterface {
}

const Header: React.FC<propsInterface> = (props) => {
  const Header = styled.header`
    display: flex;
    align-items: center;

    width: 100vw;
    height: 64px;
  `

  return <>
    <Header>
      d
    </Header>
  </>
}

Header.defaultProps = {
}

export default Header
