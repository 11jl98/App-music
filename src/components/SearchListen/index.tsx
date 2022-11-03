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
import { Feather } from "@expo/vector-icons";

export default function SearchLiten(): JSX.Element {
  return (
    <ImageBackground
    source={require("../../assets/playlistsBackground.png")}
    resizeMode="cover"
    style={styles.container}
  >
      <View style={styles.input_serch}>
        <TextInput placeholder="Digite sua pesquisa..." placeholderTextColor="#fff" style={{ paddingStart: 10, color: "#fff"}}/>
        <Feather
          name="search"
          size={22}
          color="#fff"
          style={{ alignSelf: "center", paddingEnd: 10 }}
        />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
    
  },
  input_serch: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#fff",
    padding:3,
    borderRadius: 50,
    marginStart: 14,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});
