import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import { dependsLuminanceColor } from '~/styles/dependsLuminanceColor'
import { IconNameType } from '~/types/icon/iconName'
import Icon from './Icon'

interface propsInterface {
  type?: 'default' | 'vertical'
  color?: string
  icon?: IconNameType
  iconTop?: boolean
  children: ReactNode
  onClick?: () => void
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {
  const Button = styled.button`
    display: inline-flex;
    align-items: center;

    padding: 0.5em 1.5em;

    color: ${ dependsLuminanceColor(props.color!) };
    font-weight: 600;
    font-size: 14px;
    background-color: ${ props.color };
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
  `

  return <>
    <Button onClick={ props.onClick }>
      { props.icon && <Icon icon={ props.icon } style={{ marginRight: '0.25em' }} /> }
      <span className='text'>
        { props.children }
      </span>
    </Button>
  </>
}

Button.defaultProps = {
  color: colors.blue.default,
}

export default Button
