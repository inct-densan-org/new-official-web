import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import ActivityRecordCard from '~/components/utils/ActivityRecordCard'
import Layout from '~/layouts/Layout'

const Activities: NextPageWithLayout  = () => {
  const ActivitiesMain = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  `

  return <>
    <ActivitiesMain>
      <ActivityRecordCard
        contestName='コンテスト名'
        record='優勝'
        year={2022}
      />
      <ActivityRecordCard
        contestName='コンテスト名'
        record='優勝'
        year={2022}
      />
      <ActivityRecordCard
        contestName='コンテスト名'
        record='優勝'
        year={2022}
      />
      <ActivityRecordCard
        contestName='コンテスト名'
        record='優勝'
        year={2022}
      />
      <ActivityRecordCard
        contestName='コンテスト名'
        record='優勝'
        year={2022}
      />
      <ActivityRecordCard
        contestName='コンテスト名'
        record='優勝'
        year={2022}
      />
    </ActivitiesMain>
  </>
}

Activities.getLayout = (page) => <Layout metaTitle='実績'>{ page }</Layout>

export default Activities
