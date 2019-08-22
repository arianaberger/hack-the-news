import React from 'react';
import { Form, Button } from 'react-bootstrap';


const SearchForm = (props) => {
  console.log(props)

  return(
    <Form onSubmit={props.handleSubmit} id="searchForm">
      <Form.Group controlId="searchInput">
        <Form.Control
          required
          type="text"
          name="search"
          placeholder="Search..."
          value={props.search}
          onChange={props.handleOnChange}
         />
      </Form.Group>
      <div>
        <Button variant="info" type="submit" block>
          Submit
        </Button>
      </div>
    </Form>
  )
}

export default SearchForm
