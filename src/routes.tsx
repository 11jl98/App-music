import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Login from "./screens/login";
import Home from "./screens/home";
import Playlist from "./screens/playlist";
import Search from "./screens/search";
import Favorites from "./screens/userFavorites";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playlist"
        component={Playlist}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      activeColor="#f0edf6"
      inactiveColor="#dcdc"
      barStyle={{
        backgroundColor: "#000000a1",
        position: "absolute",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={!focused ? "home-outline" : "home"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pesquisa"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={!focused ? "search-outline" : "search"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Suas playlists"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={!focused ? "layers-outline" : "layers"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyStack;
