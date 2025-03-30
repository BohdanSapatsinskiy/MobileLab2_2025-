import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Tabs from "../components/tabsBlock";
import { useTheme } from "../contexts/ThemeContext";


export default function Chat() {
  const { theme } = useTheme();

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
    <View style={theme.screenContainer}>
      <View style={theme.innerChatContainer}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        <ScrollView style={theme.chatListContainer}>
          {chats.map(chat => (
            <View key={chat.id} style={theme.chatContainer}>
              <View style={theme.chatDetailsContainer}>
                <Image style={theme.chatAvatar} source={chat.avatar} />
                <View>
                  <Text style={theme.userName}>{chat.userName}</Text>
                  <Text style={theme.messageText}>{chat.message}</Text>
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

