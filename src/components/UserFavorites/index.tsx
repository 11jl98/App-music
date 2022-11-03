import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  TextInput,
} from "react-native";

import filter from "../../commons";

export default function UserFavorites() {
  return (
    <ImageBackground
      source={require("../../assets/playlistsBackground.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Text style={styles.title}>Sua biblioteca</Text>
      <View style={styles.container_filters}>
        <FlatList
          data={filter}
          keyExtractor={(item, index) => String(index)}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.filter}>
              <Text style={styles.sub_title}>{item.type}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    marginStart: 10,
  },
  container_filters: {
    flexDirection: "row",
  },
  filter: {
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    Width: 90,
    alignItems: "center",
    justifyContent:"center"
  },
  sub_title: {
    fontSize: 14,
    color: "#dcdc",
    marginStart: 5,
  },
});
