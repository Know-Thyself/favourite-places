import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainStackNavigation from './navigations/MainStackNavigation'

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<MainStackNavigation />
			</NavigationContainer>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
