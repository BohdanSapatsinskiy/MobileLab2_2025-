import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useTheme } from "../contexts/ThemeContext";


const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  const { theme } = useTheme();
  return (
    <View style={theme.buttonsContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[theme.tab, activeTab === tab.id && theme.activeTab]}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text style={[theme.text, activeTab === tab.id && theme.activeText]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tabs;