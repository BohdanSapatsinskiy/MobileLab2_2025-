import React from "react";
import { View, Text, FlatList } from "react-native";
import SortButtons from "../components/sortButtons";
import PostCard from "../components/PostCard";
import { useTheme } from "../contexts/ThemeContext";



export default function CommunityScreen() {
  const { theme } = useTheme();

  const buttons = ["🔍", "All", "ScreenShots", "Artwork", "Workland"];
  const posts = [
    {
      id: "1",
      title: "Eurogamer",
      time: "yesterday * 2:20 pm",
      mainText: "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
      subText: "Coral Castle Museum is suing Fortnite maker Epic Games for trademark infringement and unfair competition.",
      likes: 324,
      comments: 12,
    },
    {
      id: "2",
      title: "Eurogamer",
      time: "yesterday * 2:20 pm",
      mainText: "Another news article",
      subText: "Example subtext.",
      likes: 100,
      comments: 5,
    },
  ];

  return (
    <View style={theme.commumityContainer}>
      <View style={theme.contentContainer}>

      <View style={theme.descriptionContainer}>
        <Text style={theme.descriptionText}>
          Community and official content for all games and software
        </Text>
        <SortButtons buttons={buttons} />
      </View>


        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PostCard {...item} />}
        />
      </View>
    </View>
  );
}

