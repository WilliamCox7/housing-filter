import React, { Component } from 'react';
import {getApartments} from "./apartments.js";

class Results extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apartments: []
    }

  }
  componentWillMount() {
    this.setState({
      apartments: getApartments()
    });
  }
  render() {
    console.log(this.props.cable); //trying to get props from advanced
    var apartments = this.state.apartments.map((apartment, i) => {
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

export default Results;
