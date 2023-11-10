import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlacehandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={createPlacehandler} />;
}
export default AddPlace;
