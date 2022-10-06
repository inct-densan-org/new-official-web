import { motion } from 'framer-motion'
import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import Layout from '~/layouts/Layout'

const Skills: NextPageWithLayout  = () => {
  /*-- styled-component --*/
  const SkillsMain = styled(motion.div)`
  `

  /*-- variables--*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element  --*/
  return <>
    <SkillsMain>
      text
    </SkillsMain>
  </>
}

Skills.getLayout = (page) => <Layout metaTitle='保有スキル'>{ page }</Layout>

export default Skills
