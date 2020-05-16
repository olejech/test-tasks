import React from 'react'
import { FilterList } from './components/Filters/FilterList'
import { Table } from './components/Table'
import { connect } from 'react-redux'
import {
  fetchUsers,
  clearError,
  sortTable,
  changeLang,
  search,
  changeFavourite,
  changeView,
  changeTheme
} from './store/actions'
import { Alert } from './components/Alert'
import { Switch } from './components/Switch'
import { Search } from './components/Search'
import { Preview } from './components/Preview/Preview'
import LightTheme from './theme/light'
import DarkTheme from './theme/dark'
import { ThemeProvider } from 'styled-components'
import { Container, Flex } from './components/ui/Layout'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bgColor};
  }
`

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const {
      searchResult,
      users,
      theme,
      changeLang,
      changeTheme,
      sortTable,
      changeView,
      loading,
      error,
      clearError,
      search,
      changeFavourite,
      view
    } = this.props

    return (
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <GlobalStyle />
        <Container>
          <Flex sb aic>
            <h1 className="title">Тестовое задание Chulakov</h1>
            <Switch text="English" onChange={changeLang} />
          </Flex>

          <Flex sb aic>
            <Search search={search} />
            <Switch text="Тема" onChange={changeTheme} />
          </Flex>

          <FilterList setFilter={sortTable} setView={changeView} />

          {loading ? (
            <div className="loading">Загружается...</div>
          ) : error ? (
            <Alert error={error} onClick={clearError} />
          ) : (
            <>
              {view === 'preview' ? (
                <Preview
                  users={searchResult.length ? searchResult : users}
                  onClick={changeFavourite}
                />
              ) : (
                <Table
                  users={searchResult.length ? searchResult : users}
                  onClick={changeFavourite}
                />
              )}
            </>
          )}
        </Container>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    loading: state.loading,
    error: state.error,
    lang: state.lang,
    searchResult: state.searchResult,
    view: state.view,
    theme: state.theme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchUsers()),
    clearError: () => dispatch(clearError()),
    sortTable: filter => dispatch(sortTable(filter)),
    changeLang: () => dispatch(changeLang()),
    search: str => dispatch(search(str)),
    changeFavourite: id => dispatch(changeFavourite(id)),
    changeView: view => dispatch(changeView(view)),
    changeTheme: () => dispatch(changeTheme())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
