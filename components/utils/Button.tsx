import { motion } from 'framer-motion'
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
  const Button = styled(motion.button)`
    display: inline-flex;
    align-items: center;

    position: relative;
    padding: 0.5em 1.5em;

    color: ${ dependsLuminanceColor(props.color!) };
    font-weight: 600;
    font-size: 14px;
    background-color: ${ props.color };
    border: none;
    border-radius: 0.5em;
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    user-select: none;

    &:hover {
      &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;

        border-radius: 0.5em;
        background-color: #00000022;
        opacity: 1;

        transition: all 100ms;
      }
    }
  `

  const handleOnClick = () => {
    return props.onClick
  }

  return <>
    <Button
      whileTap={{ scale: 0.99 }}
      onClick={ handleOnClick }
    >
      { props.icon && <Icon icon={ props.icon } style={{ marginRight: '0.5em' }} /> }
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
