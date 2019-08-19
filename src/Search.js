import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveSearch } from './actions/searches';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Search the api!");
    this.props.saveSearch();
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="searchInput">
            <Form.Label>Search:</Form.Label>
            <Form.Control
              required
              type="text"
              name="search"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleOnChange}
             />
          </Form.Group>
          <div>
            <Button variant="info" type="submit" block>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default Search;
