import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import ActivityRecordCard from '~/components/utils/ActivityRecordCard'
import Layout from '~/layouts/Layout'

const Activities: NextPageWithLayout  = () => {
  const ActivitiesMain = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  `

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
  ]

  return <>
    <ActivitiesMain>
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
    </ActivitiesMain>
  </>
}

Activities.getLayout = (page) => <Layout metaTitle='実績'>{ page }</Layout>

export default Activities
