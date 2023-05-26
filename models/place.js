export class Place {
	constructor(title, imageUri, location, address) {
		this.title = title
		this.imageUri = imageUri
		this.location = location
		this.address = address
	}
}

const addressConsttructor = address => {
	return {
		city: address.city,
		country: address.country,
		subRegion: address.subregion,
		postcode: address.postalcode,
	}
}
