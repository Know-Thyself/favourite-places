import { useEffect, useState } from 'react'
import PlacesList from '../components/PlacesList'
import { useIsFocused } from '@react-navigation/native'

const AllPlacesScreen = ({ route }) => {
	const [favouritePlaces, setFavouritePlaces] = useState([])
	const isFocused = useIsFocused()
	useEffect(() => {
		if (isFocused && route.params) {
			setFavouritePlaces(curr => [...curr, route.params.place])
		}
	}, [route, isFocused])
	return <PlacesList places={favouritePlaces} />
}

export default AllPlacesScreen
