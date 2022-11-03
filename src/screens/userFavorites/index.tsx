import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import UserFavorites from "../../components/UserFavorites";
import { UserProvider } from "../../context/user";
import { FavoritesProvider } from "../../context/userfavorites";
export default function Favorites() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <Header />
        <FavoritesProvider>
          <UserFavorites />
        </FavoritesProvider>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
