import React, { Component } from 'react';
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
  }

  toggleAdvanced(event) {
    event.preventDefault();
    this.setState({
      showfilter: !this.state.showfilter
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <span>BYU Off-Campus Housing Filter</span>
        </div>
        <div className="App-content-beg">
          <input id="main-filter-input" type="text" placeholder="search for housing here..."></input>
        </div>
        {this.state.showfilter ? <Advanced /> : null}
        <div className="App-content-end">
          <span>2 results</span>
          <button onClick={this.toggleAdvanced.bind(this)} className="button-primary" id="main-filter-button">Advanced Filter</button>
        </div>
        <Results />
      </div>
    );
  }
}

export default App;
