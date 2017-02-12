export function getApartments() {
	return apartments.slice();
}

const apartments = [
  {
    'name': 'Liberty Square',
    'phone': '801-374-7900',
    'address': '556 N 400 E, 84604',
    'website': 'chooseliberty.com',
    'gender': ['M,F'],
    'beds': [1,2,3],
    'baths': [1,2,3],
    'len': ['Yr, SpSu'],
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
  }
];
