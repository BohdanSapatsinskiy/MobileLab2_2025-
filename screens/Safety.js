import React, { useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity} from "react-native";
import Tabs from "../components/tabsBlock";
import { useTheme } from "../contexts/ThemeContext";

export default function Safety() {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("safety");
  const tabs = [
    { id: "chats", label: "Guard" },
    { id: "friends", label: "Confirmations" },
  ];

  return (
    <View style={theme.screenContainer}>
      <View style={theme.innerContainer}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

        <ImageBackground
          source={require("../img/Stroke.png")}
          style={theme.authContainer}
        >
          <Text style={theme.authTitle}>Logged in as player</Text>
          <Text style={theme.authCode}>N5KCV</Text>
          <View style={theme.authStatusBar}>
            <View style={theme.authIndicator} />
          </View>
        </ImageBackground>
        <View style={theme.authTextContainer}>
          <Text style={theme.authDescription}>
            You’ll enter your code each time you enter your password to sign in to your Steam account.
          </Text>
          <Text style={theme.authTip}>
            Tip: If you don't share your PC, you can select "Remember my password" when you sign in to the PC client to enter your password and authenticator code less often.
          </Text>
        </View>


        <View style={theme.actionButtonsContainer}>
          <TouchableOpacity style={[theme.actionButton, theme.firstActionButton]}>
            <Text style={theme.actionButtonText}>Remove Authenticator</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={theme.actionButton}>
            <Text style={theme.actionButtonText}>My Recovery Code</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={[theme.actionButton, theme.lastActionButton]}>
            <Text style={theme.actionButtonText}>Help</Text>
            <Image source={require("../img/arrow.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

