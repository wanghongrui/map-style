import * as types from './constants'

export const change_tab = (tabName) => ({
  type: types.CHANGE_TAB,
  tabName
})

export const change_style = (style) => ({
  type: types.CHANGE_STYLE,
  style
})