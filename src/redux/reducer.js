import * as types from './constants'

const init = {
  tabName: 'styles',
  style: 'mapbox://styles/mapbox/streets-v10'
}

export default (state = init, action) => {
  switch(action.type) {
    case types.CHANGE_TAB:
      return {
        ...state, tabName: action.tabName
      }

    case types.CHANGE_STYLE:
      return {
        ...state, style: action.style
      }

    default:
      return state
  }
}
