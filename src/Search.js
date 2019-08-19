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
    const search = this.state["search"]
    console.log("Search the api!", search);
    this.props.saveSearch(search);
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="searchInput">
            <Form.Control
              required
              type="text"
              name="search"
              placeholder="Search..."
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

const mapStateToProps = (state) => {
  return {
    searches: state.searches
  }
}

const mapDispatchToProps = { saveSearch }

export default connect(mapStateToProps, mapDispatchToProps)(Search);
