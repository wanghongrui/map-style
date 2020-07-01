import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

const ItemWrap = styled.ol`
  position: relative;
  overflow: auto;
`


const Layers = ({styledata}) => {
  const Items = styledata.layers.map(l => (<li key={l.id}>{l.id}</li>))

  return (
    <ItemWrap>
      {Items}
    </ItemWrap>
  )
}

const mapStateToProps = state => ({
  styledata: state.styledata
})

export default connect(mapStateToProps)(Layers)