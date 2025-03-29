import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Tabs from "../components/tabsBlock";

export default function Chat() {
  const [activeTab, setActiveTab] = useState("chats");
  const tabs = [
    { id: "chats", label: "Open chats" },
    { id: "friends", label: "My friends" },
  ];

  const chats = [
    { id: 1, userName: "NoName", message: "Ready to play • 14 Jun", avatar: require("../img/chat/avatar1.png"), pointIcon: require("../img/chat/point.png") },
    { id: 2, userName: "NoName", message: "You:Ok • 14 Jun", avatar: require("../img/chat/avatar1.png"), pointIcon: require("../img/chat/whitePoint.png") },
    { id: 3, userName: "Slayer", message: "You:Ok • 14 Jun", avatar: require("../img/chat/avatar2.png"), pointIcon: require("../img/chat/whitePoint.png") },
    { id: 4, userName: "Slayer", message: "You:Ok • 14 Jun", avatar: require("../img/chat/avatar2.png"), pointIcon: require("../img/chat/whitePoint.png") },
    { id: 5, userName: "Cloudy", message: "How are you? • 12 Jun", avatar: require("../img/chat/avatar3.png")  },
    { id: 6, userName: "Cloudy", message: "Hello • 12 Jun", avatar: require("../img/chat/avatar3.png") },
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.innerContainer}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        <ScrollView style={styles.chatListContainer}>
          {chats.map(chat => (
            <View key={chat.id} style={styles.chatContainer}>
              <View style={styles.chatDetailsContainer}>
                <Image style={styles.chatAvatar} source={chat.avatar} />
                <View>
                  <Text style={styles.userName}>{chat.userName}</Text>
                  <Text style={styles.messageText}>{chat.message}</Text>
                </View>
              </View>
              {chat.pointIcon && <Image source={chat.pointIcon} />}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#1C202C",
  },
  innerContainer: {
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
    marginRight: 10,
  },
  chatListContainer: {
    marginTop: 20,
  },
  chatContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  chatDetailsContainer: {
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  chatAvatar:{
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  messageText: {
    fontSize: 14,
    color: "#7B8D9D",
  },
});
