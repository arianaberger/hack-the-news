import React from 'react';
import { Dropdown } from 'react-bootstrap';


const SearchTerms = (props) => {

  const SearchTerms = () => {
    if (props.searches.length === 0) {
      return "No searches yet"
    } else {
      return (props.searches.map(term => (
        <Dropdown.Item key={term}>{term}</Dropdown.Item>
      )))
    }
  }

  return(
    <Dropdown>
      <Dropdown.Toggle variant="info" size="sm">
        Recent searches...
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <SearchTerms />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchTerms
