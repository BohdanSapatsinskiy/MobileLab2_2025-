import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, BlurView} from "react-native";
import Tabs from "../components/tabsBlock";

export default function Safety() {
  const [activeTab, setActiveTab] = useState("safety");
  const tabs = [
    { id: "chats", label: "Guard" },
    { id: "friends", label: "Confirmations" },
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={styles.innerContainer}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        <ImageBackground
          source={require("../img/Stroke.png")}
          style={styles.authContainer}
        >
          <Text style={styles.authTitle}>Logged in as player</Text>
          <Text style={styles.authCode}>N5KCV</Text>
          <View style={styles.authStatusBar}>
            <View style={styles.authIndicator} />
          </View>
        </ImageBackground>
        <View style={styles.authTextContainer}>
          <Text style={styles.authDescription}>
            You’ll enter your code each time you enter your password to sign in to your Steam account.
          </Text>
          <Text style={styles.authTip}>
            Tip: If you don't share your PC, you can select "Remember my password" when you sign in to the PC client to enter your password and authenticator code less often.
          </Text>
        </View>


        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={[styles.actionButton, styles.firstActionButton]}>
            <Text style={styles.actionButtonText}>Remove Authenticator</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>My Recovery Code</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.lastActionButton]}>
            <Text style={styles.actionButtonText}>Help</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#1C202C",
    flex: 1,
  },
  innerContainer: {
    marginTop: 20,
    flex: 1,
  },
  authContainer: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  authTextContainer:{
    marginRight: 20,
    marginLeft: 20,
  },
  authTitle: {
    color: "#7B8D9D",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
  },
  authCode: {
    textAlign: "center",
    color: "white",
    fontSize: 54,
    letterSpacing: 5.52,
    fontWeight: "700",
    marginTop: 5,
  },
  authStatusBar: {
    height: 7,
    backgroundColor: "#2A3B4D",
    marginTop: 10,
    borderRadius: 2,
    width: 114,
    alignItems: "start",
  },
  authIndicator: {
    height: 7,
    width: 80,
    backgroundColor: "#2FB4F1",
    borderRadius: 2,
  },
  authDescription: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 20,
    marginBottom: 10,
  },
  authTip: {
    color: "#2FB4F1",
    fontSize: 14,
    fontWeight: "400",
  },
  actionButtonsContainer: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
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
