import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Results extends Component {

  render() {
    var apartments = this.props.apartments.map((apartment, i) => {
      return (
        <Link key={i} to={"apartment/" + apartment.name.split(" ").join("").toLowerCase()}>
          <div className="App-results">
            <div className="result-number">{i+1}</div>
            <div className="result">
              <ul>
                <li>{apartment.name}</li>
                <li>${apartment.sharedRent[0]}/mo</li>
              </ul>
            </div>
          </div>
        </Link>
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
