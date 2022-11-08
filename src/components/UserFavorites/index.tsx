import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ContextFvorites } from "../../context/userfavorites";

export default function UserFavorites() {
  const { active, getFavorites, data } = useContext(ContextFvorites);
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={require("../../assets/playlistsBackground.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <Text style={styles.title}>Sua biblioteca</Text>
      <View style={styles.container_filters}>
        <FlatList
          data={active}
          keyExtractor={(item, index) => String(index)}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => getFavorites(item)}
              style={item.active ? styles.filter_enable : styles.filter_disable}
            >
              <Text
                style={
                  item.active
                    ? styles.sub_title_enable
                    : styles.sub_title_disable
                }
              >
                {item.type}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item }) => (
            <TouchableOpacity  onPress={()=> navigation.navigate("Playlist" as never, {
              idPlaylist: item.id
            } as never)} style={styles.data_playlists}>
                  <View>
                      <Image
                        source={{ uri: item?.images[0]?.url }}
                        style={styles.images_album}
                      />
                  </View>
              <View style={styles.container_description}>
                <Text style={styles.sub_title}>{item.name}</Text>
                <Text style={styles.desciption}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
  filter_disable: {
    padding: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    Width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  filter_enable: {
    padding: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
    color: "#000",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    Width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  sub_title_enable: {
    fontSize: 14,
    color: "#000",
  },
  sub_title_disable: {
    fontSize: 14,
    color: "#fff",
  },
  images_album: {
    width: 130,
    height: 130,
    margin: 5,
  },
  data_playlists: {
    flexDirection: "row",
  },
  container_description: {
    margin: 10,
  },
  sub_title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  desciption: {
    fontSize: 12,
    color: "#dcdc",
    marginTop: 15,
    maxWidth: 230,
  },
});
