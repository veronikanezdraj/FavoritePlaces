import { Pressable, Text, View, Image, StyleSheet } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.adress}</Text>
      </View>
    </Pressable>
  );
}
export default PlaceItem;

const styles = StyleSheet.create({
  container: {},
});
