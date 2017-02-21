export function getApartments() {
	return apartments.slice();
}

const apartments = [
  {
    "name": "Academy Arms",
    "phone": "801-356-9746",
    "address": "469 N 100 E, 84606",
    "website": "davidjharrisproperties.com",
    "gender": [
      "M"
    ],
    "units": "15",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      275
    ],
    "deposit": 275,
    "nonRefund": "$4.5/mo",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      120
    ],
    "spSuDeposit": 120,
    "spSuNonRefund": "$4.5/mo",
    "utilities": [
      "cable",
      "electricity"
    ],
    "amenities": [
      "airConditioning",
      "disposal",
      "laundryFacility"
    ],
    "comment": "We have both Comcast and Google Fiber"
  },
  {
    "name": "Allred Apts",
    "phone": "801-376-3523",
    "address": "130, 150 E 700 N, 84601",
    "website": "allredapartments.com",
    "gender": [
      "W"
    ],
    "units": "16",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      315
    ],
    "deposit": 225,
    "nonRefund": "$6/mo",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      140
    ],
    "spSuDeposit": 175,
    "spSuNonRefund": "$4/mo",
    "utilities": [
      "cable",
      "electricity",
      "$25 fixed"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "extraStorage",
      "nearRydeUTA"
    ],
    "comment": "Great location, new kitchens and fast maintence"
  },
  {
    "name": "Alpine Village",
    "phone": "801-623-6093",
    "address": "1378 N Freedom Blvd, 84604",
    "website": "myalpinevillage.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "167",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      415
    ],
    "yrShared": true,
    "yrSharedRent": [
      370
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      529
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 250,
    "nonRefund": "$100/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      310
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 250,
    "spSuNonRefund": "$100/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "recyclingBins",
      "adaAccessibility",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Alta Apts",
    "phone": "801-373-9848",
    "address": "1850 N University Ave, 84604",
    "website": "thealtaapartments.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "46",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      299
    ],
    "deposit": 250,
    "nonRefund": "$7/mo",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      140
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$7/mo",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "pool",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "recyclingBins"
    ],
    "comment": "Great location; fast Google Fiber internet"
  },
  {
    "name": "Arcadia",
    "phone": "801-374-1700",
    "address": "450 N 1065 E, 84606",
    "website": "myarcadia.prospectportal.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "16",
    "perUnit": "5",
    "beds": "5",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      275
    ],
    "yrShared": true,
    "yrSharedRent": [
      205
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      330
    ],
    "fwShared": true,
    "fwSharedRent": [
      265
    ],
    "deposit": 200,
    "nonRefund": "$80/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      195
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      115
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$80/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "pool",
      "hotTub",
      "recyclingBins"
    ],
    "comment": "Pool, hot tub avail at Roman Garden apts"
  },
  {
    "name": "Banbridge Square",
    "phone": "801-224-4846",
    "address": "584 N 300 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      335
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "2@$335 no parking & 2@$345 w/parking"
  },
  {
    "name": "Bay Terrace Apts",
    "phone": "801-900-5469",
    "address": "139 E 400 N, 84606",
    "website": "bayterraceprovo.com",
    "gender": [
      "M"
    ],
    "units": "9",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      225,
      275
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      290,
      340
    ],
    "deposit": 250,
    "nonRefund": "$100",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      139
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$100",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "nearRydeUTA"
    ],
    "comment": "Walking distance from Provo library"
  },
  {
    "name": "Baywood",
    "phone": "801-224-4846",
    "address": "72 W 300 N #101 & 102, 84601",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "4 private rooms, very affordable!"
  },
  {
    "name": "Beck Apts",
    "phone": "801-224-4846",
    "address": "561 E 400 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "4",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      325
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave"
    ],
    "comment": "Recently remodeled! 4 person apts!"
  },
  {
    "name": "Belmont Apts",
    "phone": "801-375-6212",
    "address": "195 E 600 N, 84606",
    "website": "belmontapts.net",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "21",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      280
    ],
    "deposit": 200,
    "nonRefund": "$6.25/mo",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      100
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$6.25/mo",
    "utilities": [
      "cable",
      "cable"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "microwave",
      "laundryFacility",
      "ethernet",
      "extraStorage"
    ],
    "comment": "Wireless & ultra high speed ethernet"
  },
  {
    "name": "Berkshire Apts",
    "phone": "801-607-1680",
    "address": "41 E 400 N, 84606",
    "website": "aspenridgemanagement.com",
    "gender": [
      "M"
    ],
    "units": "10",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      319
    ],
    "deposit": 600,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      150
    ],
    "spSuDeposit": 300,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility"
    ],
    "comment": "Recently remodeled"
  },
  {
    "name": "Bountiful Court Apts",
    "phone": "801-374-5533",
    "address": "185 E 300 N, 84606",
    "website": "bcprovo.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "39",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "W",
      "Sp",
      "Su"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      347,
      357
    ],
    "yrShared": true,
    "yrSharedRent": [
      214,
      279
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      418,
      428
    ],
    "fwShared": true,
    "fwSharedRent": [
      274,
      339
    ],
    "deposit": 150,
    "nonRefund": "$15/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      208,
      218
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      119,
      163
    ],
    "spSuDeposit": 150,
    "spSuNonRefund": "$15",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "water",
      "O"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Provo's Be$t $ingles hou$ing value. Come see why."
  },
  {
    "name": "The Branbury",
    "phone": "801-206-4773",
    "address": "449 W 1720 N, 84604",
    "website": "thebranbury.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "311",
    "perUnit": "4",
    "beds": [
      "2",
      "4"
    ],
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      309,
      319
    ],
    "yrShared": true,
    "yrSharedRent": [
      249
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      379,
      389
    ],
    "fwShared": true,
    "fwSharedRent": [
      299
    ],
    "deposit": 200,
    "nonRefund": "$75",
    "spSuPriv": true,
    "spSuPrivateRent": [
      229,
      239
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      189
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$75",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "recyclingBins",
      "adaAccessibility",
      "nearRydeUTA"
    ],
    "comment": "Free salon, tanning, new furniture, great wards!"
  },
  {
    "name": "Brittany Apts",
    "phone": "801-374-9788",
    "address": "243 E 500 N, 84606",
    "website": "brittanyapts.net",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "44",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "F",
      "Sp",
      "Su"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      274
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      339
    ],
    "deposit": 225,
    "nonRefund": "$15/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      165
    ],
    "spSuDeposit": 225,
    "spSuNonRefund": "$15/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "coveredParking"
    ],
    "comment": "Internet and cable $16/mo"
  },
  {
    "name": "Brookview Apts",
    "phone": "801-900-5236",
    "address": "442 N 400 E, 84606",
    "website": "brookviewprovo.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "20",
    "perUnit": "6",
    "beds": "3",
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      235,
      285
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      310,
      360
    ],
    "deposit": 250,
    "nonRefund": "$100",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      139,
      189
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$100",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "nearRydeUTA"
    ],
    "comment": "On-site management, 4 blocks south of campus"
  },
  {
    "name": "Campus Plaza Apts",
    "phone": "801-374-1160",
    "address": "669 E 800 N, Provo , 84606",
    "website": "campusplazaapts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "67",
    "perUnit": "6",
    "beds": "2",
    "baths": "1",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      270
    ],
    "deposit": 270,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      115
    ],
    "spSuDeposit": 115,
    "spSuNonRefund": "",
    "utilities": [
      "electricity"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "laundryFacility",
      "pool",
      "recyclingBins"
    ],
    "comment": "Live close, only a few footsteps from BYU campus."
  },
  {
    "name": "Campus Villa",
    "phone": "801-434-8840",
    "address": "182 W 960 N, 84604",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "8",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      260,
      270
    ],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      200
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      100
    ],
    "spSuDeposit": 300,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "$45 fixed"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "nearRydeUTA"
    ],
    "comment": "Rec room w/ping pong, big screen TV, etc."
  },
  {
    "name": "Canyon Terrace Apts",
    "phone": "801-371-6800",
    "address": "1305 N Canyon Rd, 84604",
    "website": "canyonterraceapts@gmail.com",
    "gender": [
      "M"
    ],
    "units": "30",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      240,
      250
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      295,
      305
    ],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125,
      150
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$30/se",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "extraStorage"
    ],
    "comment": "New Basketball Court! Across the street from BYU"
  },
  {
    "name": "Carriage Cove Apts",
    "phone": "801-374-2700",
    "address": "606 W 1720 N, 84604",
    "website": "carriagecove.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "120",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      325
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      380
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 250,
    "nonRefund": "$75/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      175
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 250,
    "spSuNonRefund": "$75/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "nearRydeUTA"
    ],
    "comment": "Social, large, private, affordable. Apply now!"
  },
  {
    "name": "Centennial Apts",
    "phone": "801-374-1700",
    "address": "380 N 1020 E, 84606",
    "website": "centennialapartments.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "95",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      245
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      330
    ],
    "deposit": 250,
    "nonRefund": "$80/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$80/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "extraStorage",
      "recyclingBins"
    ],
    "comment": ""
  },
  {
    "name": "Centennial II Apts",
    "phone": "801-374-1700",
    "address": "450 N 1000 E, 84606",
    "website": "centennial2.prospectportal.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "16",
    "perUnit": "6",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      200
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      255
    ],
    "deposit": 200,
    "nonRefund": "$80/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      110
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$80/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "recyclingBins"
    ],
    "comment": "Pool, hot tub, laundry avail @ Centennial apts"
  },
  {
    "name": "Cinnamon Tree Apts",
    "phone": "801-373-8023",
    "address": "1285 N Freedom Blvd, 84604",
    "website": "cinnamontreeapts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "64",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      245,
      275
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      299,
      335
    ],
    "deposit": 225,
    "nonRefund": "$15/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      150,
      165
    ],
    "spSuDeposit": 225,
    "spSuNonRefund": "$15/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool"
    ],
    "comment": "Internet and cable $16/mo"
  },
  {
    "name": "Colony Apts",
    "phone": "801-374-5446",
    "address": "401 N 750 E, 84606",
    "website": "thecolony-apts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "60",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": "1.5",
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      275
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      330
    ],
    "deposit": 250,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      165
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$30/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet",
      "Flat rate"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "recyclingBins"
    ],
    "comment": "10 gig fbr ntwk, plenty of parking, recent updates"
  },
  {
    "name": "Continental Apts",
    "phone": "801-374-5418",
    "address": "562 N 200 E, 84606",
    "website": "apartmentsbythey@gmail.com",
    "gender": [
      "M"
    ],
    "units": "18",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      230,
      250
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      285,
      295
    ],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125,
      150
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$30/se",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "disposal",
      "microwave",
      "laundryFacility"
    ],
    "comment": "Newly remodeled; close to campus."
  },
  {
    "name": "The Crestwood",
    "phone": "801-356-8800",
    "address": "1800 N State St, 84604",
    "website": "crestwoodapts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "99",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      319
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      379
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 175,
    "nonRefund": "$50/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      199
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 175,
    "spSuNonRefund": "$50/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "washerDryer",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "adaAccessibility",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Crown Apts",
    "phone": "801-375-3325",
    "address": "455 E 600 N, 84606",
    "website": "provocrownapartments.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "12",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      299
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      364
    ],
    "deposit": 225,
    "nonRefund": "$15/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      184
    ],
    "spSuDeposit": 225,
    "spSuNonRefund": "$15/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet"
    ],
    "comment": "Internet and cable $16/mo"
  },
  {
    "name": "DeVere Court",
    "phone": "801-224-4846",
    "address": "650 N 100 W, 84601",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "8",
    "perUnit": "4",
    "beds": "2",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      335
    ],
    "yrShared": true,
    "yrSharedRent": [
      295
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "extraStorage"
    ],
    "comment": "4 person apts: 2 shared & 2 private!"
  },
  {
    "name": "Fleur-de-Lis Apts",
    "phone": "801-592-3020",
    "address": "275 N 300 E, 84606",
    "website": "womenshousing.com",
    "gender": [
      "W"
    ],
    "units": "15",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr",
      "FW"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      369
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      425
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 500,
    "nonRefund": "$75/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "recyclingBins",
      "adaAccessibility",
      "coveredParking"
    ],
    "comment": "Private room. Gated underground parking!"
  },
  {
    "name": "Foxwood Apts",
    "phone": "801-374-1919",
    "address": "830–840 N 100 W, 84604",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "16",
    "perUnit": "5",
    "beds": "3",
    "baths": "1",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      340
    ],
    "fwShared": true,
    "fwSharedRent": [
      290
    ],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      150
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      110
    ],
    "spSuDeposit": 300,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "$40 fixed"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "nearRydeUTA"
    ],
    "comment": "2 blocks to BYU. Pool, basketball court, etc.!"
  },
  {
    "name": "Foxwood Condos",
    "phone": "801-374-1919",
    "address": "25–51 W 880 N, 84604",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "16",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350,
      360
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet",
      "$25 fixed"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "100% off-street tenant parking plus visitor spots"
  },
  {
    "name": "Granary",
    "phone": "801-224-4846",
    "address": "760 N 300 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "8",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      395
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Right next to campus: all private rooms w/parking"
  },
  {
    "name": "The Isles",
    "phone": "801-852-9880",
    "address": "727 N 300 E, 84606",
    "website": "islesliving.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "41",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      455,
      465
    ],
    "yrShared": true,
    "yrSharedRent": [
      435,
      445
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 350,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "pool",
      "hotTub",
      "adaAccessibility",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Kimball Apts",
    "phone": "801-373-6700",
    "address": "659 N 300 E #5, 6, 84606",
    "website": "conniemeyers@gmail.com",
    "gender": [
      "M"
    ],
    "units": "2",
    "perUnit": "4-6",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      319
    ],
    "yrShared": true,
    "yrSharedRent": [
      230,
      280
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      379
    ],
    "fwShared": true,
    "fwSharedRent": [
      279,
      325
    ],
    "deposit": 225,
    "nonRefund": "$15/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      199
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      145,
      170
    ],
    "spSuDeposit": 225,
    "spSuNonRefund": "$15/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet"
    ],
    "comment": "Internet and cable $16/mo"
  },
  {
    "name": "Kimball Apts",
    "phone": "801-373-6700",
    "address": "659 N 300 E #2, 3, 84606",
    "website": "conniemeyers@gmail.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "4-5",
    "beds": "2",
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "F"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      248,
      280
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      300,
      340
    ],
    "deposit": 225,
    "nonRefund": "$15/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      150,
      170
    ],
    "spSuDeposit": 225,
    "spSuNonRefund": "$15/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet"
    ],
    "comment": "Tenant pays $53/mo for G, E, internet & cable"
  },
  {
    "name": "King Henry Apts",
    "phone": "801-370-2400",
    "address": "1130 E 450 N, 84606",
    "website": "kinghenryapts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "128",
    "perUnit": "2-6",
    "beds": [
      "1",
      "6"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      350
    ],
    "fwShared": true,
    "fwSharedRent": [
      260
    ],
    "deposit": 200,
    "nonRefund": "$40/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      230
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      110
    ],
    "spSuDeposit": 100,
    "spSuNonRefund": "$40/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "washerDryer",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "recyclingBins",
      "adaAccessibility",
      "nearRydeUTA"
    ],
    "comment": "Comm fee $20 monthly (internet & cable)"
  },
  {
    "name": "La Grande Apts",
    "phone": "801-374-5418",
    "address": "240-274 N 500 E, 84606",
    "website": "apartmentsbythey@gmail.com",
    "gender": [
      "M"
    ],
    "units": "24",
    "perUnit": "3-4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      310,
      325
    ],
    "yrShared": true,
    "yrSharedRent": [
      230,
      250
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      345,
      375
    ],
    "fwShared": true,
    "fwSharedRent": [
      265,
      295
    ],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      245
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      125,
      175
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$30/se",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "nearRydeUTA"
    ],
    "comment": "Newly remodeled, plenty of parking."
  },
  {
    "name": "Lanai",
    "phone": "801-224-4846",
    "address": "838 E 700 N #A–4, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      400
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 large private rms, washer/dryer, very popular!"
  },
  {
    "name": "Liberty on Eighth Apts",
    "phone": "801-375-2549",
    "address": "740 N University Ave, 84601",
    "website": "chooseliberty.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "59",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      340
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 175,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "gymEquipment",
      "clubhouse",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Liberty on Freedom",
    "phone": "801-373-9806",
    "address": "865 N 160 W, 84604",
    "website": "chooseliberty.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "126",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      300
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      380
    ],
    "deposit": 250,
    "nonRefund": "$150/yr",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      115
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$150/yr",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Liberty Square Apts",
    "phone": "801-374-7900",
    "address": "556 N 400 E, 84606",
    "website": "chooseliberty.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "166",
    "perUnit": "2-6",
    "beds": [
      "1",
      "3"
    ],
    "baths": [
      "1",
      "3"
    ],
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      275,
      349
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 175,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "B Most social complex. Indoor basketball court"
  },
  {
    "name": "Linford 1-6",
    "phone": "801-836-2353",
    "address": "391 E 700 N, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "6",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      375
    ],
    "fwShared": true,
    "fwSharedRent": [
      345
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      275
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      245
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "and one block to campus"
  },
  {
    "name": "The Lodges at",
    "phone": "Glenwood",
    "address": "801-374-9090 1565 N University Ave, 84604",
    "website": "glenwoodapt.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "196",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      219
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      299
    ],
    "deposit": 200,
    "nonRefund": "$35/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      209
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      159
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Spots fill fast! Come take a tour today."
  },
  {
    "name": "Manavu",
    "phone": "801-434-8840",
    "address": "585 N 400 E, 84606",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      325
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      135
    ],
    "spSuDeposit": 300,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet",
      "$15 fixed"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Large bedroom; living area with great couches"
  },
  {
    "name": "Melbourne Square",
    "phone": "801-224-4846",
    "address": "460 N 100 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "4",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      310
    ],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "coveredParking"
    ],
    "comment": "6 men apts recently remodeled! Great deal!"
  },
  {
    "name": "Miller Apts",
    "phone": "801-374-5418",
    "address": "580 N 100 E, 84606",
    "website": "apartmentsbythey@gmail.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "24",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      230,
      240
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      285,
      295
    ],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125,
      175
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$30/se",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "extraStorage",
      "nearRydeUTA"
    ],
    "comment": "Newly remodeled, close to campus, huge lounge."
  },
  {
    "name": "Moon Apts",
    "phone": "801-371-6150",
    "address": "680 N 300 E, 84606",
    "website": "moonapts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "40",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      239
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      295
    ],
    "deposit": 250,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$100/co",
    "utilities": [
      "cable",
      "$50 all-inclusive"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "extraStorage",
      "nearRydeUTA"
    ],
    "comment": "One block to campus, reserved parking"
  },
  {
    "name": "Norma's Apts",
    "phone": "801-356-7519",
    "address": "569 E 700 N, 84606",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "4",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      295
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 295,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "coveredParking"
    ],
    "comment": "Two-minute walk to school"
  },
  {
    "name": "Omni",
    "phone": "801-427-0452",
    "address": "701 N 500 W, 84601",
    "website": "omni.prospectportal.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "36",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      390
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 250,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "hotTub",
      "extraStorage",
      "adaAccessibility",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Pacific Heights",
    "phone": "Apts",
    "address": "801-819-9090 737 N 900 E, 84606",
    "website": "theheightsprovo.com",
    "gender": [
      "W"
    ],
    "units": "71",
    "perUnit": "3-6",
    "beds": [
      "3",
      "6"
    ],
    "baths": [
      "2",
      "3"
    ],
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      449,
      469
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 600,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "recyclingBins",
      "adaAccessibility",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Newest in Provo, block south of campus"
  },
  {
    "name": "Paradise Park",
    "phone": "801-224-4846",
    "address": "445 W 400 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "3",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "Decorated condo 3 private rooms - Cute!"
  },
  {
    "name": "Park Place Apts",
    "phone": "801-370-3260",
    "address": "460 E 700 N, 84606",
    "website": "ppapartments.prospectportal.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "12",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 0,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "$42 fixed"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "hotTub",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Come join the fun!"
  },
  {
    "name": "Raintree Commons Apts",
    "phone": "801-377-1511",
    "address": "1849 N Freedom Blvd, 84604",
    "website": "raintreeapt.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "154",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      219
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      299
    ],
    "deposit": 200,
    "nonRefund": "$35/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      209
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      159
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Spots fill fast! Come take a tour today."
  },
  {
    "name": "The Regency Apts",
    "phone": "801-379-4177",
    "address": "760 E 820 N, 84606",
    "website": "regencyapartments.us",
    "gender": [
      "W"
    ],
    "units": "33",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      295
    ],
    "deposit": 295,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      110
    ],
    "spSuDeposit": 110,
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "gymEquipment",
      "clubhouse",
      "extraStorage",
      "recyclingBins",
      "adaAccessibility",
      "nearRydeUTA"
    ],
    "comment": "On-site management, low rates, extra storage"
  },
  {
    "name": "Riviera",
    "phone": "801-377-5277",
    "address": "1505 N Canyon Rd, 84604",
    "website": "livetheriv.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "89",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr",
      "FW"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      339
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      399
    ],
    "deposit": 150,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "recyclingBins",
      "nearRydeUTA"
    ],
    "comment": "Newly remodeled 2-bedroom apartments!"
  },
  {
    "name": "Riviera",
    "phone": "801-377-5277",
    "address": "1505 N Canyon Rd, 84604",
    "website": "livetheriv.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "48",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      319
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      379
    ],
    "deposit": 250,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "gas",
      "internet",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "recyclingBins",
      "nearRydeUTA"
    ],
    "comment": "Newly remodeled 3-bedroom apartments!"
  },
  {
    "name": "Roman Gardens",
    "phone": "801-374-1700",
    "address": "450 N 1060 E, 84606",
    "website": "romangardens.prospectportal.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "47",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      205,
      215
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      265,
      275
    ],
    "deposit": 200,
    "nonRefund": "$80/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      105,
      115
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$80/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "washerDryer",
      "ethernet",
      "pool",
      "hotTub",
      "recyclingBins",
      "coveredParking"
    ],
    "comment": ""
  },
  {
    "name": "SingleTree",
    "phone": "801-356-7519",
    "address": "832 E 820 N, 84606",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": true,
    "yrSharedRent": [
      320
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 350,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Walk 2 blocks to campus"
  },
  {
    "name": "Southridge Apts",
    "phone": "801-370-3260",
    "address": "665 N 500 E, 84606",
    "website": "southridgebyu.prospectportal.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "36",
    "perUnit": "4",
    "beds": "4",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 0,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "$42 fixed"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "hotTub",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Come join the fun!"
  },
  {
    "name": "Sparks II Apts",
    "phone": "801-371-6500",
    "address": "999 E 450 N, 84606",
    "website": "sparksapts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "37",
    "perUnit": "4-6",
    "beds": [
      "2",
      "3"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      255,
      266
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      309,
      329
    ],
    "deposit": 225,
    "nonRefund": "$15/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      155,
      160
    ],
    "spSuDeposit": 225,
    "spSuNonRefund": "$15/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "pool",
      "hotTub",
      "extraStorage",
      "nearRydeUTA"
    ],
    "comment": "and cable $16/mo"
  },
  {
    "name": "Spyglas",
    "phone": "801-356-7519",
    "address": "737 N 600 E, 84606",
    "website": "",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "18",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      415
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 415,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Two minutes to campus. Great apartments"
  },
  {
    "name": "Summerhays",
    "phone": "801-374-5418",
    "address": "620 N 100 E, 84606",
    "website": "apartmentsbythey@gmail.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      230,
      250
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      265,
      295
    ],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125,
      175
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$30/se",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "Newly remodeled, plenty of parking."
  },
  {
    "name": "University Park Apts",
    "phone": "801-471-9367",
    "address": "225 E 700 N, 84606",
    "website": "livehere.biz",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      275
    ],
    "deposit": 200,
    "nonRefund": "$20/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      200
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      120
    ],
    "spSuDeposit": 150,
    "spSuNonRefund": "$20/se",
    "utilities": [
      "cable",
      "electricity"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "ethernet",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "1/2 block to campus. Excellent mgmt. RMs welcome"
  },
  {
    "name": "Woodland Heights Apts",
    "phone": "801-819-9090",
    "address": "48 W 880 N, 84604",
    "website": "theheightsprovo.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "28",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      409,
      429
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 600,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "extraStorage",
      "adaAccessibility",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "New, great ward; across street from campus."
  },
  {
    "name": "Aretta Gardens",
    "phone": "801-224-4846",
    "address": "547 N 300 E #3, 4, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "3",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "P Townhouse-style condos close to campus! "
  },
  {
    "name": "Aretta Gardens",
    "phone": "801-224-4846",
    "address": "565 N 300 E #11, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Townhouse style for 4 in great condition!"
  },
  {
    "name": "Avenues",
    "phone": "801-224-4846",
    "address": "836 N University Ave, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      385
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "coveredParking"
    ],
    "comment": "4 private rms, swim pool, W/D, very popular!"
  },
  {
    "name": "Belmont",
    "phone": "141",
    "address": "801-434-8840 363 N Belmont Pl #141, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350,
      450
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Huge master bedroom; tons of complex amenities."
  },
  {
    "name": "Belmont",
    "phone": "320",
    "address": "& 322 801-434-8840 416, 393 N Seven Peaks Blvd, 84606",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "2",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350,
      450
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Pool, tennis, and so much more."
  },
  {
    "name": "Belmont Condos",
    "phone": "",
    "address": "331 N Belmont Pl #136, 84606",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "F",
      "W",
      "Sp",
      "Su"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      400
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      400
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 150,
    "nonRefund": "",
    "spSuPriv": true,
    "spSuPrivateRent": [
      300
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 150,
    "spSuNonRefund": "",
    "utilities": [],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "coveredParking"
    ],
    "comment": ""
  },
  {
    "name": "Belmont Condos",
    "phone": "801-224-4846",
    "address": "Seven Peaks Blvd, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "3 private rms; varying rates; call for more info"
  },
  {
    "name": "Belmont Condos, rm A",
    "phone": "801-373-9678",
    "address": "454 N Seven Peaks Blvd, 84606",
    "website": "fcsrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "216",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      320
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 320,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "O"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "nearRydeUTA"
    ],
    "comment": "Great location and amenities."
  },
  {
    "name": "Belmont Condos, rm B",
    "phone": "801-373-9678",
    "address": "454 N Seven Peaks Blvd, 84606",
    "website": "fcsrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "216",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 350,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "O"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "nearRydeUTA"
    ],
    "comment": "Great location and amenities."
  },
  {
    "name": "Belmont Condos, rm C",
    "phone": "801-373-9678",
    "address": "454 N Seven Peaks Blvd, 84606",
    "website": "fcsrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "216",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      420
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 420,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "O"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "gymEquipment",
      "clubhouse",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Huge master bedroom w/private bath."
  },
  {
    "name": "Ben Dick Arms",
    "phone": "801-836-2353",
    "address": "141/161 E 700 N #14, 15, 21, 84606",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "3",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      365
    ],
    "fwShared": true,
    "fwSharedRent": [
      325
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      265
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      225
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "1 block to campus. Spacious rooms"
  },
  {
    "name": "Ben Dick Arms",
    "phone": "801-836-2353",
    "address": "141 E 700 N #16, 26, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      365
    ],
    "fwShared": true,
    "fwSharedRent": [
      325
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      265
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      225
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "1 block to campus. Spacious rooms"
  },
  {
    "name": "Ben Dick Arms",
    "phone": "801-224-4846",
    "address": "161 N 700 E #7, 12, 24, 29, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      355
    ],
    "yrShared": true,
    "yrSharedRent": [
      325
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "1 shared rm for 2 & 1 private rm. Large rooms!"
  },
  {
    "name": "Ben Dick Arms",
    "phone": "801-373-9678",
    "address": "161 E 700 N, 84606",
    "website": "fcsrentals.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      295
    ],
    "yrShared": true,
    "yrSharedRent": [
      235
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      375
    ],
    "fwShared": true,
    "fwSharedRent": [
      295
    ],
    "deposit": 340,
    "nonRefund": "$100/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      240
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      150
    ],
    "spSuDeposit": 240,
    "spSuNonRefund": "$50/?",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "2 blocks from campus, free parking, huge rooms."
  },
  {
    "name": "Brownstone 7, 8, 11",
    "phone": "801-434-8840",
    "address": "1080 E 450 N #7, 8, 11, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "3",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      270
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "Near Vasa, eating, shopping. Easy shuttle ride."
  },
  {
    "name": "Campus Lane",
    "phone": "582",
    "address": "801-224-4846 582 N 500 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "2",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Townhouse style for 4 women!"
  },
  {
    "name": "Campus Lane",
    "phone": "584",
    "address": "801-434-8840 584 N 500 E, 84606",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      360
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Gorgeous townhome extremely close to BYU!"
  },
  {
    "name": "Campus View North 5, 7",
    "phone": "801-224-4846",
    "address": "746 N 200 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      390
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "4 private rms, right next to campus!"
  },
  {
    "name": "Canterwood",
    "phone": "801-224-4846",
    "address": "933 N University Ave #15, 84601",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "16",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Great 3 privates, all covered parking!"
  },
  {
    "name": "Castile",
    "phone": "801-224-4846",
    "address": "419 N 500 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "9",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": true,
    "yrSharedRent": [
      340
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "3 man apts - 2 shared/1 private in same apt!"
  },
  {
    "name": "Chandell",
    "phone": "801-224-4846",
    "address": "885–899 N 50 E, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "9",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Townhouse style for 4 women! Parking for all 4!"
  },
  {
    "name": "Chatham Towne #4",
    "phone": "801-836-2353",
    "address": "956 N 900 E, 84604",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      365
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      265
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Across from law school"
  },
  {
    "name": "Chathamtowne",
    "phone": "801-224-4846",
    "address": "956–982 N 900 E, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "44",
    "perUnit": "4",
    "beds": [
      "2",
      "3"
    ],
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      425
    ],
    "yrShared": true,
    "yrSharedRent": [
      340
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Townhouses on 9th East: shared & private rms"
  },
  {
    "name": "Chatsworth",
    "phone": "801-224-4846",
    "address": "681 N 100 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      355
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Townhouse style condos w/washer/dryers, more!"
  },
  {
    "name": "Chatsworth 665 #1",
    "phone": "801-434-8840",
    "address": "665 N 100 E #1, 84606",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375,
      385
    ],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Great, social place. Only 2 blocks south of BYU!"
  },
  {
    "name": "Chatsworth 695 #1",
    "phone": "801-434-8840",
    "address": "695 N 100 E, #1, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Extra storage room in unit."
  },
  {
    "name": "Chatsworth 665 #2",
    "phone": "665",
    "address": "N 100 E#2, 84606",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr",
      "F"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "One Fall only contract available."
  },
  {
    "name": "Chatsworth 695 #4",
    "phone": "801-434-8840",
    "address": "695 N 100 E #4, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Townhouse layout with extra half bath for guests."
  },
  {
    "name": "Chatsworth 695 #5",
    "phone": "801-434-8840",
    "address": "695 N 100 E #5, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Extremely popular complex! Extra half-bath."
  },
  {
    "name": "Chelsea",
    "phone": "801-224-4846",
    "address": "611 N 700 E #1, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      365
    ],
    "yrShared": true,
    "yrSharedRent": [
      335
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Cute apt for 3 girls: 2 shared/1 private"
  },
  {
    "name": "Chelsea Phase 2 #6",
    "phone": "801-836-2353",
    "address": "619 N 700 E, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "2",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      375
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      275
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Very nice and two blocks from campus"
  },
  {
    "name": "Courtside",
    "phone": "801-224-4846",
    "address": "948 N 50 E, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "18",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      355
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 person/1 block from Y, large rooms!"
  },
  {
    "name": "Devonshire",
    "phone": "801-224-4846",
    "address": "34 E 700 N #7915, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "4 man apt - 2 shared rooms with washer/dryer!"
  },
  {
    "name": "East Cambridge 1, 6, 7, 9, 12",
    "phone": "801-224-4846",
    "address": "765 E 750 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row location. Washer/dryer in unit!"
  },
  {
    "name": "East Cambridge Court",
    "phone": "801-373-9678",
    "address": "765 E 750 N #10, 84606",
    "website": "fcsrentals.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      300
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$100/mo",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Just one block to campus, great complex!"
  },
  {
    "name": "Enclave",
    "phone": "801-224-4846",
    "address": "642 N 200 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "36",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      380
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "coveredParking"
    ],
    "comment": "4 private rms, washer/dryer, pool, very popular!"
  },
  {
    "name": "Fernwood",
    "phone": "801-224-4846",
    "address": "551 N 200 E #303, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 privates; 4 parking spaces; washer/dryer!"
  },
  {
    "name": "Fernwood Condos",
    "phone": "801-310-3000",
    "address": "551 N 200 E, 84606",
    "website": "fernwoodcondos@gmail.com",
    "gender": [
      "W"
    ],
    "units": "9",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      385
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 350,
    "nonRefund": "$75/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      250
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 250,
    "spSuNonRefund": "$50/co",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "coveredParking"
    ],
    "comment": "Prkg for all tenants,most covered, close to BYU!"
  },
  {
    "name": "Goldstone",
    "phone": "801-224-4846",
    "address": "261 N 400 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      310
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 person apts/2 shared rooms. Affordable!"
  },
  {
    "name": "Hampton Court",
    "phone": "801-224-4846",
    "address": "659 N 700 E #4, 17, 18, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "18",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      345
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "2 shared rms, washer/dryer, close to campus!"
  },
  {
    "name": "Heather Heights",
    "phone": "801-224-4846",
    "address": "72 W 880 N #6, 8, 12, 84601",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "FW"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      340
    ],
    "yrShared": true,
    "yrSharedRent": [
      325
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave"
    ],
    "comment": "Apts for 3: 2 shared/1 private, washer/dryer"
  },
  {
    "name": "Huntington #1",
    "phone": "801-224-4846",
    "address": "865 N 500 W #1, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Nice apt: 3 private rooms, washer/dryer"
  },
  {
    "name": "Jamestown",
    "phone": "801-224-4846",
    "address": "782 N 800 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      355
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row location! Large rms, washer/dryer"
  },
  {
    "name": "Kensington",
    "phone": "801-224-4846",
    "address": "788 E 750 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Most popular complex on Condo row!"
  },
  {
    "name": "Kensington",
    "phone": "801-224-4846",
    "address": "725 N 800 E #5, 9, 10, 12, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row location. Washer/dryer in unit!"
  },
  {
    "name": "Kensington Condo 1",
    "phone": "801-836-2353",
    "address": "788 E 750 N, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      365
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      265
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Discount for 12 month lease on Condo row"
  },
  {
    "name": "Middle Cambridge 2, 11",
    "phone": "801-224-4846",
    "address": "737 E 750 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row location. Washer/dryer in unit!"
  },
  {
    "name": "Millrace",
    "phone": "801-224-4846",
    "address": "245 W 2230 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "30",
    "perUnit": "4",
    "beds": "4",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      365
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Super townhouses w/4 private rooms & more!"
  },
  {
    "name": "Millrace 8",
    "phone": "801-434-8840",
    "address": "221 W 2230 N #8, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360,
      400
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Granite counter tops. Huge master suite."
  },
  {
    "name": "Millrace North",
    "phone": "801-224-4846",
    "address": "221 W 2230 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "4",
    "perUnit": "4",
    "beds": "4",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      385
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$40/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Huge townhouse for 4, all private, 2 rates!"
  },
  {
    "name": "Mountainwood",
    "phone": "801-224-4846",
    "address": "36 W 700 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "36",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      390
    ],
    "yrShared": true,
    "yrSharedRent": [
      320
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25+/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Affordable! Washers/dryers, covered parking."
  },
  {
    "name": "Moutainwood 218",
    "phone": "801-434-8840",
    "address": "62 W 700 N #218, 84601",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": true,
    "yrSharedRent": [
      300
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Spacious townhouse layout. 3 blocks west of BYU."
  },
  {
    "name": "Mt Vista 3, 9",
    "phone": "801-224-4846",
    "address": "885 E 350 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "9",
    "perUnit": "4",
    "beds": "4",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      365
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Townhouses on 9th East; 4 private rms; vary rates"
  },
  {
    "name": "North Downs",
    "phone": "801-224-4846",
    "address": "686 E 700 N #3, 6, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "3 private rms, varying rates. Call for more info!"
  },
  {
    "name": "Old Mill",
    "phone": "801-224-4846",
    "address": "724 W 1720 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "4",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      325
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "pool",
      "hotTub",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Huge complex 3 pools, all private rms"
  },
  {
    "name": "Old Mill",
    "phone": "311",
    "address": "801-434-8840 724 W 1720 N #311, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "4",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "nearRydeUTA"
    ],
    "comment": "Indoor volleyball and swimming pool!"
  },
  {
    "name": "The Pines",
    "phone": "801-224-4846",
    "address": "577 N 100 W #102/205, 84601",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": true,
    "yrSharedRent": [
      325
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "1 shared rm for 2 & 1 private rm. Washer, dryer!"
  },
  {
    "name": "Pines 206",
    "phone": "801-434-8840",
    "address": "577 N 100 W #206, 84601",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370
    ],
    "yrShared": true,
    "yrSharedRent": [
      335
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Very large living area and underground parking."
  },
  {
    "name": "Presidio",
    "phone": "801-224-4846",
    "address": "515 N 200 E #2, 3, 10, 11, 13, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": true,
    "yrSharedRent": [
      320
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "3 person apts: 2 shared/1 private, W/D"
  },
  {
    "name": "Presidio 8",
    "phone": "801-434-8840",
    "address": "515 N 200 #8, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      340
    ],
    "yrShared": true,
    "yrSharedRent": [
      300
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "2 Story, fireplace, wood floors, open layout."
  },
  {
    "name": "Promenade",
    "phone": "801-224-4846",
    "address": "888 E 820 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Townhouses on 9th East: 4 private rooms"
  },
  {
    "name": "Promenade 2",
    "phone": "801-434-8840",
    "address": "888 E 820 N #2, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Condo row townhouse. Lots of space."
  },
  {
    "name": "Quicksilver",
    "phone": "801-224-4846",
    "address": "602 N 800 E #302, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      365
    ],
    "yrShared": true,
    "yrSharedRent": [
      330
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Cute apt for 3. 2 shared/1 private; washer/dryer!"
  },
  {
    "name": "Reynolds",
    "phone": "801-224-4846",
    "address": "466 N 400 E #103, 303, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "4 private rooms washer/dryer!"
  },
  {
    "name": "Riverside",
    "phone": "801-836-2353",
    "address": "1525 Riverside Ave #39, 84604",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2.5",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375,
      450
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "Located near DI. 5 minutes away"
  },
  {
    "name": "Riverside",
    "phone": "801-224-4846",
    "address": "1559 N Riverside Ave, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      300
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "coveredParking"
    ],
    "comment": "3 private rms, varying rates. Call for more info!"
  },
  {
    "name": "Riverside 20",
    "phone": "801-434-8840",
    "address": "1541 Riverside Ave #20, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "access to shopping, eating, BYU and UVU."
  },
  {
    "name": "Riverside 29",
    "phone": "801-434-8840",
    "address": "1533 Riverside Ave #29, 84604",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350,
      375
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Over 1000 sq ft for 3 people!"
  },
  {
    "name": "Riverside 32",
    "phone": "801-434-8840",
    "address": "1533 Riverside Ave #32, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370,
      395
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "New leather couches and furnishings!"
  },
  {
    "name": "Riverside 46",
    "phone": "801-434-8840",
    "address": "1525 Riverside Ave #46, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Master bedroom with huge walk-through closet."
  },
  {
    "name": "Riverside 48",
    "phone": "801-434-8840",
    "address": "1525 Riverside Ave #48, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Easy access to BYU and UVU via bus or shuttle."
  },
  {
    "name": "Riverside 52",
    "phone": "801-434-8840",
    "address": "1547 Riverside Ave #52, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      ""
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Picnic tables and covered bike storage."
  },
  {
    "name": "Riverside 59",
    "phone": "801-434-8840",
    "address": "1547 N Riverside Ave #59, 84604",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Easy commute near several major bus routes."
  },
  {
    "name": "Santa Barbara",
    "phone": "801-224-4846",
    "address": "734 E 560 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "54",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": true,
    "yrSharedRent": [
      345
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "2 shared/1 priv @varying rates. Call 4 more info"
  },
  {
    "name": "Sierra 1",
    "phone": "801-434-8840",
    "address": "241 E 400 N #1, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": true,
    "yrSharedRent": [
      285
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "Hardwood floors, new tile in bathroom, cute paint!"
  },
  {
    "name": "Sierra 2, 4, 6",
    "phone": "801-434-8840",
    "address": "243 E 400 N #2, 4, 6, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "3",
    "perUnit": "4",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": true,
    "yrSharedRent": [
      285
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "Great location! Close to BYU."
  },
  {
    "name": "Sierra 3 & 5",
    "phone": "801-434-8840",
    "address": "241 E 400 N #3, 5, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "4",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": true,
    "yrSharedRent": [
      285
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "Open parking lot. Several units, invite friends!"
  },
  {
    "name": "Somerset",
    "phone": "801-224-4846",
    "address": "905 N 150 E 2, 4, 5, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "2 shared/2 private close to campus w/W/D!"
  },
  {
    "name": "South Downs",
    "phone": "801-224-4846",
    "address": "677 N 700 E #1, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Super townhouse w/4 private rooms!"
  },
  {
    "name": "South Downs Condo 4",
    "phone": "801-836-2353",
    "address": "677 N 700 E, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      375
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      275
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "Spacious condo 2.5 blocks to campus"
  },
  {
    "name": "Stonebridge",
    "phone": "801-224-4846",
    "address": "758 E 900 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "3",
    "beds": [
      "2",
      "3"
    ],
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370
    ],
    "yrShared": true,
    "yrSharedRent": [
      325
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "3 person apts varying rates. Call for more info"
  },
  {
    "name": "Stonebridge",
    "phone": "801-592-7532",
    "address": "761 E 820 N, 105, 226, 231, 235, 84601",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "4",
    "perUnit": "3",
    "beds": [
      "2",
      "3"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370,
      420
    ],
    "yrShared": true,
    "yrSharedRent": [
      320
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      405,
      455
    ],
    "fwShared": true,
    "fwSharedRent": [
      355
    ],
    "deposit": 250,
    "nonRefund": "$100/yr",
    "spSuPriv": true,
    "spSuPrivateRent": [
      305,
      355
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      255
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$33/se",
    "utilities": [
      "cable",
      "cable"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Great location! Utilities included in rent."
  },
  {
    "name": "Stonebridge 103",
    "phone": "801-434-8840",
    "address": "758 E 900 N #103, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      335,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "dishwasher",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Underground parking. Right next to BYU!"
  },
  {
    "name": "Stonebridge 104",
    "phone": "801-434-8840",
    "address": "758 E 900 N #104, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      335,
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Step out the door and you're right at BYU!"
  },
  {
    "name": "Stonebridge 111",
    "phone": "801-434-8840",
    "address": "758 E 900 N #111, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      355,
      395
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Condo row. Master bedroom with huge walk in closet"
  },
  {
    "name": "Stonebridge 304, 306",
    "phone": "801-434-8840",
    "address": "763 E 820 N #304, 306, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      335,
      370
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "All private rooms with large master bedroom."
  },
  {
    "name": "Stratford Court",
    "phone": "801-224-4846",
    "address": "760 N 800 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "18",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row location. Washer/dryer in unit!"
  },
  {
    "name": "Summerlyn",
    "phone": "801-224-4846",
    "address": "239 E 300 N #103, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      365
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 privates; 4 parking spaces; washer/dryer!"
  },
  {
    "name": "Temple Lane",
    "phone": "801-224-4846",
    "address": "236 E 2230 N #3, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "8",
    "perUnit": "4",
    "beds": "4",
    "baths": "3",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "coveredParking"
    ],
    "comment": "Townhouse w/4 private rooms! Affordable"
  },
  {
    "name": "Timpanogos Gateway, rm A",
    "phone": "801-373-9678",
    "address": "1969 N Canyon Rd, 84604",
    "website": "fcsrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "57",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      325
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 325,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "O"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "adaAccessibility"
    ],
    "comment": "Perfect location, close to campus. Free parking."
  },
  {
    "name": "Timpanogos Gateway, rm B, C",
    "phone": "801-373-9678",
    "address": "1969 N Canyon Rd, 84604",
    "website": "fcsrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "57",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 360,
    "nonRefund": "$100/co",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "O"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "adaAccessibility"
    ],
    "comment": "Large rooms, close to campus. Free parking."
  },
  {
    "name": "Township",
    "phone": "801-224-4846",
    "address": "747 N 200 E #1, 7, 8, 9, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "12",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      355
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "3 private rms varying rates - call 4 more info"
  },
  {
    "name": "University Ave",
    "phone": "801-224-4846",
    "address": "539–591 N University Ave, 84601",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      400
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 privates in nice complex. Washer/dryer!"
  },
  {
    "name": "University Ave Condos",
    "phone": "801-434-8840",
    "address": "567, 591 N University Ave #112, 311, 318, 84601",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "3",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Large private rooms with built-in desk!"
  },
  {
    "name": "University Ave Condos",
    "phone": "801-434-8840",
    "address": "567 N University Ave #210, 84601",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Spacious, open kitchen with pantry."
  },
  {
    "name": "University Ave Condos",
    "phone": "801-434-8840",
    "address": "567, 591 N University Ave #312, 316, 84601",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      360
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Huge underground parking lot plus visitor parking!"
  },
  {
    "name": "Victoria Place",
    "phone": "801-224-4846",
    "address": "284 E 600 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "18",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      345
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 person apts with washer/dryer"
  },
  {
    "name": "Victoria Place II",
    "phone": "801-224-4846",
    "address": "267 E 500 N #56, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      345
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "4 person condo with washer/dryer!"
  },
  {
    "name": "Wellington",
    "phone": "801-224-4846",
    "address": "855 E 700 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "3",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      375
    ],
    "yrShared": true,
    "yrSharedRent": [
      335
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row: 2 shared/1 private, washer/dryer"
  },
  {
    "name": "West Cambridge",
    "phone": "801-224-4846",
    "address": "788 N 700 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "12",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Condo row location. Washer/dryer in unit!"
  },
  {
    "name": "Windsor Arms",
    "phone": "801-224-4846",
    "address": "744–766 E 750 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "24",
    "perUnit": "4",
    "beds": "2",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet"
    ],
    "comment": "Condo row: 4 men w/washer/dryer"
  },
  {
    "name": "Windsor Park",
    "phone": "801-224-4846",
    "address": "112 W 1230 N, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "90",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      350
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "3 private rms, varying rates. Call for more info!"
  },
  {
    "name": "Windsor Park 127",
    "phone": "801-434-8840",
    "address": "98 W 1230 N #127, 84604",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      385,
      365
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Close to BYU, pantry, wood floors, high ceilings."
  },
  {
    "name": "Windsor Park 334",
    "phone": "801-434-8840",
    "address": "146 W 1230 N #334, 84604",
    "website": "lreutah.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      370,
      400
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": "Vaulted ceilings, new carpet, near BYU athletics."
  },
  {
    "name": "Winter Quarters",
    "phone": "801-224-4846",
    "address": "182 E 800 N, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "",
    "perUnit": "4",
    "beds": [
      "2",
      "3"
    ],
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      380
    ],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "coveredParking"
    ],
    "comment": "Right across from campus! Shared & private rms!"
  },
  {
    "name": "Barlett Duplexes",
    "phone": "801-224-4846",
    "address": "1945–1959 N 650 W, 84604",
    "website": "mvmrentals.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "4",
    "perUnit": "4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      330
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Affordable private rms, remodeled inside!"
  },
  {
    "name": "Brown Apts",
    "phone": "928-965-1453",
    "address": "530, 532 E 600 N, 84606",
    "website": "",
    "gender": [
      "M"
    ],
    "units": "2",
    "perUnit": "6",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      385
    ],
    "yrShared": true,
    "yrSharedRent": [
      350
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 350,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "internet",
      "water",
      "Garbage"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "Large house; 2 units updated; off street parking."
  },
  {
    "name": "Colony Houses (Log, others) 801-374-5446",
    "phone": "496",
    "address": "N 700 E, 84606",
    "website": "thecolony-apts.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "6",
    "perUnit": "4-6",
    "beds": [
      "2",
      "4"
    ],
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr",
      "FW",
      "SpSu",
      "Sp",
      "Su"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      250
    ],
    "yrShared": true,
    "yrSharedRent": [
      285
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      300
    ],
    "fwShared": true,
    "fwSharedRent": [
      250
    ],
    "deposit": 250,
    "nonRefund": "$30/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      185
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      165
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$30/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "ethernet",
      "pool",
      "hotTub"
    ],
    "comment": "Several houses available. Call for virtual tour."
  },
  {
    "name": "Connections Apts, down",
    "phone": "801-836-2353",
    "address": "778 N 600 E, 85606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      340
    ],
    "deposit": 350,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      240
    ],
    "spSuDeposit": 350,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "1 block to campus"
  },
  {
    "name": "Connections Apts, up",
    "phone": "801-836-2353",
    "address": "776 N 600 E, 85606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "6",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      365
    ],
    "deposit": 350,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      265
    ],
    "spSuDeposit": 350,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "1 block to campus"
  },
  {
    "name": "Continental Houses",
    "phone": "801-374-5418",
    "address": "158 E 100 E, 84606",
    "website": "apartmentsbythey@gmail.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "4-6",
    "beds": "4",
    "baths": [
      "1",
      "2"
    ],
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      345,
      385
    ],
    "yrShared": true,
    "yrSharedRent": [
      240,
      250
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "washerDryer",
      "extraStorage",
      "coveredParking",
      "nearRydeUTA"
    ],
    "comment": ""
  },
  {
    "name": "Foxwood Houses",
    "phone": "801-374-1919",
    "address": "46–90 W 800 N, 84604",
    "website": "lreutah.com",
    "gender": [
      "M",
      " ",
      "W"
    ],
    "units": "5",
    "perUnit": "3",
    "beds": [
      "2",
      "3"
    ],
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      210,
      450
    ],
    "yrShared": true,
    "yrSharedRent": [
      180,
      280
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      150,
      300
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      120
    ],
    "spSuDeposit": 300,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet",
      "$40-50 fixed"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "pool",
      "hotTub",
      "nearRydeUTA"
    ],
    "comment": "Tons of options and only 2 blocks to BYU!"
  },
  {
    "name": "Horman Duplex, up",
    "phone": "801-836-2353",
    "address": "557 E 600 N, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      335
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      235
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Off-street parking and all utilities included"
  },
  {
    "name": "Horman Duplex, up & down",
    "phone": "801-836-2353",
    "address": "533–535 E 600 N, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "3-4",
    "beds": "4",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      345
    ],
    "fwShared": true,
    "fwSharedRent": [
      335
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      245
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      235
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "microwave",
      "washerDryer"
    ],
    "comment": "Off-street parking and all utilities included"
  },
  {
    "name": "Horman Duplex, up & down",
    "phone": "801-836-2353",
    "address": "545–547 E 600 N, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "6",
    "beds": "6",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      335
    ],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      235
    ],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Off-street parking and all utilities included"
  },
  {
    "name": "Jarman Place, down",
    "phone": "801-836-2353",
    "address": "752 N 600 E, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "5",
    "beds": "3",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      345
    ],
    "fwShared": true,
    "fwSharedRent": [
      325
    ],
    "deposit": 350,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      245
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      225
    ],
    "spSuDeposit": 350,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "microwave",
      "washerDryer"
    ],
    "comment": "1 block to campus"
  },
  {
    "name": "Jarman Place, up",
    "phone": "801-836-2353",
    "address": "750 N 600 E, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      360
    ],
    "deposit": 350,
    "nonRefund": "$28/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      260
    ],
    "spSuDeposit": 350,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "microwave",
      "washerDryer"
    ],
    "comment": "1 block to campus"
  },
  {
    "name": "Piller Home",
    "phone": "801-836-2353",
    "address": "473 N 600 E, 84606",
    "website": "campus_provo@yahoo.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "5",
    "beds": "5",
    "baths": "2",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      385
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 250,
    "nonRefund": "$28/se",
    "spSuPriv": true,
    "spSuPrivateRent": [
      285
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": 250,
    "spSuNonRefund": "$28/se",
    "utilities": [
      "cable"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer"
    ],
    "comment": "Off-street parking and all utilities included"
  },
  {
    "name": "Pugmire House",
    "phone": "801-224-4846",
    "address": "660 N 600 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "3",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      340
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "House for 3 men close to campus!"
  },
  {
    "name": "Richardson House",
    "phone": "801-224-4846",
    "address": "740 N 500 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "6",
    "beds": "6",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      355
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$25/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "cable",
      "electricity",
      "gas",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "Cute house; private; right next to campus!"
  },
  {
    "name": "Ross House",
    "phone": "801-224-4846",
    "address": "582 N 700 E, 84606",
    "website": "mvmrentals.com",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "6",
    "beds": "6",
    "baths": "2",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      365
    ],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 400,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "water"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "Cute house 6 private rooms with parking!"
  },
  {
    "name": "Sherwood House",
    "phone": "801-434-8840",
    "address": "630–632 N 300 E, 84606",
    "website": "lreutah.com",
    "gender": [
      "W"
    ],
    "units": "2",
    "perUnit": "4",
    "beds": "2",
    "baths": "1",
    "len": [
      "FW",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": true,
    "fwSharedRent": [
      245,
      275
    ],
    "deposit": 300,
    "nonRefund": "$35/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": true,
    "spSuSharedRent": [
      125
    ],
    "spSuDeposit": 300,
    "spSuNonRefund": "$35/se",
    "utilities": [
      "cable",
      "$50 fixed"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "nearRydeUTA"
    ],
    "comment": "Cute cottage style home! Private parking lot."
  },
  {
    "name": "Stadium Ave House",
    "phone": "801-360-0196",
    "address": "431 E Stadium Ave, 84604",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "4",
    "baths": "1",
    "len": [
      "Yr",
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      285
    ],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 0,
    "nonRefund": "",
    "spSuPriv": true,
    "spSuPrivateRent": [
      130
    ],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "O"
    ],
    "amenities": [
      "microwave",
      "laundryFacility",
      "washerDryer",
      "recyclingBins"
    ],
    "comment": ""
  },
  {
    "name": "The Taj",
    "phone": "801-592-3020",
    "address": "276 E 300 N, 84606",
    "website": "womenshousing.com/duplex",
    "gender": [
      "M"
    ],
    "units": "1",
    "perUnit": "4",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr",
      "FW",
      "SpSu"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      299,
      319
    ],
    "yrShared": true,
    "yrSharedRent": [
      269
    ],
    "fwPriv": true,
    "fwPrivateRent": [
      349,
      369
    ],
    "fwShared": true,
    "fwSharedRent": [
      319
    ],
    "deposit": 340,
    "nonRefund": "$75/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      299,
      319
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      269
    ],
    "spSuDeposit": 340,
    "spSuNonRefund": "$75/co",
    "utilities": [
      "cable",
      "electricity",
      "gas"
    ],
    "amenities": [
      "dishwasher",
      "disposal",
      "microwave",
      "washerDryer",
      "extraStorage",
      "recyclingBins",
      "coveredParking"
    ],
    "comment": "Underground parking, lots of storage!"
  },
  {
    "name": "University House",
    "phone": "801-374-5418",
    "address": "12 E 900 N, Provo , 84604",
    "website": "apartmentsbythey@gmail.com",
    "gender": [
      "M"
    ],
    "units": "2",
    "perUnit": "4",
    "beds": "3",
    "baths": "1",
    "len": [
      "Yr"
    ],
    "yrPriv": true,
    "yrPrivateRent": [
      395,
      350
    ],
    "yrShared": true,
    "yrSharedRent": [
      265,
      245
    ],
    "fwPriv": false,
    "fwPrivateRent": [],
    "fwShared": false,
    "fwSharedRent": [],
    "deposit": 200,
    "nonRefund": "$30/se",
    "spSuPriv": false,
    "spSuPrivateRent": [],
    "spSuShared": false,
    "spSuSharedRent": [],
    "spSuDeposit": "",
    "spSuNonRefund": "",
    "utilities": [
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "dishwasher",
      "disposal",
      "microwave",
      "laundryFacility",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "Close to campus"
  },
  {
    "name": "Villa House",
    "phone": "801-420-0328",
    "address": "531 E 700 N, 84606",
    "website": "",
    "gender": [
      "W"
    ],
    "units": "1",
    "perUnit": "6",
    "beds": "4",
    "baths": "2",
    "len": [
      "SpSu"
    ],
    "yrPriv": false,
    "yrPrivateRent": [],
    "yrShared": false,
    "yrSharedRent": [],
    "fwPriv": true,
    "fwPrivateRent": [
      330
    ],
    "fwShared": true,
    "fwSharedRent": [
      285
    ],
    "deposit": 200,
    "nonRefund": "$70/co",
    "spSuPriv": true,
    "spSuPrivateRent": [
      280
    ],
    "spSuShared": true,
    "spSuSharedRent": [
      235
    ],
    "spSuDeposit": 200,
    "spSuNonRefund": "$70/co",
    "utilities": [
      "cable",
      "cable",
      "electricity",
      "gas",
      "internet"
    ],
    "amenities": [
      "airConditioning",
      "microwave",
      "laundryFacility",
      "washerDryer",
      "extraStorage"
    ],
    "comment": "BYU contracted housing for 6 women"
  }
]