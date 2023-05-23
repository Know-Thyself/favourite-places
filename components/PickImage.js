import { Button, View, Image, Alert, Text, StyleSheet } from 'react-native'
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from 'expo-image-picker'
import { useState } from 'react'

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
			<View></View>
			<Button title='Take a Picture' onPress={takeImageHandler} />
			{image && <Image source={{ uri: image }} style={styles.image} />}
		</View>
	)
}

export default PickImage

const styles = StyleSheet.create({
	image: {
		height: 250,
		width: '100%',
	},
})
