import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveSearch } from './actions/searches';
import DisplaySearches from './DisplaySearches';

class Search extends Component {

  //Eventually move completely into Redux
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: []
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    //Change to access redux state
    const search = this.state["search"]
    console.log("Search the api with:", search);
    this.props.saveSearch(search);

    this.handleAPI(search)

  }

  handleAPI = search => {
    return fetch(`http://hn.algolia.com/api/v1/search?query=${search}`)
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        results: results
      })
    })
    .catch(error => console.log(error))
  }

//Form needs validation for empty string
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

//Need to look into why I have to call state.state to access search array
const mapStateToProps = (state) => {
  return {
    searches: state.state.searches
  }
}

const mapDispatchToProps = { saveSearch }

//Connect to store and allow dispatching to reducer
export default connect(mapStateToProps, mapDispatchToProps)(Search);
