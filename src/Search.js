import React, { Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { saveSearch } from './actions/searches';
import SearchTerms from './SearchTerms';
import Results from './Results';
import Next from './Next';

class Search extends Component {

  //Doesn't seem to make sense to completely move search state into Redux
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      pagesTotal: 1,
      currentPage: 1
    }
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const search = this.state.search

    //Save search term to redux store and query api
    this.props.saveSearch(search);
    this.handleAPI(search)

    //Form is not resetting
    const form = document.getElementById("searchForm")
    form.reset();
  }

  //Query the api and add results to component's state
  //Currently giving warning in console about deprecated components
  handleAPI = search => {
    let currentPage = this.state.currentPage

    return fetch(`http://hn.algolia.com/api/v1/search?query=${search}?page=${currentPage}`)
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        results: results.hits,
        pagesTotal: results.nbPages
      })
    })
    .catch(error => console.log(error))
  }

  nextPage = page => {

  }

//Form has automatic validation for empty field
  render() {
    console.log(this.state.results)
    return (
      <div>
        <Form onSubmit={this.handleSubmit} id="searchForm">
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

        <SearchTerms searches={this.props.searches} />
        <Results results={this.state.results} />
        <Next
        pagesTotal={this.state.pagesTotal}
        currentPage={this.state.currentPage}
        handleAPI={this.handleAPI}
        />

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
