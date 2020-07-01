import React from 'react';
import styled from 'styled-components'
import BaseMap from '../components/BaseMap'
import Aside from '../components/Aside/Index'

const MapWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const AsideWrap = styled.div`
  position: absolute;
  left: 0; top: 0;
  width: 320px; height: 100%;
  z-index: 1;
  overflow: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
`

function MapView() {
  return (
    <MapWrap>
      <AsideWrap>
        <Aside />
      </AsideWrap>

      <MapWrap>
        <BaseMap />
      </MapWrap>
    </MapWrap>
  );
}

export default MapView;
