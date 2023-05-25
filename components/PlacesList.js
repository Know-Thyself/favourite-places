import {
	FlatList,
	Text,
	Pressable,
	View,
	Image,
	StyleSheet,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const PlacesList = ({ places }) => {
	const selectHandler = () => {}
	return places.length ? (
		<FlatList
			data={places}
			keyExtractor={item => item.id}
			renderItem={({ item }) => {
				return (
					<Pressable onPress={selectHandler}>
						<MapView
							initialRegion={{
								longitudeDelta: 0.01,
								latitudeDelta: 0.01,
								...item.location,
							}}
							style={styles.map}
						>
							<Marker
								coordinate={{
									...item.location,
								}}
							/>
						</MapView>
						<Image source={{ uri: item.imageUri }} style={styles.image} />
						<View>
							<Text>{item.title}</Text>
							<Text>Country: {item.address.country}</Text>
							<Text>Subregion: {item.address.subregion}</Text>
							<Text>Postcode: {item.address.postalCode}</Text>
							<Text>City: {item.address.city}</Text>
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
	fallbackContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	fallbackText: {
		fontSize: 16,
	},
	image: {
		height: 200,
		width: '100%',
		marginVertical: 16,
	},
	map: {
		height: 280,
		width: '100%',
	},
})

export default PlacesList
