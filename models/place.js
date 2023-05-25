export class Place {
	constructor(title, imageUri, location, address) {
		this.title = title
		this.imageUri = imageUri
		this.location = location
		this.address = address
		this.id = new Date().toString() + Math.floor(Math.random() * 100).toString()
	}
}
