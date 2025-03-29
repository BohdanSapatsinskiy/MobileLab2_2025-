import React from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function SortButtons({ buttons }) {
  return (
    <View style={styles.sortBlock}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {buttons.map((text, index) => (
          <TouchableOpacity key={index} style={styles.sortBtn}>
            <Text style={styles.sortBtnText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sortBlock: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  sortBtn: {
    width: 103,
    height: 42,
    margin: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#303649",
  },
  sortBtnText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
  },
});
