import React from 'react'
import Styles from './Styles'
import Layers from './Layers'
import Data from './Data'

export default ({ tabName }) => {
  switch (tabName) {
    case 'styles':
      return <Styles />
    case 'layers':
      return <Layers />
    case 'data':
      return <Data />
    default:
      return <Styles />
  }
}