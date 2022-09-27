import type { NextPageWithLayout } from 'next'
import Layout from '~/layouts/Layout'

const About: NextPageWithLayout  = () => {
  return <>
    <div>about</div>
  </>
}

About.getLayout = (page) => <Layout metaTitle='我が部について'>{ page }</Layout>

export default About
