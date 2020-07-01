import React from 'react'
import styled from 'styled-components'

const StyleItemWrap = styled.div`
  position: relative;
  flex: 1;
  overflow: auto;
`

const StyleItem = styled.div`
  position: relative;
  height: 200px;
  background-color: teal;

  & + & {
    margin: 10px;
  }
`

const Styles = () => {
  return (
    <StyleItemWrap>
      <StyleItem>啦啦啦</StyleItem>
      <StyleItem>啦啦啦</StyleItem>
      <StyleItem>啦啦啦</StyleItem>
      <StyleItem>啦啦啦</StyleItem>
    </StyleItemWrap>
  )
}

export default Styles