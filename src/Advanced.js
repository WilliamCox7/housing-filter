import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterMale} from './redux/filter';
import {filterFemale} from './redux/filter';
import {filterPrivate} from './redux/filter';
import {filterShared} from './redux/filter';
import {filterBeds} from './redux/filter';
import {filterBaths} from './redux/filter';
import {filterLength} from './redux/filter';
import {filterMin} from './redux/filter';
import {filterMax} from './redux/filter';
import {filterUtilities} from './redux/filter';
import {filterAmenities} from './redux/filter';
import {removeMale} from './redux/filter';
import {removeFemale} from './redux/filter';
import {removePrivate} from './redux/filter';
import {removeShared} from './redux/filter';
import {removeBeds} from './redux/filter';
import {removeBaths} from './redux/filter';
import {removeLength} from './redux/filter';
import {removeMin} from './redux/filter';
import {removeMax} from './redux/filter';
import {removeUtilities} from './redux/filter';
import {removeAmenities} from './redux/filter';

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
      female: 'default toggle-button',
      priv: 'default',
      shared: 'default'
    }
    this.makeSelectionBeds = this.makeSelectionBeds.bind(this);
    this.makeSelectionBaths = this.makeSelectionBaths.bind(this);
    this.makeSelectionLength = this.makeSelectionLength.bind(this);
    this.findRangeMin = this.findRangeMin.bind(this);
    this.findRangeMax = this.findRangeMax.bind(this);
  }

  setButActive(button, filt) {
    var obj = {};
    if (this.state[button].indexOf('default') >= 0) {
      if (button === 'male' || button === 'female') {
        obj[button] = 'button-primary toggle-button';
      } else {
        obj[button] = 'button-primary';
      }
      switch (filt) {
        case 'male': this.props.filterMale(button); break;
        case 'female': this.props.filterFemale(button); break;
        case 'priv': this.props.filterPrivate(true); break;
        case 'shared': this.props.filterShared(true); break;
        case 'beds': this.props.filterBeds(button); break;
        case 'baths': this.props.filterBaths(button); break;
        case 'length': this.props.filterLength(button); break;
        case 'min': this.props.filterMin(button); break;
        case 'max': this.props.filterMax(button); break;
        case 'utilities': this.props.filterUtilities(button); break;
        case 'amenities': this.props.filterAmenities(button); break;
        default: break;
      }
      this.setState(obj);
    } else {
      if (button === 'male' || button === 'female') {
        obj[button] = 'default toggle-button';
      } else {
        obj[button] = 'default';
      }
      switch (filt) {
        case 'male': this.props.removeMale(''); break;
        case 'female': this.props.removeFemale(''); break;
        case 'priv': this.props.removePrivate(false); break;
        case 'shared': this.props.removeShared(false); break;
        case 'beds': this.props.removeBeds(''); break;
        case 'baths': this.props.removeBaths(''); break;
        case 'length': this.props.removeLength(''); break;
        case 'min': this.props.removeMin(''); break;
        case 'max': this.props.removeMax(''); break;
        case 'utilities': this.props.removeUtilities(button); break;
        case 'amenities': this.props.removeAmenities(button); break;
        default: break;
      }
      this.setState(obj);
    }
  }

  makeSelectionBeds(event) {
    this.props.filterBeds(event.target.value);
  }

  makeSelectionBaths(event) {
    this.props.filterBaths(event.target.value);
  }

  makeSelectionLength(event) {
    this.props.filterLength(event.target.value);
  }

  findRangeMin(event) {
    this.props.filterMin(event.target.value);
  }

  findRangeMax(event) {
    this.props.filterMax(event.target.value);
  }

  render() {
    return (
      <div>
        <div id="first-mid" className="App-content-mid">
          <div className="content-group-1">
            <button className={this.state.male} onClick={this.setButActive.bind(this, 'male', 'male')}><p>M</p></button>
            <button className={this.state.female} onClick={this.setButActive.bind(this, 'female', 'female')}><p>F</p></button>
          </div>
          <div className="content-group-1">
            <span>Beds:</span>
            <select onChange={this.makeSelectionBeds}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="content-group-1">
            <span>Baths:</span>
            <select onChange={this.makeSelectionBaths}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="content-group-1">
            <span>Length:</span>
            <select onChange={this.makeSelectionLength}>
              <option value=""></option>
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
            <input type="text" placeholder="min" onChange={this.findRangeMin}/>
            <input type="text" placeholder="max" onChange={this.findRangeMax}/>
          </div>
          <div className="content-group-1">
            <button className={this.state.priv} onClick={this.setButActive.bind(this, 'priv', 'priv')}><p>Private</p></button>
            <button className={this.state.shared} onClick={this.setButActive.bind(this, 'shared', 'shared')}><p>Shared</p></button>
          </div>
        </div>
        <div className="App-content-mid">
          <div className="content-group">
            <span>Utilities:</span>
            <button className={this.state.cable} onClick={this.setButActive.bind(this, 'cable', 'utilities')}><p>Cable TV</p></button>
            <button className={this.state.electricity} onClick={this.setButActive.bind(this, 'electricity', 'utilities')}><p>Electricity</p></button>
            <button className={this.state.gas} onClick={this.setButActive.bind(this, 'gas', 'utilities')}><p>Gas</p></button>
            <button className={this.state.internet} onClick={this.setButActive.bind(this, 'internet', 'utilities')}><p>Internet</p></button>
            <button className={this.state.water} onClick={this.setButActive.bind(this, 'water', 'utilities')}><p>Water</p></button>
          </div>
        </div>
        <div className="App-content-mid">
          <div className="content-group">
            <span>Amenities:</span>
            <button className={this.state.airConditioning} onClick={this.setButActive.bind(this, 'airConditioning', 'amenities')}><p>Air Conditioning</p></button>
            <button className={this.state.dishwasher} onClick={this.setButActive.bind(this, 'dishwasher', 'amenities')}><p>Dishwasher</p></button>
            <button className={this.state.disposal} onClick={this.setButActive.bind(this, 'disposal', 'amenities')}><p>Disposal</p></button>
            <button className={this.state.microwave} onClick={this.setButActive.bind(this, 'microwave', 'amenities')}><p>Microwave</p></button>
            <button className={this.state.laundryFacility} onClick={this.setButActive.bind(this, 'laundryFacility', 'amenities')}><p>Laundry Facility</p></button>
            <button className={this.state.washerDryer} onClick={this.setButActive.bind(this, 'washerDryer', 'amenities')}><p>Washer/Dryer</p></button>
            <button className={this.state.ethernet} onClick={this.setButActive.bind(this, 'ethernet', 'amenities')}><p>Ethernet</p></button>
            <button className={this.state.pool} onClick={this.setButActive.bind(this, 'pool', 'amenities')}><p>Pool</p></button>
            <button className={this.state.hotTub} onClick={this.setButActive.bind(this, 'hotTub', 'amenities')}><p>Hot Tub</p></button>
            <button className={this.state.gymEquipment} onClick={this.setButActive.bind(this, 'gymEquipment', 'amenities')}><p>Gym Equipment</p></button>
            <button className={this.state.clubhouse} onClick={this.setButActive.bind(this, 'clubhouse', 'amenities')}><p>Clubhouse</p></button>
            <button className={this.state.extraStorage} onClick={this.setButActive.bind(this, 'extraStorage', 'amenities')}><p>Extra Storage</p></button>
            <button className={this.state.recyclingBins} onClick={this.setButActive.bind(this, 'recyclingBins', 'amenities')}><p>Recycling Bins</p></button>
            <button className={this.state.adaAccessibility} onClick={this.setButActive.bind(this, 'adaAccessibility', 'amenities')}><p>ADA Accessible</p></button>
            <button className={this.state.coveredParking} onClick={this.setButActive.bind(this, 'coveredParking', 'amenities')}><p>Covered Parking</p></button>
            <button className={this.state.nearRydeUTA} onClick={this.setButActive.bind(this,'nearRydeUTA', 'amenities')}><p>Near Ryde/UTA</p></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  filterMale: filterMale,
  filterFemale: filterFemale,
  filterPrivate: filterPrivate,
  filterShared: filterShared,
  filterBeds: filterBeds,
  filterBaths: filterBaths,
  filterLength: filterLength,
  filterMin: filterMin,
  filterMax: filterMax,
  filterUtilities: filterUtilities,
  filterAmenities: filterAmenities,
  removeMale: removeMale,
  removeFemale: removeFemale,
  removePrivate: removePrivate,
  removeShared: removeShared,
  removeBeds: removeBeds,
  removeBaths: removeBaths,
  removeLength: removeLength,
  removeMin: removeMin,
  removeMax: removeMax,
  removeUtilities: removeUtilities,
  removeAmenities: removeAmenities
}

export default connect(null, mapDispatchToProps)(Advanced);
