export default (state = {searches: []}, action) => {

  switch(action.type) {
    case 'SAVE_SEARCH_SUCCESS':
      return {...state, searches: action}

    default: return state;
  }
}
