import React, { Component } from 'react';
import backButton from './backarrow.svg';
import {connect} from 'react-redux';
import {getApartments} from './apartments.js';
import {Link} from 'react-router';

class Apartment extends Component {

  render() {
    var apts = getApartments();
    var currentApt = apts.map((apartment, i) => {
      if (this.props.params.name === apartment.name.split(" ").join("").toLowerCase()) {
        var displayObj = {
          male: 'default toggle-button',
          female: 'default toggle-button',
          priv: 'default',
          shared: 'default',
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
          nearRydeUTA: 'default'
        }
        for (var prop in displayObj) {
          if (prop === 'male' || prop === 'female') {
            if (apartment.gender.toString().indexOf('M') >= 0) { displayObj.male = 'button-primary toggle-button'; }
            if (apartment.gender.toString().indexOf('F') >= 0) { displayObj.female = 'button-primary toggle-button'; }
          } else if (prop === 'cable' || prop === 'electricity' || prop === 'gas' || prop === 'internet' || prop === 'water') {
            if (apartment.utilities.toString().indexOf(prop) >= 0) { displayObj[prop] = 'button-primary'; }
          } else if (prop === 'priv' || prop === 'shared') {
            if (apartment[prop]) { displayObj[prop] = 'button-primary'; }
          } else {
            if (apartment.amenities.toString().indexOf(prop) >= 0) { displayObj[prop] = 'button-primary'; }
          }
        }
        return (
          <div key={i} className="App container">
            <div className="App-header">
              <span>{apartment.name}</span>
            </div>
            <div className="contact-info">
              <Link id="backbutton" to="/"><img src={backButton} /></Link>
              <span>{apartment.address}</span>
              <span>{apartment.phone}</span>
              <span><a target="_blank" href={apartment.website}>{apartment.website}</a></span>
            </div>
            <div id="first-mid" className="App-content-mid">
              <div className="content-group-1">
                <button className={displayObj.male}><p>M</p></button>
                <button className={displayObj.female}><p>F</p></button>
              </div>
              <div className="content-group-1">
                <span>Beds:</span><span className="spanResult">{apartment.beds}</span>
              </div>
              <div className="content-group-1">
                <span>Baths:</span><span className="spanResult">{apartment.baths}</span>
              </div>
              <div className="content-group-1">
                <span>Length:</span><span className="spanResult">{apartment.len}</span>
              </div>
              <div className="content-group-1 short-input">
                <span>Rent:</span><span className="spanResult">${apartment.sharedRent[0]} - ${apartment.sharedRent[1]}/mo</span>
              </div>
              <div className="content-group-1">
                <button className={displayObj.priv}><p>Private</p></button>
                <button className={displayObj.shared}><p>Shared</p></button>
              </div>
            </div>
            <div className="App-content-mid">
              <div className="content-group">
                <span>Utilities:</span>
                <button className={displayObj.cable}><p>Cable TV</p></button>
                <button className={displayObj.electricity}><p>Electricity</p></button>
                <button className={displayObj.gas}><p>Gas</p></button>
                <button className={displayObj.internet}><p>Internet</p></button>
                <button className={displayObj.water}><p>Water</p></button>
              </div>
            </div>
            <div className="App-content-mid">
              <div className="content-group">
                <span>Amenities:</span>
                <button className={displayObj.airConditioning}><p>Air Conditioning</p></button>
                <button className={displayObj.dishwasher}><p>Dishwasher</p></button>
                <button className={displayObj.disposal}><p>Disposal</p></button>
                <button className={displayObj.microwave}><p>Microwave</p></button>
                <button className={displayObj.laundryFacility}><p>Laundry Facility</p></button>
                <button className={displayObj.washerDryer}><p>Washer/Dryer</p></button>
                <button className={displayObj.ethernet}><p>Ethernet</p></button>
                <button className={displayObj.pool}><p>Pool</p></button>
                <button className={displayObj.hotTub}><p>Hot Tub</p></button>
                <button className={displayObj.gymEquipment}><p>Gym Equipment</p></button>
                <button className={displayObj.clubhouse}><p>Clubhouse</p></button>
                <button className={displayObj.extraStorage}><p>Extra Storage</p></button>
                <button className={displayObj.recyclingBins}><p>Recycling Bins</p></button>
                <button className={displayObj.adaAccessibility}><p>ADA Accessible</p></button>
                <button className={displayObj.coveredParking}><p>Covered Parking</p></button>
                <button className={displayObj.nearRydeUTA}><p>Near Ryde/UTA</p></button>
              </div>
            </div>
            <div id="last-mid" className="App-content-mid">
              {apartment.comment}
            </div>
          </div>
        )
      }
    });
    return (
      <div>{currentApt}</div>
    )
  }
}

export default connect()(Apartment);
