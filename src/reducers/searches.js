export default (state = {
  searches: []
}, action) => {

  switch(action.type) {
    case 'SAVE_SEARCH_SUCCEEDED':
      return (
        {...state,
          searches: [
            ...state.searches,
            action.search
          ]
        }
      )

    default: return state;
  }
}
