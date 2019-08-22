import React from 'react';
import Select from 'react-select';

const SearchTerms = (props) => {

  const searchTerms = props.searches.map(term => (
    `[ ${term} ]`
  ))

  return(
    <>
      <ul>{searchTerms}</ul>
      <div>
        <Select
          options={SearchTerms}
          defaultValue="Your recent searches..."
        />
      </div>
    </>
  )
}

export default SearchTerms
