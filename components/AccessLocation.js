import { Pressable, StyleSheet, View, Text, Alert } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { Colors } from '../constants/colors'
import {
	getCurrentPositionAsync,
	useForegroundPermissions,
} from 'expo-location'
import { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

const AccessLocation = ({ location, setLocation }) => {
	const [status, requestPermission] = useForegroundPermissions()
	// const [location, setLocation] = useState(null)

	const getLocation = async () => {
		if (!status.granted) {
			await requestPermission()
		}
		if (status.status !== 'granted') {
			Alert.alert(
				'Permission denied',
				'Please allow the app to use your device location'
			)
			return
		}
		const currentLocation = await getCurrentPositionAsync()
		setLocation(currentLocation.coords)
	}

	const selectLocation = event => {
		setLocation(event.nativeEvent.coordinate)
	}

	return (
		<View>
			<View>
				<Pressable style={styles.button} onPress={getLocation}>
					<Text style={styles.text}>Pick a location</Text>
					<FontAwesome5
						name='map-marked-alt'
						size={24}
						color={Colors.headerTintColor}
					/>
				</Pressable>
				{location && (
					<MapView
						initialRegion={{
							longitudeDelta: 0.01,
							latitudeDelta: 0.01,
							...location,
						}}
						onPress={selectLocation}
						style={styles.map}
					>
						<Marker
							coordinate={{
								...location,
							}}
						/>
					</MapView>
				)}
			</View>
		</View>
	)
}

export default AccessLocation

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 16,
		backgroundColor: Colors.headerBg,
		borderRadius: 7,
		padding: 8,
		marginVertical: 16,
	},
	text: {
		color: Colors.headerTintColor,
		fontSize: 16,
	},
	map: {
		height: 160,
		width: '100%',
	},
})
