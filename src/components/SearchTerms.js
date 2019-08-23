import React from 'react';
import { Dropdown } from 'react-bootstrap';

const SearchTerms = (props) => {

  const Searches = () => {
    if (props.searches.length === 0) {
      return "None yet..."
    } else {
      return (props.searches.map(term => (
        <Dropdown.Item key={term}>
            {term}
          </Dropdown.Item>
      )))
    }
  }

  return(
    <Dropdown>
      <Dropdown.Toggle variant="info" size="sm">
        Recent searches
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Searches />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SearchTerms
