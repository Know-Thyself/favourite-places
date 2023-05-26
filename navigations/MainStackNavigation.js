import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddPlaceScreen from '../screens/AddPlaceScreen'
import AllPlacesScreen from '../screens/AllPlacesScreen'
import { Entypo } from '@expo/vector-icons'
import { Colors } from '../constants/colors'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'

const Stack = createNativeStackNavigator()

const MainStackNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: Colors.headerBg },
				headerTintColor: Colors.headerTintColor,
				// contentStyle: { backgroundColor: Colors.contentBg },
			}}
		>
			<Stack.Screen
				name='Favourites'
				component={AllPlacesScreen}
				options={({ navigation }) => ({
					title: 'Your Favourite Places',
					headerRight: ({ tintColor }) => (
						<Entypo
							name='add-to-list'
							size={24}
							color={tintColor}
							onPress={() => navigation.navigate('Add')}
						/>
					),
				})}
			/>
			<Stack.Screen
				name='Add'
				component={AddPlaceScreen}
				options={{ title: 'Add a New Place' }}
			/>
			<Stack.Screen
				name='Details'
				component={PlaceDetailsScreen}
				options={{ title: 'Details' }}
			/>
		</Stack.Navigator>
	)
}

export default MainStackNavigation
