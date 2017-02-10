import React, { Component } from 'react';
import {connect} from 'react-redux';

class Results extends Component {
  
  render() {
    var apartments = this.props.apartments.map((apartment, i) => {
      return (
        <div key={i} className="App-results">
          <div className="result-number">{i+1}</div>
          <div className="result">
            <ul>
              <li>{apartment.name}</li>
              <li>${apartment.sharedRent[0]}/mo</li>
            </ul>
          </div>
        </div>
      )
    });
    return (
      <div>
        {apartments}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apartments: state.apartments
  }
}

export default connect(mapStateToProps)(Results);
