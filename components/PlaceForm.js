import { useState } from 'react'
import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native'
import { Colors } from '../constants/colors'
import PickImage from './PickImage'
import AccessLocation from './AccessLocation'

const PlaceForm = ({ navigation }) => {
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [location, setLocation] = useState(null)
	const [place, setPlace] = useState([])

	const formSubmitHandler = () => {
		const placeToSave = {
			title,
			image,
			location,
		}
		setPlace(placeToSave)
		navigation.navigate('Favourites', { place: place })
	}
	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					placeholder='Enter title'
					value={title}
					onChangeText={val => setTitle(val)}
					style={styles.input}
				/>
			</View>
			<PickImage image={image} setImage={setImage} />
			<AccessLocation location={location} setLocation={setLocation} />
			<Pressable onPress={formSubmitHandler} style={styles.button}>
				<Text style={styles.text}>Save</Text>
			</Pressable>
		</ScrollView>
	)
}

export default PlaceForm

const styles = StyleSheet.create({
	form: {
		flex: 1,
		padding: 16,
	},
	label: {
		fontWeight: 'bold',
		color: Colors.headerBg,
		fontSize: 16,
	},
	input: {
		paddingVertical: 8,
		paddingHorizontal: 8,
		fontSize: 16,
		borderBottomColor: Colors.headerBg,
		borderBottomWidth: 1,
		backgroundColor: Colors.primary100,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.headerBg,
		padding: 8,
		marginVertical: 16,
		borderRadius: 4,
	},
	text: {
		fontSize: 16,
		color: Colors.headerTintColor,
	},
})
