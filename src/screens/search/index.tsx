import { StyleSheet, View } from "react-native";
import SearchList from "../../components/SearchListen"
import { UserProvider } from "../../context/user";

export default function Search() {
  return (
    <UserProvider>
      <View style={styles.container}>
        <SearchList />
      </View>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
