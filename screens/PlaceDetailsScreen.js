import { useEffect, useState } from 'react'
import {
	Image,
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { getPlaceById } from '../util/database'
import { Colors } from '../constants/colors'

const PlaceDetailsScreen = ({ route }) => {
	const selectedPlaceId = route.params.id
	const [place, setPlace] = useState({})
	const [showMap, setShowMap] = useState(false)

	useEffect(() => {
		const loadPlaceData = async () => {
			const selectedPlace = await getPlaceById(selectedPlaceId)
			setPlace(selectedPlace[0])
		}
		loadPlaceData()
	}, [selectedPlaceId])
	
	return (
		<View style={styles.parentContainer}>
			<ScrollView>
				<View style={styles.imageAndTextWrapper}>
					<Image source={{ uri: place.imageUri }} style={styles.image} />
					<View style={styles.textWrapper}>
						<Text style={styles.text}>Title: {place.title}</Text>
						<Text style={styles.text}>Country: {place.country}</Text>
						<Text style={styles.text}>Subregion: {place.subregion}</Text>
						<Text style={styles.text}>Postcode: {place.postcode}</Text>
						<Text style={styles.text}>City: {place.city} </Text>
					</View>
				</View>
				<Pressable onPress={() => setShowMap(!showMap)} style={styles.button}>
					<Text style={styles.buttonText}>
						{showMap ? 'Hide Map' : 'View on Map'}
					</Text>
				</Pressable>
				{showMap && (
					<View style={styles.mapContainer}>
						<MapView
							initialRegion={{
								longitudeDelta: 0.01,
								latitudeDelta: 0.01,
								latitude: place.lat,
								longitude: place.lng,
							}}
							style={styles.map}
						>
							<Marker
								coordinate={{
									latitude: place.lat,
									longitude: place.lng,
								}}
							/>
						</MapView>
					</View>
				)}
			</ScrollView>
		</View>
	)
}

export default PlaceDetailsScreen

const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		backgroundColor: Colors.secondaryScreenBg,
	},
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.screenBg,
	},
	fallbackText: {
		fontSize: 16,
		color: '#C4C2B5',
	},
	itemWrapper: {
		flex: 1,
		width: '100%',
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	pressed: {
		backgroundColor: Colors.headerTintColor,
		borderRadius: 8,
	},
	imageAndTextWrapper: {
		flexDirection: 'row',
		backgroundColor: Colors.headerTintColor,
		gap: 8,
		borderRadius: 8,
	},
	image: {
		borderTopLeftRadius: 8,
		borderBottomLeftRadius: 8,
		height: 180,
		flex: 1,
	},
	textWrapper: {
		flex: 2,
		justifyContent: 'center',
		// borderTopRightRadius: 16,
	},
	text: {
		fontSize: 16,
		fontWeight: '600',
		color: Colors.grayish,
	},
	lightText: {
		color: Colors.grayish,
	},
	button: {
		flex: 1,
		width: '70%',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		backgroundColor: Colors.grayish,
		padding: 8,
		marginVertical: 32,
		borderRadius: 4,
	},
	buttonText: {
		fontSize: 20,
		color: Colors.headerTintColor,
	},
	mapContainer: {
		// zIndex: -1,
		// overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		// borderBottomLeftRadius: 16,
		// borderBottomRightRadius: 16,
	},
	map: {
		height: 280,
		width: '100%',
		// borderBottomLeftRadius: 16,
		// borderBottomRightRadius: 16,
	},
})
