export function getApartments() {
	return apartments.slice();
}

const apartments = [
  {
    'name': 'Liberty Square',
    'phone': '801-374-7900',
    'address': '556 N 400 E, 84604',
    'website': 'chooseliberty.com',
    'gender': ['M','F'],
    'beds': '1, 2, or 3',
    'baths': '1, 2, or 3',
    'len': 'Yr or SpSu',
    'priv': false,
    'privateRent': [],
    'shared': true,
    'sharedRent': [275,349],
    'deposit': 175,
    'nonRefund': '100/co',
    'spSuPriv': true,
    'spSuPrivateRent': [400, 500],
    'spSuShared': false,
    'spSuSharedRent': [],
    'spSuDeposit': '',
    'spSuNonRefund': '',
    'utilities': ['cable', 'electricity', 'gas', 'internet', 'water'],
    'amenities': ['dishwasher', 'disposal', 'microwave', 'laundryFacility',
      'ethernet', 'pool', 'hotTub', 'gymEquipment', 'clubhouse', 'coveredParking',
      'nearRydeUTA'
    ],
    'comment': 'Most social complex. Indoor basketball court'
  },
	{
    'name': 'Centenial',
    'phone': '801-535-4553',
    'address': '1354 N 200 E, 84606',
    'website': 'centenialapartments.com',
    'gender': ['M'],
    'beds': '1, 2, or 3',
    'baths': '1 or 2',
    'len': 'Yr, SpSu, F, W, or FW',
    'priv': true,
    'privateRent': [345, 375],
    'shared': true,
    'sharedRent': [270,310],
    'deposit': 300,
    'nonRefund': '100/co',
    'spSuPriv': false,
    'spSuPrivateRent': [],
    'spSuShared': false,
    'spSuSharedRent': [],
    'spSuDeposit': '',
    'spSuNonRefund': '',
    'utilities': ['cable', 'gas', 'water'],
    'amenities': ['dishwasher', 'disposal', 'microwave', 'laundryFacility',
      'ethernet', 'pool', 'hotTub', 'clubhouse', 'coveredParking', 'adaAccessibility',
      'nearRydeUTA'
    ],
    'comment': 'Most'
  }
];
