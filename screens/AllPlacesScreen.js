import { useEffect, useState } from 'react'
import PlacesList from '../components/PlacesList'
import { useIsFocused } from '@react-navigation/native'
import { fetchPlaces } from '../util/database'

const AllPlacesScreen = ({ route }) => {
	const [favouritePlaces, setFavouritePlaces] = useState([])
	const isFocused = useIsFocused()
	useEffect(() => {
		const loadPlaces = async () => {
			const response = await fetchPlaces()
			let str = JSON.stringify(response, null, 2)
			console.log(str, '<<<< response')
		}
		if (isFocused) {
			loadPlaces()
			// setFavouritePlaces(curr => [...curr, route.params.place])
		}
	}, [isFocused])
	return <PlacesList places={favouritePlaces} />
}

export default AllPlacesScreen
