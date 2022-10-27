import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import Playlists from "../../components/ListPlaylists";
import { UserProvider } from "../../context/user";
import { PlaylistsProvider } from "../../context/palylists";
export default function Home() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <Header />
        <PlaylistsProvider>
          <Playlists />
        </PlaylistsProvider>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
