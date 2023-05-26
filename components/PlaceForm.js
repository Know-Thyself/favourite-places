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
import { Place } from '../models/place'

const PlaceForm = ({ onFormSubmit }) => {
	const [title, setTitle] = useState('')
	const [image, setImage] = useState('')
	const [location, setLocation] = useState(null)
	const [address, setAddress] = useState({})

	const formSubmitHandler = () => {
		const place = new Place(title, image, location, address)
		onFormSubmit(place)
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
			<AccessLocation
				location={location}
				setLocation={setLocation}
				setAddress={setAddress}
			/>
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
