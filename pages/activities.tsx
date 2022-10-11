import { LayoutGroup } from 'framer-motion'
import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import ActivityRecordCard from '~/components/utils/ActivityRecordCard'
import Dialog from '~/components/utils/Dialog'
import Layout from '~/layouts/Layout'

const Activities: NextPageWithLayout  = () => {
  /*-- styled-component --*/
  const ActivitiesMain = styled.div`
    .recordLists {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
  `
  /*-- variables --*/

  const recordLists = [
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
    {
      contestName: 'コンテスト名1',
      record: '優勝',
      year: 2022
    },
  ]

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/



  return <>
    <ActivitiesMain>
      <div className='recordLists'>
        <LayoutGroup>
          {
            recordLists.map((record, index) => {
              return <>
                <ActivityRecordCard
                  contestName={record.contestName}
                  record={record.record}
                  year={record.year}
                  delay={index * 0.05}
                  />
              </>
            })
          }
        </LayoutGroup>
      </div>
    </ActivitiesMain>
  </>
}

Activities.getLayout = (page) => <Layout metaTitle='実績'>{ page }</Layout>

export default Activities
