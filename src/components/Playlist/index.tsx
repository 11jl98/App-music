import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image,
} from "react-native";
import { ContextPlaylists } from "../../context/palylists";
import { useContext, useEffect, useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { getPlaylistsUserType } from "../../@types/redirectContext";

export default function playlist({ route }: any): JSX.Element {
  const { getPlaylistById, playlistId } = useContext<getPlaylistsUserType>(ContextPlaylists);
  const [headerShown, setHeaderShown] = useState<boolean>(false);
  const { idPlaylist } = route.params;

  useEffect(() => {
    getPlaylistById(idPlaylist);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: playlistId?.images[0].url }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <TouchableOpacity style={styles.return_button}>
          <Entypo
            name="chevron-small-left"
            size={24}
            color="#fff"
            style={styles.icon_return}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{playlistId?.name}</Text>
      </ImageBackground>
      <Text style={styles.sub_title}>{playlistId?.description}</Text>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <Text style={styles.sub_title}>
          {playlistId?.followers.total} de curtidas
        </Text>
        <AntDesign
          name="heart"
          size={14}
          color="#dcdc"
          style={styles.heart_icon}
        />
      </View>
      <FlatList
        data={playlistId?.tracks.items}
        keyExtractor={(item, index) => String(index)}
        horizontal={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => console.log(JSON.stringify(item))}>
            <View style={styles.container_track}>
              <View>
                <Image
                  source={{ uri: item?.track?.album?.images[0].url }}
                  style={styles.images_tracks}
                />
              </View>
              <View style={styles.container_info_track}>
                <Text style={styles.name_music}>{item?.track?.name}</Text>
                <View style={styles.container_artists}>
                  <FlatList
                    data={item?.track?.artists}
                    keyExtractor={(item, index) => String(index)}
                    horizontal={true}
                    renderItem={({ item }) => (
                      <Text
                        numberOfLines={5}
                        key={item.id}
                        style={styles.name_artist}
                      >
                        {item.name},
                      </Text>
                    )}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
    marginBottom: 15,
    marginStart: 10,
    alignSelf: "flex-end",
  },
  sub_title: {
    fontSize: 14,
    color: "#dcdc",
    marginTop: 15,
    marginStart: 5,
  },
  desciption: {
    fontSize: 12,
    color: "#dcdc",
    marginTop: 15,
    maxWidth: 230,
  },
  imageBackground: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    opacity: 0.6,
  },
  spottify_icon: {
    marginTop: 5,
    color: "#dcdc",
  },
  heart_icon: {
    marginTop: 18,
    marginStart: 10,
  },
  images_tracks: {
    width: 60,
    height: 60,
    marginEnd: 10,
  },
  container_track: {
    flexDirection: "row",
    margin: 5,
    marginTop: 15,
  },
  name_music: {
    color: "#fff",
    maxWidth: 325,
  },
  name_artist: {
    color: "#dcdc",
    marginEnd: 2,
  },
  return_button: {
    width: 25,
    height: 25,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 25 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginStart: 10,
    marginTop: 35,
  },
  icon_return: {
    padding: 0,
  },
  container_info_track: {
    flexDirection: "column",
  },
  container_artists: {
    flexDirection: "row",
    flex: 1,
  },
});
