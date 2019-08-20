import React from 'react';

const DisplaySearches = (props) => {

  const searchTerms = props.searches.map(term => {
    return ` [${term}] `
  })

  return(
    <div>
      {searchTerms}
    </div>
  )
}

export default DisplaySearches
