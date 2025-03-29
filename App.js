import React from "react"; 
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Store from "./screens/Store";
import Community from "./screens/Community";
import Chat from "./screens/Chat";
import Safety from "./screens/Safety";
import Profile from "./screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconPath;

            if (route.name === "Store") {
              iconPath = require("./img/nav-elem/store.png");
            } else if (route.name === "Community") {
              iconPath = require("./img/nav-elem/community.png");
            } else if (route.name === "Chat") {
              iconPath = require("./img/nav-elem/chat.png");
            } else if (route.name === "Safety") {
              iconPath = require("./img/nav-elem/safety.png");
            } else if (route.name === "Profile") {
              iconPath = require("./img/nav-elem/profile.png");
              return (
                <Image
                  source={iconPath}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              );
            }

            return (
              <Image
                source={iconPath}
                style={{
                  tintColor: focused ? "white" : "#4B5664", 
                }}
              />
            );
          },
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#12141C", 
            height: 70,
          },
        })}
      >
        <Tab.Screen name="Store" component={Store} />
        <Tab.Screen name="Community" component={Community} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Safety" component={Safety} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


