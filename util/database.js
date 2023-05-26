import * as SQLite from 'expo-sqlite'

const database = SQLite.openDatabase('places.db')

export function init() {
	const promise = new Promise((resolve, reject) => {
		database.transaction(tx => {
			// tx.executeSql('DROP TABLE IF EXISTS favouritePlaces')
			tx.executeSql(
				`CREATE TABLE IF NOT EXISTS favouritePlaces(
				id INTEGER PRIMARY KEY NOT NULL,
				title TEXT NOT NULL,
				imageUri TEXT NOT NULL,
				country TEXT NOT NULL,
				city TEXT NOT NULL,
				subregion TEXT NOT NULL,
				postcode TEXT NOT NULL,
				lat REAL NOT NULL,
				lng REAL NOT NULL
			)`,
				[],
				() => {
					resolve()
				},
				(_, error) => {
					reject(error)
				}
			)
		})
	})
	return promise
}

export function insertPlace(place) {
	const promise = new Promise((resolve, reject) => {
		database.transaction(tx => {
			tx.executeSql(
				`INSERT INTO favouritePlaces(title, imageUri, lat, lng, country, subregion, postcode, city) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
				[
					place.title,
					place.imageUri,
					place.location.latitude,
					place.location.longitude,
					place.address.country,
					place.address.subregion,
					place.address.postalCode,
					place.address.city,
				],
				(_, result) => {
					resolve(result)
				},
				(_, err) => {
					reject(err)
				}
			)
		})
	})
	return promise
}

export function fetchPlaces() {
	const promise = new Promise((resolve, reject) => {
		database.transaction(tx => {
			tx.executeSql(
				`SELECT * FROM favouritePlaces`,
				[],
				(_, result) => {
					resolve(result.rows._array)
				},
				(_, err) => {
					console.error(err)
					reject(err)
				}
			)
		})
	})
	return promise
}
