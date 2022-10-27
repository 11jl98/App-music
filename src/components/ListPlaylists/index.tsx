import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { ContextUser } from "../../context/user";
import { ContextPlaylists } from "../../context/palylists";
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Playlists(): JSX.Element {
  const { idUser } = useContext(ContextUser);
  const { PlaylistsUser, playlists } = useContext(ContextPlaylists);
  const navigation = useNavigation()
  useEffect(() => {
    PlaylistsUser();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/playlistsBackground.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>{playlists.message}</Text>
        <FlatList
          data={playlists.playlists?.items}
          keyExtractor={(item) => String(item.id)}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity  onPress={()=> navigation.navigate("Playlist" as never, {
              idPlaylist: item.id
            } as never)} style={styles.data_playlists}>
              <FlatList
                data={item.images}
                keyExtractor={(item, index) => String(index)}
                horizontal={false}
                renderItem={({ item }) => (
                  <View>
                      <Image
                        source={{ uri: item.url }}
                        style={styles.images_album}
                      />
                  </View>
                )}
              />
              <View style={styles.container_description}>
                <Text style={styles.sub_title}>{item.name}</Text>
                <Text style={styles.desciption}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
    marginStart: 5,
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
});
