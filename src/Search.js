import React, { Component} from 'react';
import { connect } from 'react-redux';
import { saveSearch } from './actions/searches';
import Results from './Results';
import Increment from './Increment';
import SearchForm from './SearchForm';

class Search extends Component {

  //Search terms only moved into Redux state once search button is submitted
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
      pagesTotal: 1,
      currentPage: 0,
      next: true,
      previous: false
    }
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const search = this.state.search

    //Save search term to redux store and query api
    this.props.saveSearch(search);
    this.handleAPI(search)

    //Reset form
    this.setState({ search: '' })
  }

  //Query the api and add results to component's state
  handleAPI = search => {
    let currentPage = this.state.currentPage

    return fetch(`http://hn.algolia.com/api/v1/search?query=${search}?page=${currentPage}`)
    .then(resp => resp.json())
    .then(results => {
      this.setState({
        results: results.hits,
        pagesTotal: results.nbPages,
      })
    })
    .catch(error => console.log(error))
  }

  pageToggle = () => {
    this.state.nextPage = !this.state.nextPage
  }

  changePage = (page, change) => {
    if (change) {
      this.setState({currentPage: page + 1})
    } else {
      this.setState({currentPage: page - 1})
    }
    this.handleAPI(this.state.search)
  }

  render() {
    console.log(this.state.results)

    return (
      <>
      <div className="Search-input">
        <SearchForm
          handleSubmit={this.handleSubmit}
          search={this.state.search}
          handleOnChange={this.handleOnChange}
          searches={this.props.searches}
        />
      </div>

      <div className="Results">
        {this.state.results.length === 0 ?
          "There are no search results to display" :
          <Results
            results={this.state.results}
          />
        }
      </div>

        <div>
          {this.state.results.length === 0 ?
            null :
            <Increment
            pagesTotal={this.state.pagesTotal}
            currentPage={this.state.currentPage}
            next={this.state.next}
            previous={this.state.previous}
            changePage={this.changePage}
            />
          }
        </div>
      </>
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
