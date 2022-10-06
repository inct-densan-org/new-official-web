---
to: pages/<%= h.changeCase.camel(pageName) %>.tsx
---

<% if (isUseMotion) { -%>
import { motion } from 'framer-motion'
<% } -%>
import type { NextPageWithLayout } from 'next'
import styled from 'styled-components'
import Layout from '~/layouts/Layout'

const <%= h.changeCase.pascal(pageName) %>: NextPageWithLayout  = () => {
  /*-- styled-component --*/
  <% if (isUseMotion) { -%>
const <%= h.changeCase.pascal(pageName) %>Main = styled(motion.div)`
  <% } else { -%>
const <%= h.changeCase.pascal(pageName) %>Main = styled.div`
  <% } -%>
`

  /*-- variables --*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element --*/
  return <>
    <<%= h.changeCase.pascal(pageName) %>Main>
      text
    </<%= h.changeCase.pascal(pageName) %>Main>
  </>
}

<%= h.changeCase.pascal(pageName) %>.getLayout = (page) => <Layout metaTitle='<%= metaTitle %>'>{ page }</Layout>

export default <%= h.changeCase.pascal(pageName) %>
