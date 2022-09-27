import type { NextPageWithLayout } from 'next'
import Layout from '~/layouts/Layout'

const Activities: NextPageWithLayout  = () => {
  return <>
    <div>about</div>
  </>
}

Activities.getLayout = (page) => <Layout metaTitle='実績'>{ page }</Layout>

export default Activities
