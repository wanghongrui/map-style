import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { change_tab } from '../../redux/actions'

const Tabs = styled.div`
  display: flex;
`

const TabItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 6px 0;
  cursor: pointer;
  user-select: none;
`

const Tab = ({ changeTab }) => {
  return (
    <Tabs>
      <TabItem onClick={changeTab.bind(this, 'styles')}>风格</TabItem>
      <TabItem onClick={changeTab.bind(this, 'layers')}>图层</TabItem>
      <TabItem onClick={changeTab.bind(this, 'data')}>数据</TabItem>
    </Tabs>
  )
}

const mapStateToProps = (state) => {
  return {
    tabName: state.tabName
  }
}

const mapDispatchToProps = dispatch => ({
  changeTab(tabName) {
    dispatch(change_tab(tabName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tab)