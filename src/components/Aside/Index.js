import React from 'react'
import {connect} from 'react-redux'

import Tabs from './Tabs'
import Content from './Content'


const Aside = ({ tabName }) => {
  return (
    <>
      <Tabs />

      <Content tabName={tabName} />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tabName: state.tabName
  }
}


export default connect(mapStateToProps)(Aside)