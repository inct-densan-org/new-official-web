import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import Layout from '~/layouts/Layout'

const About: NextPageWithLayout  = () => {
  const AboutMain = styled.div`
    
  `

  return <>
    <AboutMain>
      about
    </AboutMain>
  </>
}

About.getLayout = (page) => <Layout metaTitle='我が部について'>{ page }</Layout>

export default About
