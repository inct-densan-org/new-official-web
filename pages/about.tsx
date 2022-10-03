import type { NextPageWithLayout } from 'next'
import { ReactNode } from 'react'
import styled from 'styled-components'
import Icon from '~/components/utils/Icon'
import Layout from '~/layouts/Layout'
import { IconNameType } from '~/types/icon/iconName'

interface ActivityDetailInterface {
  icon?: IconNameType
  title: string
  detail: ReactNode
}

const About: NextPageWithLayout  = () => {
  const AboutMain = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    padding-bottom: 4rem;

    text-align: center;

    h2 {
      display: inline-flex;
      align-items: center;

      margin-bottom: 0%;
    }

    span {
      margin: 0.5rem 0%;
    }
  `

  const activityDetails: Array<ActivityDetailInterface> = [
    {
      title: '概要',
      detail: '電算部とは、一関高専の部活動の1つであり、正式名称は「電子計算機部」です。 プログラミングやセキュリティ、ネットワーク、ゲーム開発などを行っています。'
    },
    {
      icon: 'directions_run',
      title: '活動内容',
      detail: <>
        ソフトウェア / ゲーム開発、競技プログラミング、ネットワーク / サーバー構築・管理などを行っています。<br />
        また、毎年 高専プログラミングコンテスト  、 パソコン甲子園  に出場しています。
      </>
    },
    {
      icon: 'schedule',
      title: '活動時間',
      detail: <>
        基本：15:10 ～ 17:00<br />
        延長時：15:10 ～ 18:00
      </>
    },
    {
      icon: 'location_on',
      title: '活動場所',
      detail: <>
        <li>総合演習実習室（旧 CAD室）</li>
        <li>コンピュータ室</li>
      </>
    },
    {
      icon: 'devices',
      title: '設備',
      detail: <>
        <li>総合演習実習室のPC 約40台</li>
        <li>ゲーミングPC 2台 (ゲーム開発用)</li>
      </>
    }
  ]

  return <>
    <AboutMain>
      {
        activityDetails.map((detail, index) => {
          return <>
            <h2>
              <Icon
                icon={ detail.icon! }
                style={{
                  marginRight: '0.5rem'
                }}
              />
              { detail.title }
            </h2>
            <span>
              { detail.detail }
            </span>
          </>
        })
      }

    </AboutMain>
  </>
}

About.getLayout = (page) => <Layout metaTitle='電算部とは？'>{ page }</Layout>

export default About
