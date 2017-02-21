import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Results extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dis1: 0,
      dis2: 10
    }
    this.nextTen = this.nextTen.bind(this);
    this.prevTen = this.prevTen.bind(this);
  }

  nextTen() {
    var newDis1, newDis2;
    var lastNewDis2 = this.state.dis2;
    if (this.state.dis2 === this.props.numOfApts) {
      newDis1 = 0; newDis2 = 10;
    } else {
      newDis1 = this.state.dis1 + 10;
      newDis2 = this.state.dis2 + 10;
    }
    if (newDis2 > this.props.numOfApts) {
      var tempDis = this.props.numOfApts - lastNewDis2;
      newDis1 = this.props.numOfApts - tempDis; newDis2 = this.props.numOfApts;
    }
    this.setState({ dis1: newDis1, dis2: newDis2 });
  }

  prevTen() {
    var newDis1, newDis2;
    var lastNewDis1 = this.state.dis1;
    if (this.state.dis2 - this.state.dis1 !== 10) {
      newDis2 = this.state.dis1;
      newDis1 = newDis2 - 10;
    } else {
      newDis1 = this.state.dis1 - 10;
      newDis2 = this.state.dis2 - 10;
    }
    if (this.state.dis1 === 0) {
      var numArr = this.props.numOfApts.toString().split('');
      var lastNum = Number(numArr[numArr.length - 1]);
      newDis1 = this.props.numOfApts - lastNum; newDis2 = this.props.numOfApts;
    }
    this.setState({ dis1: newDis1, dis2: newDis2 });
  }

  render() {
    var apartments = this.props.apartments.map((apartment, i) => {
        return (
          <Link key={i} to={"apartment/" + apartment.name.split(" ").join("").toLowerCase()}>
            <div className="App-results">
              <div className="result-number">{i+1}</div>
              <div className="result">
                <ul>
                  <li>{apartment.name}</li>
                  <li>${apartment.displayRate}/mo</li>
                </ul>
              </div>
            </div>
          </Link>
        )
    });

    return (
      <div>
        {apartments.slice(this.state.dis1, this.state.dis2)}
        {this.props.numOfApts > 0 ? (
            this.props.numOfApts > 10 ? (
              <div className="next">
                <button className="button-primary" onClick={this.prevTen}><p>Prev</p></button>
                <p>Displaying results {this.state.dis1 + 1} - {this.state.dis2}</p>
                <button className="button-primary" onClick={this.nextTen}><p>Next</p></button>
              </div>
            ) : (
              <div className="all-res">
                <p>Showing All Results</p>
              </div>
            )
        ) : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    apartments: state.apartments,
    numOfApts: state.numOfApts
  }
}

export default connect(mapStateToProps)(Results);
