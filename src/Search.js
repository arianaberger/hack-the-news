import React, { Component} from 'react';
import { connect } from 'react-redux';
import { saveSearch } from './actions/searches';
import SearchTerms from './SearchTerms';
import Results from './Results';
import Next from './Next';
import SearchForm from './SearchForm';

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
    console.log(e)
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
  handleAPI = search => {
    let currentPage = this.state.currentPage
    console.log('in handleAPI', currentPage)

    return fetch(`http://hn.algolia.com/api/v1/search?query=${search}?page=${currentPage}`)
    .then(resp => resp.json())
    .then(results => {
      console.log(results)
      this.setState({
        results: results.hits,
        pagesTotal: results.nbPages,
      })
    })
    .catch(error => console.log(error))
  }

  //Function only works second time I click it/numbering is off
  //Incorporate into state with a boolean
  incrementPage = page => {
    console.log('before incrementPage', page)
    this.setState({
      currentPage: page + 1,
    })
    console.log('after incrementPage', this.state.currentPage)
    this.handleAPI(this.state.search)
  }

  decrementPage = page => {
    this.setState({
      currentPage: page - 1
    })
    this.handleAPI(this.state.search)
  }

//Form has automatic validation for empty field
  render() {
    console.log(this.state.results)

    return (
      <div>
        <SearchForm
          handleSubmit={this.handleSubmit}
          search={this.state.search}
          handleOnChange={this.handleOnChange}
        />

        <SearchTerms
          searches={this.props.searches}
        />
        <Results
          results={this.state.results}
        />

        <div>
          {this.state.results.length === 0 ?
            null :
            <Next
            pagesTotal={this.state.pagesTotal}
            currentPage={this.state.currentPage}
            handleAPI={this.handleAPI}
            search={this.state.search}
            incrementPage={this.incrementPage}
            decrementPage={this.decrementPage}
            />
          }
        </div>
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
