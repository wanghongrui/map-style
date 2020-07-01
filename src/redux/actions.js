import * as types from './constants'

export const change_tab = (tabName) => ({
  type: types.CHANGE_TAB,
  tabName
})

export const change_style = (style) => ({
  type: types.CHANGE_STYLE,
  style
})

export const change_style_data = styledata => ({
  type: types.CHANGE_STYLE_DATA,
  styledata
})