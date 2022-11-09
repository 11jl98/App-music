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
import IsActive from "./IsLIstActive";

export default function UserFavorites() {
  const { active, getFavorites, data, isActive } = useContext(ContextFvorites);
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
        renderItem={({ item }) => <IsActive item={item} isActive={isActive} />}
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
});
