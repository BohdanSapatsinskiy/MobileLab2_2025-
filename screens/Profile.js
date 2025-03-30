import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function Profile() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={theme.profileContainer}>
      <View style={theme.profileContent}>
        <View style={theme.profileHeader}>
          <Image style={theme.profileImage} source={require("../img/david.png")} />
          <Text style={theme.profileName}>Богдан Сапацінський</Text>
          <Text style={theme.profileGroup}>ІПЗк-24-1</Text>
        </View>

        <View style={theme.actionButtonsContainer}>
          <TouchableOpacity style={[theme.actionButton, theme.firstActionButton]}>
            <Text style={theme.actionButtonText}>Settings</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleTheme} style={theme.actionButton}>
            <Text style={theme.actionButtonText}>Switch Theme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[theme.actionButton, theme.lastActionButton]}>
            <Text style={theme.actionButtonText}>LogOut</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
        </View>


      </View>
    </View>
  );
}
