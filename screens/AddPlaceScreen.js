import PlaceForm from '../components/PlaceForm'
import { insertPlace } from '../util/database'

const AddPlaceScreen = ({ navigation }) => {
	const onFormSubmit = async place => {
		await insertPlace(place)
		navigation.navigate('Favourites')
	}
	return <PlaceForm onFormSubmit={onFormSubmit} />
}

export default AddPlaceScreen
