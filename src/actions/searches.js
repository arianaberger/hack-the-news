const setSearch = search => {
  return {
    type: 'SAVE_SEARCH_SUCCEEDED',
    search
  }
}

//Include instance where blank string is submitted
export const saveSearch = searchTerm => {
  return dispatch => {
    return dispatch(setSearch(searchTerm))
  }
}
