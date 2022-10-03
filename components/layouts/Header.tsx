import React from 'react'
import Image from 'next/image'
import router, { useRouter } from 'next/router'
import styled from 'styled-components'
import densanCircleLogo from '~/assets/imgs/densan-circle-logo.png'
import { routerPathLists } from '~/utils/routerLinks'
import Button from '../utils/Button'
import colors from '~/styles/colors'

interface propsInterface {
}

interface stateInterface {
}

const Header: React.FC<propsInterface> = (props) => {
  const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 64px;
    padding: 1rem 2rem;

    .title-button {
      display: inline-flex;
      align-items: center;

      height: 100%;
      margin-right: 1rem;

      font-weight: bold;
      cursor: pointer;

      .img {
        position: relative;
        height: 100%;
        margin-right: 0.5rem;

        aspect-ratio: 1/1;
      }
    }

    .link-buttons {
      display: flex;

    }
  `

  const path = useRouter().pathname

  return <>
    <Header>
      <div
        className='title-button'
        onClick={() => { router.push('/') }}
      >
        <div className='img'>
          <Image
            src={densanCircleLogo.src}
            alt='densan-logo'
            layout='fill'
          />
        </div>
        一関高専 電算部
      </div>
      <div className='link-buttons'>
      {
          routerPathLists.map((link, index) => {
            return <>
              <Button
                key={index}
                icon={link.icon}
                link={link.link}
                color={link.link === path ? colors.white.darken[2] : 'transparent'}
              >
                { link.node }
              </Button>
            </>
          })
        }
      </div>
    </Header>
  </>
}

Header.defaultProps = {
}

export default Header
