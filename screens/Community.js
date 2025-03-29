import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SortButtons from "../components/sortButtons";
import PostCard from "../components/PostCard";

export default function CommunityScreen() {
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
    <View style={styles.commumityContainer}>
      <View style={styles.contentContainer}>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
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

const styles = StyleSheet.create({
  commumityContainer: {
    flex: 1,
    backgroundColor: "#171A24",
    width: "100%",
  },
  contentContainer: {
    flex: 1,
  },
  descriptionContainer: {
    backgroundColor: "#1C202C",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "relative",
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 18,
    color: "#7B8D9D",
    marginBottom: 15,
  },
});
