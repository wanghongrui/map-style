import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { change_style } from '../../redux/actions'

const StyleItemWrap = styled.div`
  position: relative;
  flex: 1;
  overflow: auto;
`

const StyleItem = styled.div`
  position: relative;
  height: 20rem;
  margin: 0 1rem;
  border: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  border-radius: 0.5rem;

  background-color: ${props => props.bgColor || 'white'};
  color: ${props => props.color || 'black'};

  & + & {
    margin-top: 1rem;
  }

  &:hover {
    opacity: 0.8;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
  }
`

const styles = [
  {
    label: '街道',
    bgColor: '#EFE9E1',
    color: 'black',
    url: 'mapbox://styles/mapbox/streets-v10'
  },
  {
    label: '黑暗',
    bgColor: '#5D5C5B',
    color: 'white',
    url: 'mapbox://styles/mapbox/dark-v9'
  },
  {
    label: '影像',
    bgColor: '#58604D',
    color: 'white',
    url: 'mapbox://styles/mapbox/satellite-streets-v9'
  },
  {
    label: '路况',
    bgColor: '#9AE2B2',
    color: 'black',
    url: 'mapbox://styles/mapbox/traffic-day-v2'
  },
]

const Styles = ({ style, changeStyle }) => {
  const StyleItems = styles.map(s => <StyleItem bgColor={s.bgColor} color={s.color} onClick={changeStyle.bind(this, s.url)} key={s.label}>{s.label}</StyleItem>)

  return (
    <StyleItemWrap>
      {StyleItems}
    </StyleItemWrap>
  )
}

const mapStateToProps = state => ({
  style: state.style
})

const mapDispatchToProps = dispatch => ({
  changeStyle(style) {
    dispatch(change_style(style))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Styles)