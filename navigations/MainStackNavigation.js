import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddPlaceScreen from '../screens/AddPlaceScreen'
import AllPlacesScreen from '../screens/AllPlacesScreen'

const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='Favourite Places' component={AllPlacesScreen} />
			<Stack.Screen name='Add a Place' component={AddPlaceScreen} />
		</Stack.Navigator>
	)
}

export default MainStackNavigation
