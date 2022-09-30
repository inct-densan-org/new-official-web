import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import colors from '~/styles/colors'
import { dependsLuminanceColor } from '~/styles/dependsLuminanceColor'
import { IconNameType } from '~/types/icon/iconName'
import Icon from './Icon'

interface propsInterface {
  color?: string
  icon?: IconNameType
  children?: ReactNode
  style?: React.CSSProperties
  onClick?: () => void
}

interface stateInterface {
}

const Button: React.FC<propsInterface> = (props) => {
  const Button = styled(motion.button)`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    position: relative;
    z-index: 0;
    padding: 0.5rem 1.5rem;
    margin: 0.25rem;

    color: ${ dependsLuminanceColor(props.color!) };
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    background-color: ${ props.color };
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
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

        border-radius: 0.48rem;
        background-color: #00000021;
        opacity: 1;

        transition: all 100ms;
      }
    }

    .text {
      justify-self: center;
    }
  `

  const handleOnClick = () => {
    return props.onClick
  }

  return <>
    <Button
      whileTap={{ scale: 0.98 }}
      style={ props.style }
      onClick={ handleOnClick }
    >
      { props.icon && <Icon icon={ props.icon } style={{ marginRight: '1rem' }} /> }
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
