import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function isActive({ item, isActive }: any) {
  const navigation = useNavigation();
  return (
    <>
      {isActive.includes("playlists") && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              "Playlist" as never,
              {
                idPlaylist: item.id,
              } as never
            )
          }
          style={styles.data_playlists}
        >
          <View>
            <Image
              source={{
                uri: item?.images[0]?.url
                  ? item?.images[0]?.url
                  : "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2",
              }}
              style={styles.images_album}
            />
          </View>
          <View style={styles.container_description}>
            <Text style={styles.sub_title}>{item.name}</Text>
            <Text style={styles.desciption}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      )}
      {isActive.includes("artisits") && (
        <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate(
          //     "Playlist" as never,
          //     {
          //       idPlaylist: item.id,
          //     } as never
          //   )
          // }
          style={styles.data_playlists}
        >
          <View>
            <Image
              source={{
                uri: item?.images[0]?.url
                  ? item?.images[0]?.url
                  : "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2",
              }}
              style={styles.images_artist}
            />
          </View>
          <View style={styles.container_description_artist}>
            <Text style={styles.sub_title}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      {isActive.includes("albums") && (
        <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate(
          //     "Playlist" as never,
          //     {
          //       idPlaylist: item.id,
          //     } as never
          //   )
          // }
          style={styles.data_playlists}
        >
          <View>
            <Image
              source={{
                uri: item?.album?.images[0]?.url
                  ? item?.album?.images[0]?.url
                  : "https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2",
              }}
              style={styles.images_album}
            />
          </View>
          <View style={styles.container_description}>
            <Text style={styles.sub_title}>{item.name}</Text>
            <Text style={styles.desciption}>
              {item.album.artists.name} - {item.album.artists.type}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  images_album: {
    width: 130,
    height: 130,
    margin: 5,
  },
  images_artist: {
    width: 110,
    height: 110,
    margin: 5,
    borderRadius: 110 / 2,
  },
  data_playlists: {
    flexDirection: "row",
  },
  container_description: {
    margin: 10,
  },
  container_description_artist: {
    alignItems: "center",
    justifyContent: "center",
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
    maxWidth: 230,
  },
});
