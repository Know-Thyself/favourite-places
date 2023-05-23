import {
	FlatList,
	Text,
	Pressable,
	View,
	Image,
	StyleSheet,
} from 'react-native'

const PlacesList = ({ places }) => {
	const selectHandler = () => {}
	return places ? (
		<FlatList
			data={places}
			keyExtractor={item => item.id}
			renderItem={({ item }) => {
				return (
					<Pressable onPress={selectHandler}>
						<Image source={{ uri: item.imageUri }} />
						<View>
							<Text>{item.title}</Text>
							<Text>{item.address}</Text>
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
})

export default PlacesList
