---
to: <%= atomic %>/<%= h.changeCase.pascal(componentName) %>.tsx
---

<% if (isUseMotion) { -%>
import { motion } from 'framer-motion'
<% } -%>
import React from 'react'
import styled from 'styled-components'

interface propsInterface {
}

const <%= h.changeCase.pascal(componentName) %>: React.FC<propsInterface> = (props) => {
  /*-- styled-component --*/
  <% if (isUseMotion) { -%>
  const <%= h.changeCase.pascal(componentName) %>Main = styled(motion.div)`
  <% } else { -%>
  const <%= h.changeCase.pascal(componentName) %>Main = styled.div`
  <% } -%>
  `

  /*-- variables--*/

  /*-- functions --*/

  /*-- life cycle --*/

  /*-- element  --*/
  return <>
    <<%= h.changeCase.pascal(componentName) %>Main>
    </<%= h.changeCase.pascal(componentName) %>Main>
  </>
}

<%= h.changeCase.pascal(componentName) %>.defaultProps = {
}

export default <%= h.changeCase.pascal(componentName) %>
