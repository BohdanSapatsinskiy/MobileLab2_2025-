import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, StyleSheet } from "react-native";
import Store from "./screens/store";
import Community from "./screens/community";
import Chat from "./screens/chat";
import Safety from "./screens/safety";
import Profile from "./screens/profile";

const Tab = createBottomTabNavigator();

function CustomHeader({ title, showSearch }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerPart}>
        <Image source={require("./img/logo.png")} style={styles.headerLogo} />
        <Text style={styles.logoText}>{title}</Text>
      </View>
      {showSearch && (
        <View style={[styles.headerPart, styles.searchFix]}>
          <Image source={require("./img/search.png")} style={styles.headerSearch} />
        </View>
      )}
    </View>
  );
}

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
              iconPath = require("./img/david.png");
              return (
                <Image
                  source={iconPath}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 50,
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
          headerShown: true,
          header: () => (
            <CustomHeader
              title={route.name}
              showSearch={route.name !== "Community" && route.name !== "Safety"} 
            />
          ),
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
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#1C202C",
  },
  headerPart: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogo: {
    height: 36,
    width: 36,
    marginRight: 10,
  },
  logoText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  searchFix: {
    justifyContent: "flex-end",
  },
  headerSearch: {
    height: 16,
    width: 16,
  },
});


