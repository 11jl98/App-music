import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { ContextUser } from "../../context/user";
import { useContext, useEffect } from "react";
import { getUserType } from "../../@types/redirectContext";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 8
  : 50;

export default function Hearder(): JSX.Element {
  const { getUserProfile, user, idUser } = useContext<getUserType>(ContextUser);

  useEffect(() => {
      getUserProfile();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{ uri: user?.images[0].url }} style={styles.image} />
          <TouchableOpacity onPress={()=>console.log(user?.id)}>
          <Text style={styles.username}>
            {user?.display_name || "JOAO LUIZ"}
          </Text>
          </TouchableOpacity>
            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingBottom: 17,
  },
  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginStart: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
