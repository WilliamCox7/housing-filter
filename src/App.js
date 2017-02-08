import React, { Component } from 'react';
import './normalize.css';
import './skeleton.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <span>BYU Off-Campus Housing Filter</span>
        </div>
        <div className="App-content-beg">
          <input id="main-filter-input" type="text" placeholder="search for housing here..."></input>
        </div>
        <div id="first-mid" className="App-content-mid">
          <div className="content-group-1">
            <button className="toggle-button"><p>M</p></button>
            <button className="toggle-button"><p>F</p></button>
          </div>
          <div className="content-group-1">
            <span>Beds:</span>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="content-group-1">
            <span>Baths:</span>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="content-group-1">
            <span>Length:</span>
            <select>
              <option value="Yr">Yr</option>
              <option value="FW">FW</option>
              <option value="SpSu">SpSu</option>
              <option value="F">F</option>
              <option value="W">W</option>
              <option value="Sp">Sp</option>
              <option value="Su">Su</option>
            </select>
          </div>
          <div className="content-group-1 short-input">
            <span>Rent:</span>
            <input type="text" placeholder="min"/>
            <input type="text" placeholder="max"/>
          </div>
        </div>
        <div className="App-content-mid">
          <div className="content-group">
            <span>Utilities:</span>
            <button><p>Cable TV</p></button>
            <button><p>Electricity</p></button>
            <button><p>Gas</p></button>
            <button><p>Internet</p></button>
            <button><p>Water</p></button>
          </div>
        </div>
        <div className="App-content-mid">
          <div className="content-group">
            <span>Amenities:</span>
            <button><p>Air Conditioning</p></button>
            <button><p>Dishwasher</p></button>
            <button><p>Disposal</p></button>
            <button><p>Microwave</p></button>
            <button><p>Laundry Facility</p></button>
            <button><p>Washer/Dryer</p></button>
            <button><p>Internet Access</p></button>
            <button><p>Ethernet</p></button>
            <button><p>Cable TV</p></button>
            <button><p>Pool</p></button>
            <button><p>Hot Tub</p></button>
            <button><p>Gym Equipment</p></button>
            <button><p>Clubhouse</p></button>
            <button><p>Extra Storage</p></button>
            <button><p>Recycling Bins</p></button>
            <button><p>ADA Accessible</p></button>
            <button><p>Covered Parking</p></button>
            <button><p>Near Ryde/UTA</p></button>
            <button><p>Internet</p></button>
            <button><p>Water</p></button>
          </div>
        </div>
        <div className="App-content-end">
          <span>2 results</span>
          <button className="button-primary" id="main-filter-button">Advanced Filter</button>
        </div>
        <div className="App-results">
          <div className="result-number">1</div>
          <div className="result">
            <ul>
              <li>Liberty Square</li>
              <li>$340/mo</li>
            </ul>
          </div>
        </div>
        <div className="App-results">
          <div className="result-number">2</div>
          <div className="result">
            <ul>
              <li>Centenial Apartments</li>
              <li>$315/mo</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
