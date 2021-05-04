import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from "./Suggestions"
const API_URL = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='
const API_key = '&apikey=C89703VMNVRE4KK4'

class Search extends Component {
  state = {
    query: '',
    results: []
  }
// Fetching the info using the api
  getInfo = () => {
    axios.get(API_URL + this.state.query + API_key).then(resp => {
      //console.log(resp.data.bestMatches);
        this.setState({
          results: resp.data.bestMatches
        })
        //console.log(resp.data);
    });
  }
  //triggering the search on change
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.getInfo()
        }
    })
  }
// rendering the form and results
  render() {
    return (
      <form className="text-left">
        <input
          placeholder="Search for..."
          className="search-input"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search

