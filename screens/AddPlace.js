import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }) {
  function createPlacehandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={createPlacehandler} />;
}
export default AddPlace;
