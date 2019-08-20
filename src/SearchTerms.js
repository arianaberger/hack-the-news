import React from 'react';

const SearchTerms = (props) => {

  const searchTerms = props.searches.map(term => (
    `[ ${term} ]`
  ))

  return(
    <>
      <ul>{searchTerms}</ul>
    </>
  )
}

export default SearchTerms
