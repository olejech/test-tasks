import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  CLEAR_ERROR,
  SORT,
  LANG,
  SEARCH,
  SEARCH_FAIL,
  FAVOURITE,
  VIEW,
  THEME
} from './actionTypes'

export const fetchUsers = () => async dispatch => {
  try {
    dispatch({ type: FETCH_START })
    const response = await fetch('/api/data.json')
    if (!response.ok) throw new Error('Ошибка сети')

    const users = await response.json()
    if (!users.length) throw new Error('Нет данных')

    dispatch({ type: FETCH_SUCCESS, users })
  } catch (error) {
    dispatch({ type: FETCH_FAIL, error: error.message })
  }
}

export const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR })

export const sortTable = ({ orderBy, filter }) => (dispatch, getState) => {
  const sort = (obj, orderBy, filter) =>
    orderBy === 'increase'
      ? obj.sort((a, b) => (a[filter] > b[filter] ? 1 : -1))
      : obj.sort((a, b) => (a[filter] < b[filter] ? 1 : -1))

  const users = getState().searchResult.length
    ? getState().searchResult
    : getState().users

  const usersFiltered = sort(users, orderBy, filter)

  dispatch({ type: SORT, usersFiltered })
}

export const changeLang = () => (dispatch, getState) => {
  const lang = getState().lang === 'ru' ? 'en' : 'ru'
  dispatch({ type: LANG, lang })
}

export const search = str => (dispatch, getState) => {
  if (!str)
    return dispatch({
      type: SEARCH_FAIL,
      error: 'Введите имя или фамилию пользователя'
    })

  const user = getState().users.filter(user => {
    const substrs = user.name.split(' ')
    return substrs.find(substr => substr.toLowerCase() === str.toLowerCase())
  })

  if (!user.length)
    return dispatch({ type: SEARCH_FAIL, error: 'Нет такого пользователя' })

  dispatch({ type: SEARCH, user })
}

export const changeFavourite = id => (dispatch, getState) => {
  const users = getState().users.map(user => {
    if (user.id === id) {
      user.favourite = !user.favourite
    }
    return user
  })

  dispatch({ type: FAVOURITE, users })
}

export const changeView = view => dispatch => dispatch({ type: VIEW, view })

export const changeTheme = () => (dispatch, getState) => {
  const theme = getState().theme === 'light' ? 'dark' : 'light'
  dispatch({ type: THEME, theme })
}
