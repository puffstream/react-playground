// app/api/api.js

var locations = [
	{
		type: 'Feature',
		properties: {
			city: 'Oakland',
			pizzeria: 'Hi-Life',
			website: 'http://www.hilifeoakland.com',
			address: '400 15th St',
			markersize: 'medium',
			markercolor: 'ffff00',
			markersymbol: 'restaurant'
		},
		geometry: {
			type: 'Point',
			coordinates: [
				-122.2694895,
				37.805068
			]
		}
	},
	{
		type: 'Feature',
		properties: {
			city: "Portland",
			pizzeria: 'Zachary\'s',
			website: 'http://zacharys.com/locations/oakland',
			address: '5801 College Ave.',
			markersize: 'medium',
			markercolor: 'ffff00',
			markersymbol: 'restaurant'
		},
		geometry: {
			type: 'Point',
			coordinates: [
				-122.2521705,
				37.8462724
			]
		}
	}
]

export default locations