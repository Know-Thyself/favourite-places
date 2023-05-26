import { useEffect, useState } from 'react'
import PlacesList from '../components/PlacesList'
import { useIsFocused } from '@react-navigation/native'
import { fetchPlaces } from '../util/database'

const AllPlacesScreen = () => {
	const [favouritePlaces, setFavouritePlaces] = useState([])
	const isFocused = useIsFocused(false)
	useEffect(() => {
		const loadPlaces = async () => {
			const response = await fetchPlaces()
			setFavouritePlaces(response)
		}
		if (isFocused) {
			loadPlaces()
		}
	}, [isFocused])
	return <PlacesList places={favouritePlaces} />
}

export default AllPlacesScreen
