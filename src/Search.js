import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveSearch } from './actions/searches';
import DisplaySearches from './DisplaySearches';

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
    console.log("Search the api with:", search);
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
        <DisplaySearches searches={this.props.searches} />
      </div>
    )
  }
}

//Use to display all saved search terms in a separate component?
const mapStateToProps = (state) => {
  return {
    searches: state.searches
  }
}

const mapDispatchToProps = { saveSearch }

//Connect to store and allow dispatching to reducer
export default connect(mapStateToProps, mapDispatchToProps)(Search);
