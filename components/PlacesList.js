import {
	FlatList,
	Text,
	Pressable,
	View,
	Image,
	StyleSheet,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Colors } from '../constants/colors'

const PlacesList = ({ places }) => {
	const selectHandler = () => {}
	return places.length ? (
		<FlatList
			style={styles.parentContainer}
			data={places}
			keyExtractor={item => item.id}
			renderItem={({ item }) => {
				return (
					<Pressable onPress={selectHandler} style={styles.itemWrapper}>
						<View style={styles.imageAndTextWrapper}>
							<Image source={{ uri: item.imageUri }} style={styles.image} />
							<View style={styles.textWrapper}>
								<Text style={styles.text}>Title: {item.title}</Text>
								<Text style={styles.text}>Country: {item.country}</Text>
								<Text style={styles.text}>Subregion: {item.subregion}</Text>
								<Text style={styles.text}>Postcode: {item.postcode}</Text>
								<Text style={styles.text}>City: {item.city}</Text>
							</View>
						</View>
						<View style={styles.mapContainer}>
							<MapView
								initialRegion={{
									longitudeDelta: 0.01,
									latitudeDelta: 0.01,
									latitude: item.lat,
									longitude: item.lng,
								}}
								style={styles.map}
							>
								<Marker
									coordinate={{
										latitude: item.lat,
										longitude: item.lng,
									}}
								/>
							</MapView>
						</View>
					</Pressable>
				)
			}}
		/>
	) : (
		<View style={styles.fallbackContainer}>
			<Text style={styles.fallbackText}>You haven't added places yet</Text>
		</View>
	)
}

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
	imageAndTextWrapper: {
		flexDirection: 'row',
		backgroundColor: Colors.headerTintColor,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16,
		gap: 8,
	},
	image: {
		borderTopLeftRadius: 16,
		height: 140,
		flex: 1,
	},
	textWrapper: {
		flex: 2,
		justifyContent: 'center',
		borderTopRightRadius: 16,
	},
	text: {
		fontSize: 16,
		fontWeight: '600',
	},
	mapContainer: {
		zIndex: -1,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
	},
	map: {
		height: 180,
		width: '100%',
		borderBottomLeftRadius: 16,
		borderBottomRightRadius: 16,
	},
})

export default PlacesList
