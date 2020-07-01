import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import 'mapbox-gl/dist/mapbox-gl.css'

const Map = styled.div`
  position: relative;
  width: 100%; height: 100%;
  overflow: hidden;
`

class BaseMap extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGFob25nIiwiYSI6ImNpZjUyNDA2bTA4N2ZzcG0zY2F2MHdldm0ifQ.XzSEPxMgbwglS7L66m1Nyw';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [120.1, 30.2],
      zoom: 9
    })

    this.map.addControl(new MapboxLanguage({ defaultLanguage: 'zh' }));
  }

  componentDidUpdate () {
    this.map.setStyle(this.props.style)
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

export default connect(mapStateToProps)(BaseMap)