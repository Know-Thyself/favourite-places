import {
	View,
	Image,
	Alert,
	Text,
	StyleSheet,
	Pressable,
} from 'react-native'
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from 'expo-image-picker'
import { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { Colors } from '../constants/colors'

const PickImage = () => {
	const [image, setImage] = useState()
	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions()
	const verifyPermission = async () => {
		if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission()
			return permissionResponse.granted // returns boolean
		}
		if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
			Alert.alert(
				'Camera Access Permision',
				'You need to allow this app to use the device camera'
			)
			return false
		}
		return true
	}
	const takeImageHandler = async () => {
		const hasPermission = await verifyPermission()
		if (!hasPermission) {
			return
		}
		const image = await launchCameraAsync({
			allowsEditing: true,
			quality: 0.5,
		})
		setImage(image.assets[0].uri)
	}

	return (
		<View>
			<Pressable onPress={takeImageHandler} style={styles.button}>
				<Text style={styles.text}>Take a Picture</Text>
				<Entypo name='camera' size={24} color={Colors.headerTintColor} />
			</Pressable>
			{image && <Image source={{ uri: image }} style={styles.image} />}
		</View>
	)
}

export default PickImage

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
	image: {
		height: 250,
		width: '100%',
	},
})
