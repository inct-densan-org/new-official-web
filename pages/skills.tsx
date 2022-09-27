import type { NextPageWithLayout } from 'next'
import Layout from '~/layouts/Layout'

const Skills: NextPageWithLayout  = () => {
  return <>
    <div>about</div>
  </>
}

Skills.getLayout = (page) => <Layout metaTitle='保有スキル'>{ page }</Layout>

export default Skills
