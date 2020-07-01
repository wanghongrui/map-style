import * as types from './constants'

const init = {
  tabName: 'styles',
  style: 'mapbox://styles/mapbox/streets-v10',
  styledata: null
}

export default (state = init, action) => {
  switch (action.type) {
    case types.CHANGE_TAB:
      return {
        ...state, tabName: action.tabName
      }

    case types.CHANGE_STYLE:
      return {
        ...state, style: action.style
      }

    case types.CHANGE_STYLE_DATA:
      return {
        ...state, styledata: action.styledata
      }

    default:
      return state
  }
}
