const setSearch = search => {
  return {
    type: 'SAVE_SEARCH_SUCCEEDED',
    search
  }
}

export const saveSearch = searchTerm => {
  return dispatch => {
    return dispatch(setSearch(searchTerm))
  }
}
