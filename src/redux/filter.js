import {getApartments} from "../apartments.js";

const SEARCH = 'aptFilter/SEARCH';
const MALE = 'aptFilter/MALE';
const FEMALE = 'aptFilter/FEMALE';
const PRIVATE = 'aptFilter/PRIVATE';
const SHARED = 'aptFilter/SHARED';
const BEDS = 'aptFilter/BEDS';
const BATHS = 'aptFilter/BATHS';
const LENGTH = 'aptFilter/LENGTH';
const RENT_MIN = 'aptFilter/RENT_MIN';
const RENT_MAX = 'aptFilter/RENT_MAX';
const UTILITIES = 'aptFilter/UTILITIES';
const AMENITIES = 'aptFilter/AMENITIES';
const REMOVE_MALE = 'aptFilter/REMOVE_MALE';
const REMOVE_FEMALE = 'aptFilter/REMOVE_FEMALE';
const REMOVE_PRIVATE = 'aptFilter/REMOVE_PRIVATE';
const REMOVE_SHARED = 'aptFilter/REMOVE_SHARED';
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
    priv: undefined,
    shared: undefined,
    beds: '',
    baths: '',
    len: '',
    min: 1,
    max: '',
    utilities: [],
    amenities: []
  },
  apartments: [],
  numOfApts: 0
}

function filterApartments(toCheck) {
  var filteredItems = getApartments();
  for (var filterItem in toCheck) {
    if (filterItem !== 'srch') {
      var filterValue = toCheck[filterItem];
      if (filterValue) {
        if (Array.isArray(filterValue)) {
          filteredItems = filteredItems.filter(function(item) {
            var hasAllItems = true;
            filterValue.forEach(function(fVal) {
              if (item[filterItem].toString().indexOf(fVal) < 0) {
                hasAllItems = false;
              }
            });
            return hasAllItems;
          });
        } else if (filterItem === 'min') {
          filteredItems = filteredItems.filter(function(item) {
            return checkMin(item, toCheck.len, filterValue, toCheck.priv, toCheck.shared);
          });
        } else if (filterItem === 'max') {
          filteredItems = filteredItems.filter(function(item) {
            return checkMax(item, toCheck.len, filterValue, toCheck.priv, toCheck.shared);
          });
        } else if (filterItem === 'priv' || filterItem === 'shared') {
          filteredItems = filteredItems.filter(function(item) {
            if (toCheck.len.indexOf('Sp') >= 0 || toCheck.len.indexOf('Su') >= 0) {
              if (filterItem === 'priv') {
                return item.spSuPriv === filterValue;
              } else {
                return item.spSuShared === filterValue;
              }
            } else if (toCheck.len.indexOf('F') >= 0 || toCheck.len.indexOf('W') >= 0) {
              if (filterItem === 'priv') {
                return item.fwPriv === filterValue;
              } else {
                return item.fwShared === filterValue;
              }
            } else {
              if (filterItem === 'priv') {
                return item.yrPriv === filterValue;
              } else {
                return item.yrShared === filterValue;
              }
            }
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

function checkMin(item, len, min, priv, shared) {
  if (len) {
    var isAboveMin = false;
    if (len.indexOf('Sp') >= 0 || len.indexOf('Su') >= 0) {
      if (priv) {
        if (item.spSuPrivateRent.length > 0) {
          if (item.spSuPrivateRent[0] >= min) {
            item.displayRate = item.spSuPrivateRent[0];
            isAboveMin = true;
          }
        }
      }
      if (shared) {
        if (item.spSuSharedRent.length > 0) {
          if (item.spSuSharedRent[0] >= min) {
            item.displayRate = item.spSuSharedRent[0];
            isAboveMin = true;
          }
        }
      }
      if (!priv && !shared) {
        if (item.spSuPrivateRent.length > 0) {
          if (item.spSuPrivateRent[0] >= min) {
            item.displayRate = item.spSuPrivateRent[0];
            isAboveMin = true;
          }
        }
        if (item.spSuSharedRent.length > 0) {
          if (item.spSuSharedRent[0] >= min) {
            item.displayRate = item.spSuSharedRent[0];
            isAboveMin = true;
          }
        }
      }
    } else if (len.indexOf('F') >= 0 || len.indexOf('W') >= 0) {
      if (priv) {
        if (item.fwPrivateRent.length > 0) {
            if (item.fwPrivateRent[0] >= min) {
            item.displayRate = item.fwPrivateRent[0];
            isAboveMin = true;
          }
        }
      }
      if (shared) {
        if (item.fwSharedRent.length > 0) {
          if (item.fwSharedRent[0] >= min) {
            item.displayRate = item.fwSharedRent[0];
            isAboveMin = true;
          }
        }
      }
      if (!priv && !shared) {
        if (item.fwPrivateRent.length > 0) {
            if (item.fwPrivateRent[0] >= min) {
            item.displayRate = item.fwPrivateRent[0];
            isAboveMin = true;
          }
        }
        if (item.fwSharedRent.length > 0) {
          if (item.fwSharedRent[0] >= min) {
            item.displayRate = item.fwSharedRent[0];
            isAboveMin = true;
          }
        }
      }
    } else {
      if (priv) {
        if (item.yrPrivateRent.length > 0) {
          if (item.yrPrivateRent[0] >= min) {
            item.displayRate = item.yrPrivateRent[0];
            isAboveMin = true;
          }
        }
      }
      if (shared) {
        if (item.yrSharedRent.length > 0) {
          if (item.yrSharedRent[0] >= min) {
            item.displayRate = item.yrSharedRent[0];
            isAboveMin = true;
          }
        }
      }
      if (!priv && !shared) {
        if (item.yrPrivateRent.length > 0) {
          if (item.yrPrivateRent[0] >= min) {
            item.displayRate = item.yrPrivateRent[0];
            isAboveMin = true;
          }
        }
        if (item.yrSharedRent.length > 0) {
          if (item.yrSharedRent[0] >= min) {
            item.displayRate = item.yrSharedRent[0];
            isAboveMin = true;
          }
        }
      }
    }
    return isAboveMin;
  } else {
    var isAboveMin = false;
    if (priv) {
      if (item.yrPrivateRent.length > 0) {
        if (item.yrPrivateRent[0] >= min) {
          item.displayRate = item.yrPrivateRent[0];
          isAboveMin = true;
        }
      }
      if (item.fwPrivateRent.length > 0) {
        if (item.fwPrivateRent[0] >= min) {
          item.displayRate = item.fwPrivateRent[0];
          isAboveMin = true;
        }
      }
      if (item.spSuPrivateRent.length > 0) {
        if (item.spSuPrivateRent[0] >= min) {
          item.displayRate = item.spSuPrivateRent[0];
          isAboveMin = true;
        }
      }
    }
    if (shared) {
      if (item.yrSharedRent.length > 0) {
        if (item.yrSharedRent[0] >= min) {
          item.displayRate = item.yrSharedRent[0];
          isAboveMin = true;
        }
      }
      if (item.fwSharedRent.length > 0) {
        if (item.fwSharedRent[0] >= min) {
          item.displayRate = item.fwSharedRent[0];
          isAboveMin = true;
        }
      }
      if (item.spSuSharedRent.length > 0) {
        if (item.spSuSharedRent[0] >= min) {
          item.displayRate = item.spSuSharedRent[0];
          isAboveMin = true;
        }
      }
    }
    if (!priv && !shared) {
      if (item.yrPrivateRent.length > 0) {
        if (item.yrPrivateRent[0] >= min) {
          item.displayRate = item.yrPrivateRent[0];
          isAboveMin = true;
        }
      }
      if (item.fwPrivateRent.length > 0) {
        if (item.fwPrivateRent[0] >= min) {
          item.displayRate = item.fwPrivateRent[0];
          isAboveMin = true;
        }
      }
      if (item.spSuPrivateRent.length > 0) {
        if (item.spSuPrivateRent[0] >= min) {
          item.displayRate = item.spSuPrivateRent[0];
          isAboveMin = true;
        }
      }
      if (item.yrSharedRent.length > 0) {
        if (item.yrSharedRent[0] >= min) {
          item.displayRate = item.yrSharedRent[0];
          isAboveMin = true;
        }
      }
      if (item.fwSharedRent.length > 0) {
        if (item.fwSharedRent[0] >= min) {
          item.displayRate = item.fwSharedRent[0];
          isAboveMin = true;
        }
      }
      if (item.spSuSharedRent.length > 0) {
        if (item.spSuSharedRent[0] >= min) {
          item.displayRate = item.spSuSharedRent[0];
          isAboveMin = true;
        }
      }
    }
    return isAboveMin;
  }

}

function checkMax(item, len, max, priv, shared) {

  if (len) {
    var isBelowMax = false;
    if (len.indexOf('Sp') >= 0 || len.indexOf('Su') >= 0) {
      if (priv) {
        if (item.spSuPrivateRent.length > 0) {
          if (item.spSuPrivateRent[item.spSuPrivateRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
      if (shared) {
        if (item.spSuSharedRent.length > 0) {
          if (item.spSuSharedRent[item.spSuSharedRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
      if (!priv && !shared) {
        if (item.spSuPrivateRent.length > 0) {
          if (item.spSuPrivateRent[item.spSuPrivateRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
        if (item.spSuSharedRent.length > 0) {
          if (item.spSuSharedRent[item.spSuSharedRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
    } else if (len.indexOf('F') >= 0 || len.indexOf('W') >= 0) {
      if (priv) {
        if (item.fwPrivateRent.length > 0) {
          if (item.fwPrivateRent[item.fwPrivateRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
      if (shared) {
        if (item.fwSharedRent.length > 0) {
          if (item.fwSharedRent[item.fwSharedRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
      if (!priv && !shared) {
        if (item.fwPrivateRent.length > 0) {
          if (item.fwPrivateRent[item.fwPrivateRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
        if (item.fwSharedRent.length > 0) {
          if (item.fwSharedRent[item.fwSharedRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
    } else {
      if (priv) {
        if (item.yrPrivateRent.length > 0) {
          if (item.yrPrivateRent[item.yrPrivateRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
      if (shared) {
        if (item.yrSharedRent.length > 0) {
          if (item.yrSharedRent[item.yrSharedRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
      if (!priv && !shared) {
        if (item.yrPrivateRent.length > 0) {
          if (item.yrPrivateRent[item.yrPrivateRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
        if (item.yrSharedRent.length > 0) {
          if (item.yrSharedRent[item.yrSharedRent.length - 1] <= max) {
            isBelowMax = true;
          }
        }
      }
    }
    return isBelowMax;
  } else {
    var isBelowMax = false;
    if (priv) {
      if (item.yrPrivateRent.length > 0) { if (item.yrPrivateRent[item.yrPrivateRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.fwPrivateRent.length > 0) { if (item.fwPrivateRent[item.fwPrivateRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.spSuPrivateRent.length > 0) { if (item.spSuPrivateRent[item.spSuPrivateRent.length - 1] <= max) { isBelowMax = true; } }
    }
    if (shared) {
      if (item.yrSharedRent.length > 0) { if (item.yrSharedRent[item.yrSharedRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.fwSharedRent.length > 0) { if (item.fwSharedRent[item.fwSharedRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.spSuSharedRent.length > 0) { if (item.spSuSharedRent[item.spSuSharedRent.length - 1] <= max) { isBelowMax = true; } }
    }
    if (!priv && !shared) {
      if (item.yrPrivateRent.length > 0) { if (item.yrPrivateRent[item.yrPrivateRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.fwPrivateRent.length > 0) { if (item.fwPrivateRent[item.fwPrivateRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.spSuPrivateRent.length > 0) { if (item.spSuPrivateRent[item.spSuPrivateRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.yrSharedRent.length > 0) { if (item.yrSharedRent[item.yrSharedRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.fwSharedRent.length > 0) { if (item.fwSharedRent[item.fwSharedRent.length - 1] <= max) { isBelowMax = true; } }
      if (item.spSuSharedRent.length > 0) { if (item.spSuSharedRent[item.spSuSharedRent.length - 1] <= max) { isBelowMax = true; } }
    }
    return isBelowMax;
  }

}

function searchApartments(srch, toCheck) {
  var apartments = filterApartments(toCheck);
  var BreakException = {};
  var filteredItems = [];
  srch = srch.toLowerCase();
  apartments.forEach(function(apartment) {
    try {
      Object.keys(apartment).forEach(function(key) {
        var infoToSearch = apartment[key].toString().toLowerCase();
        if (infoToSearch.indexOf(srch) >= 0) {
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
  var newApartments, newState;
  switch (action.type) {
    case SEARCH:
      newState = Object.assign({}, state);
      newState.filterBy.srch = action.payload;
      newApartments = searchApartments(action.payload, newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case MALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case FEMALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case PRIVATE:
      newState = Object.assign({}, state);
      newState.filterBy.priv = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case SHARED:
      newState = Object.assign({}, state);
      newState.filterBy.shared = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case BEDS:
      newState = Object.assign({}, state);
      newState.filterBy.beds = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case BATHS:
      newState = Object.assign({}, state);
      newState.filterBy.baths = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case LENGTH:
      newState = Object.assign({}, state);
      newState.filterBy.len = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case RENT_MIN:
      newState = Object.assign({}, state);
      newState.filterBy.min = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case RENT_MAX:
      newState = Object.assign({}, state);
      newState.filterBy.max = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case UTILITIES:
      newState = Object.assign({}, state);
      newState.filterBy.utilities.push(action.payload);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case AMENITIES:
      newState = Object.assign({}, state);
      newState.filterBy.amenities.push(action.payload);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_MALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_FEMALE:
      newState = Object.assign({}, state);
      newState.filterBy.gender = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_PRIVATE:
      newState = Object.assign({}, state);
      newState.filterBy.priv = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_SHARED:
      newState = Object.assign({}, state);
      newState.filterBy.shared = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_BEDS:
      newState = Object.assign({}, state);
      newState.filterBy.beds = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_BATHS:
      newState = Object.assign({}, state);
      newState.filterBy.baths = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_LENGTH:
      newState = Object.assign({}, state);
      newState.filterBy.len = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_RENT_MIN:
      newState = Object.assign({}, state);
      newState.filterBy.min = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_RENT_MAX:
      newState = Object.assign({}, state);
      newState.filterBy.max = action.payload;
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_UTILITIES:
      newState = Object.assign({}, state);
      newState.filterBy.utilities.splice(newState.filterBy.utilities.indexOf(action.payload), 1);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
    case REMOVE_AMENITIES:
      newState = Object.assign({}, state);
      newState.filterBy.amenities.splice(newState.filterBy.amenities.indexOf(action.payload), 1);
      newApartments = filterApartments(newState.filterBy);
      newState.apartments = newApartments;
      newState.numOfApts = newApartments.length;
      return Object.assign({}, state, newState);
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

export function filterPrivate(priv) {
  return {
    type: PRIVATE,
    payload: priv
  }
}

export function filterShared(shared) {
  return {
    type: SHARED,
    payload: shared
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

export function filterLength(len) {
  return {
    type: LENGTH,
    payload: len
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

export function removePrivate(priv) {
  return {
    type: REMOVE_PRIVATE,
    payload: priv
  }
}

export function removeShared(shared) {
  return {
    type: REMOVE_SHARED,
    payload: shared
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

export function removeLength(len) {
  return {
    type: REMOVE_LENGTH,
    payload: len
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
