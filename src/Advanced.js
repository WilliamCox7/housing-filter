import React, { Component } from 'react';

class Advanced extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cable: 'default',
      electricity: 'default',
      gas: 'default',
      internet: 'default',
      water: 'default',
      airConditioning: 'default',
      dishwasher: 'default',
      disposal: 'default',
      microwave: 'default',
      laundryFacility: 'default',
      washerDryer: 'default',
      ethernet: 'default',
      pool: 'default',
      hotTub: 'default',
      gymEquipment: 'default',
      clubhouse: 'default',
      extraStorage: 'default',
      recyclingBins: 'default',
      adaAccessibility: 'default',
      coveredParking: 'default',
      nearRydeUTA: 'default',
      male: 'default toggle-button',
      female: 'default toggle-button'
    }
  }

  setButActive(button) {
    var obj = {};
    if (this.state[button].indexOf('default') >= 0) {
      if (button === 'male' || button === 'female') {
        obj[button] = 'button-primary toggle-button';
      } else {
        obj[button] = 'button-primary';
      }
      this.setState(obj);
    } else {
      if (button === 'male' || button === 'female') {
        obj[button] = 'default toggle-button';
      } else {
        obj[button] = 'default';
      }
      this.setState(obj);
    }
  }

  render() {
    return (
      <div>
        <div id="first-mid" className="App-content-mid">
          <div className="content-group-1">
            <button className={this.state.male} onClick={this.setButActive.bind(this, 'male')}><p>M</p></button>
            <button className={this.state.female} onClick={this.setButActive.bind(this, 'female')}><p>F</p></button>
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
            <button className={this.state.cable} onClick={this.setButActive.bind(this, 'cable')}><p>Cable TV</p></button>
            <button className={this.state.electricity} onClick={this.setButActive.bind(this, 'electricity')}><p>Electricity</p></button>
            <button className={this.state.gas} onClick={this.setButActive.bind(this, 'gas')}><p>Gas</p></button>
            <button className={this.state.internet} onClick={this.setButActive.bind(this, 'internet')}><p>Internet</p></button>
            <button className={this.state.water} onClick={this.setButActive.bind(this, 'water')}><p>Water</p></button>
          </div>
        </div>
        <div className="App-content-mid">
          <div className="content-group">
            <span>Amenities:</span>
            <button className={this.state.airConditioning} onClick={this.setButActive.bind(this, 'airConditioning')}><p>Air Conditioning</p></button>
            <button className={this.state.dishwasher} onClick={this.setButActive.bind(this, 'dishwasher')}><p>Dishwasher</p></button>
            <button className={this.state.disposal} onClick={this.setButActive.bind(this, 'disposal')}><p>Disposal</p></button>
            <button className={this.state.microwave} onClick={this.setButActive.bind(this, 'microwave')}><p>Microwave</p></button>
            <button className={this.state.laundryFacility} onClick={this.setButActive.bind(this, 'laundryFacility')}><p>Laundry Facility</p></button>
            <button className={this.state.washerDryer} onClick={this.setButActive.bind(this, 'washerDryer')}><p>Washer/Dryer</p></button>
            <button className={this.state.ethernet} onClick={this.setButActive.bind(this, 'ethernet')}><p>Ethernet</p></button>
            <button className={this.state.pool} onClick={this.setButActive.bind(this, 'pool')}><p>Pool</p></button>
            <button className={this.state.hotTub} onClick={this.setButActive.bind(this, 'hotTub')}><p>Hot Tub</p></button>
            <button className={this.state.gymEquipment} onClick={this.setButActive.bind(this, 'gymEquipment')}><p>Gym Equipment</p></button>
            <button className={this.state.clubhouse} onClick={this.setButActive.bind(this, 'clubhouse')}><p>Clubhouse</p></button>
            <button className={this.state.extraStorage} onClick={this.setButActive.bind(this, 'extraStorage')}><p>Extra Storage</p></button>
            <button className={this.state.recyclingBins} onClick={this.setButActive.bind(this, 'recyclingBins')}><p>Recycling Bins</p></button>
            <button className={this.state.adaAccessibility} onClick={this.setButActive.bind(this, 'adaAccessibility')}><p>ADA Accessible</p></button>
            <button className={this.state.coveredParking} onClick={this.setButActive.bind(this, 'coveredParking')}><p>Covered Parking</p></button>
            <button className={this.state.nearRydeUTA} onClick={this.setButActive.bind(this,'nearRydeUTA')}><p>Near Ryde/UTA</p></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Advanced;
