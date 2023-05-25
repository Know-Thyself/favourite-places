import PlaceForm from '../components/PlaceForm'

const AddPlaceScreen = ({ navigation }) => {
	const onFormSubmit = place => {
		navigation.navigate('Favourites', { place: place })
	}
	return <PlaceForm onFormSubmit={onFormSubmit} />
}

export default AddPlaceScreen
