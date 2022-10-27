import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import Playlists from "../../components/Playlist";
import { PlaylistsProvider } from "../../context/palylists";

export default function Playlist({ route }: any) {
  return (
    <PlaylistsProvider>
      <View style={styles.container}>
        <Playlists route={route} />
      </View>
    </PlaylistsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
