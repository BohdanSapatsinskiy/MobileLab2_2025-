import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Profile() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileContent}>
        <View style={styles.profileHeader}>
          <Image style={styles.profileImage} source={require("../img/david.png")} />
          <Text style={styles.profileName}>Богдан Сапацінський</Text>
          <Text style={styles.profileGroup}>ІПЗк-24-1</Text>
        </View>

        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.firstActionButton]}>
            <Text style={styles.actionButtonText}>Settings</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.actionButton, styles.lastActionButton]}>
            <Text style={styles.actionButtonText}>LogOut</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: "#1C202C",
  },
  profileContent: {
    marginTop: 60,
    marginLeft: 20,
    flex: 1,
    marginRight: 10,
  },
  profileHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  profileGroup: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
  actionButtonsContainer: {
    marginTop: 20,
  },
  actionButton: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:"#202532",
    borderColor: "#1C202C",
    margin: 5,
  },
  firstActionButton: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastActionButton: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
});