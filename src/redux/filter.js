import {getApartments} from "../apartments.js";

const SEARCH = 'aptFilter/SEARCH';
const MALE = 'aptFilter/MALE';
const FEMALE = 'aptFilter/FEMALE'
const BEDS = 'aptFilter/BEDS';
const BATHS = 'aptFilter/BATHS';
const LENGTH = 'aptFilter/LENGTH';
const RENT_MIN = 'aptFilter/RENT_MIN';
const RENT_MAX = 'aptFilter/RENT_MAX';
const UTILITIES = 'aptFilter/UTILITIES';
const AMENITIES = 'aptFilter/AMENITIES';
const REMOVE_MALE = 'aptFilter/REMOVE_MALE';
const REMOVE_FEMALE = 'aptFilter/REMOVE_FEMALE'
const REMOVE_BEDS = 'aptFilter/REMOVE_BEDS';
const REMOVE_BATHS = 'aptFilter/REMOVE_BATHS';
const REMOVE_LENGTH = 'aptFilter/REMOVE_LENGTH';
const REMOVE_RENT_MIN = 'aptFilter/REMOVE_RENT_MIN';
const REMOVE_RENT_MAX = 'aptFilter/REMOVE_RENT_MAX';
const REMOVE_UTILITIES = 'aptFilter/REMOVE_UTILITIES';
const REMOVE_AMENITIES = 'aptFilter/REMOVE_AMENITIES';

const initialState = {
  filterBy: {
    srch: '',
    gender: '',
    beds: '',
    baths: '',
    length: '',
    min: '',
    max: '',
    utilities: [],
    amenities: []
  },
  apartments: []
}

function filterApartments(toCheck) {
  var filteredItems = getApartments();
  for (var filterItem in toCheck) {
    if (filterItem !== 'srch') {
      var filterValue = toCheck[filterItem];
      if (filterValue) {
        if (Array.isArray(filterValue)) {
          var hasAllItems = true;
          filteredItems = filteredItems.filter(function(item) {
            filterValue.forEach(function(fVal) {
              if (item[filterItem].toString().indexOf(fVal) < 0) {
                hasAllItems = false;
              }
            });
            return hasAllItems;
          });
        } else {
          filteredItems = filteredItems.filter(function(item) {
            return item[filterItem].toString().indexOf(filterValue) >= 0;
          });
        }
      }
    } else {
      filteredItems = searchApartments(toCheck[filterItem]);
    }
  }
  return filteredItems;
}

function searchApartments(srch, toCheck) {
  var apartments = filterApartments(toCheck);
  var BreakException = {};
  var filteredItems = [];
  apartments.forEach(function(apartment) {
    try {
      Object.keys(apartment).forEach(function(key) {
        if (apartment[key].toString().indexOf(srch) >= 0) {
          filteredItems.unshift(apartment);
          throw BreakException;
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  });
  return filteredItems;
}

export default function reducer(state=initialState, action) {
  var newApartments, newState, newFilterBy;
  switch (action.type) {
    case SEARCH:
      newState = Object.assign({}, state);
      newState.filterBy.srch = action.payload;
      newApartments = searchApartments(action.payload, newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case MALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case FEMALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case BEDS:
      newState = Object.assign({}, state);
      newState.filterBy.beds = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case BATHS:
      newState = Object.assign({}, state);
      newState.filterBy.baths = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case LENGTH:
      newState = Object.assign({}, state);
      newState.filterBy.length = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case RENT_MIN:
      newState = Object.assign({}, state);
      newState.filterBy.min = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case RENT_MAX:
      newState = Object.assign({}, state);
      newState.filterBy.max = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case UTILITIES:
      newState = Object.assign({}, state);
      newState.filterBy.utilities.push(action.payload);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case AMENITIES:
      newState = Object.assign({}, state);
      newState.filterBy.amenities.push(action.payload);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_MALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_FEMALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_BEDS:
      newState = Object.assign({}, state);
      newState.filterBy.beds = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_BATHS:
      newState = Object.assign({}, state);
      newState.filterBy.baths = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_LENGTH:
      newState = Object.assign({}, state);
      newState.filterBy.length = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_RENT_MIN:
      newState = Object.assign({}, state);
      newState.filterBy.min = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_RENT_MAX:
      newState = Object.assign({}, state);
      newState.filterBy.max = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_UTILITIES:
      newState = Object.assign({}, state);
      newState.filterBy.utilities.splice(newState.filterBy.utilities.indexOf(action.payload), 1);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    case REMOVE_AMENITIES:
      newState = Object.assign({}, state);
      newState.filterBy.amenities.splice(newState.filterBy.amenities.indexOf(action.payload), 1);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      return Object.assign({}, newState);
    default: return state;
  }
}

export function filterName(srch) {
  return {
    type: SEARCH,
    payload: srch
  }
}

export function filterMale(gender) {
  return {
    type: MALE,
    payload: 'M'
  }
}

export function filterFemale(gender) {
  return {
    type: FEMALE,
    payload: 'F'
  }
}

export function filterBeds(beds) {
  return {
    type: BEDS,
    payload: beds
  }
}

export function filterBaths(baths) {
  return {
    type: BATHS,
    payload: baths
  }
}

export function filterLength(length) {
  return {
    type: LENGTH,
    payload: length
  }
}

export function filterMin(min) {
  return {
    type: RENT_MIN,
    payload: min
  }
}

export function filterMax(max) {
  return {
    type: RENT_MAX,
    payload: max
  }
}

export function filterUtilities(utilities) {
  return {
    type: UTILITIES,
    payload: utilities
  }
}

export function filterAmenities(amenities) {
  return {
    type: AMENITIES,
    payload: amenities
  }
}

export function removeMale(gender) {
  return {
    type: REMOVE_MALE,
    payload: ''
  }
}

export function removeFemale(gender) {
  return {
    type: REMOVE_FEMALE,
    payload: ''
  }
}

export function removeBeds(beds) {
  return {
    type: REMOVE_BEDS,
    payload: beds
  }
}

export function removeBaths(baths) {
  return {
    type: REMOVE_BATHS,
    payload: baths
  }
}

export function removeLength(length) {
  return {
    type: REMOVE_LENGTH,
    payload: length
  }
}

export function removeMin(min) {
  return {
    type: REMOVE_RENT_MIN,
    payload: min
  }
}

export function removeMax(max) {
  return {
    type: REMOVE_RENT_MAX,
    payload: max
  }
}

export function removeUtilities(utilities) {
  return {
    type: REMOVE_UTILITIES,
    payload: utilities
  }
}

export function removeAmenities(amenities) {
  return {
    type: REMOVE_AMENITIES,
    payload: amenities
  }
}
