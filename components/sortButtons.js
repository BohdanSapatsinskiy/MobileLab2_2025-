import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function SortButtons({ buttons }) {
  const { theme } = useTheme();
  return (
    <View style={theme.sortBlock}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {buttons.map((text, index) => (
          <TouchableOpacity key={index} style={theme.sortBtn}>
            <Text style={theme.sortBtnText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
