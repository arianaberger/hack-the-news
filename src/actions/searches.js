const setSearch = search => {
  return {
    type: 'SAVE_SEARCH_SUCCESS',
    search
  }
}

export const saveSearch = searchTerm => {
  return dispatch(setSearch(searchTerm))
}
