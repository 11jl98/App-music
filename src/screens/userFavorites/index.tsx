import { StyleSheet, View } from "react-native";
import Header from "../../components/Header";
import UserFavorites from "../../components/UserFavorites";
import { UserProvider } from "../../context/user";
export default function Favorites() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <Header />
        <UserFavorites/>
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
