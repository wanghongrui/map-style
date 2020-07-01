import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { change_style_data } from '../redux/actions'

import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = styled.div`
  position: relative;
  width: 100%; height: 100%;
  overflow: hidden;
`

const mapboxLanguage = new MapboxLanguage({ defaultLanguage: 'zh' })

class BaseMap extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFob25nIiwiYSI6ImNpZjUyNDA2bTA4N2ZzcG0zY2F2MHdldm0ifQ.XzSEPxMgbwglS7L66m1Nyw';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.props.style,
      center: [120.1, 30.2],
      zoom: 9
    })

    this.map.addControl(mapboxLanguage);

    this.map.on('styledata', () => {
      this.props.changeStyleData(this.map.getStyle())
    })
  }

  componentDidUpdate() {
    this.map.setStyle(this.props.style)
    this.map.addControl(mapboxLanguage);
  }

  render() {
    return (
      <Map id="map" />
    )
  }
}

const mapStateToProps = state => ({
  style: state.style
})

const mapDispatchToProps = dispatch => ({
  changeStyleData(styledata) {
    dispatch(change_style_data(styledata))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BaseMap)