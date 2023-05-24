import { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../constants/colors'
import PickImage from './PickImage'
import AccessLocation from './AccessLocation'

const PlaceForm = () => {
	const [title, setTitle] = useState('')
	return (
		<ScrollView style={styles.form}>
			<View>
				<Text style={styles.label}>Title</Text>
				<TextInput
					value={title}
					onChangeText={val => setTitle(val)}
					style={styles.input}
				/>
			</View>
			<PickImage />
			<AccessLocation />
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
})
