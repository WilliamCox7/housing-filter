import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterName} from './redux/filter';
import {resetApartments} from './redux/filter';
import Advanced from './Advanced.js';
import Results from './Results.js';
import './normalize.css';
import './skeleton.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showfilter: false
    }
    this.toggleAdvanced = this.toggleAdvanced.bind(this);
    this.filterName = this.filterName.bind(this);
    this.props.resetApartments();
  }

  toggleAdvanced(event) {
    event.preventDefault();
    this.setState({
      showfilter: !this.state.showfilter
    });
  }

  filterName(event) {
    event.preventDefault();
    this.props.filterName(event.target.value);
  }

  render() {
    var numOfApts = this.props.numOfApts;
    return (
      <div className="App container">
        <div className="App-header">
          <span>BYU Off-Campus Housing Filter</span>
        </div>
        <div className="App-content-beg">
          <input id="main-filter-input" type="text" placeholder="search for housing here..." onChange={this.filterName}></input>
        </div>
        {this.state.showfilter ? <Advanced /> : null}
        <div className="App-content-end">
          <span>{numOfApts} results</span>
          <button onClick={this.toggleAdvanced} className="button-primary" id="main-filter-button">Advanced Filter</button>
        </div>
        <Results />
      </div>
    );
  }
}

const mapDispatchToProps = {
  filterName: filterName,
  resetApartments: resetApartments
}

function mapStateToProps(state) {
  return {
    numOfApts: state.numOfApts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
