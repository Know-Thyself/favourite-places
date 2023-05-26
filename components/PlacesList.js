import {
	FlatList,
	Text,
	Pressable,
	View,
	Image,
	StyleSheet,
} from 'react-native'
import { Colors } from '../constants/colors'
import { useNavigation } from '@react-navigation/native'

const PlacesList = ({ places }) => {
	const navigation = useNavigation()

	return places.length ? (
		<FlatList
			style={styles.parentContainer}
			data={places}
			keyExtractor={item => item.id}
			renderItem={({ item }) => {
				return (
					<Pressable
						onPress={() => {
							navigation.navigate('Details', { id: item.id })
						}}
						style={({ pressed }) => [
							styles.itemWrapper,
							pressed && styles.pressed,
						]}
					>
						<View style={styles.imageAndTextWrapper}>
							<Image source={{ uri: item.imageUri }} style={styles.image} />
							<View style={styles.textWrapper}>
								<Text style={styles.text}>
									Title: <Text style={styles.lightText}>{item.title}</Text>
								</Text>
								<Text style={styles.text}>
									Country: <Text style={styles.lightText}>{item.country}</Text>
								</Text>
								<Text style={styles.text}>
									Subregion:{' '}
									<Text style={styles.lightText}>{item.subregion}</Text>
								</Text>
								<Text style={styles.text}>
									Postcode:{' '}
									<Text style={styles.lightText}>{item.postcode}</Text>
								</Text>
								<Text style={styles.text}>
									City: <Text style={styles.lightText}>{item.city}</Text>
								</Text>
							</View>
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
		height: 140,
		flex: 1,
	},
	textWrapper: {
		flex: 2,
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
		fontWeight: '600',
	},
	lightText: {
		color: Colors.grayish,
	},
})

export default PlacesList
