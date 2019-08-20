import React from 'react';

const DisplaySearches = (props) => {

  const searchTerms = props.searches.map(term => {
    return ` [${term}] `
  })

  return(
    <div>
      Your recent search terms: {searchTerms}
    </div>
  )
}

export default DisplaySearches
