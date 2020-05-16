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

const initialState = {
  users: [],
  loading: false,
  error: null,
  lang: 'ru',
  searchResult: [],
  view: 'table',
  theme: 'light'
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    case SORT:
      return {
        ...state,
        users: [...action.usersFiltered]
      }
    case LANG:
      return {
        ...state,
        lang: action.lang
      }
    case SEARCH:
      return {
        ...state,
        error: null,
        searchResult: action.user
      }
    case SEARCH_FAIL:
      return {
        ...state,
        error: action.error,
        searchResult: []
      }
    case FAVOURITE:
      return {
        ...state,
        users: action.users
      }
    case VIEW:
      return {
        ...state,
        view: action.view
      }
    case THEME:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state
  }
}
