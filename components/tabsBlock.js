import React from 'react';
import { TouchableOpacity, Text, StyleSheet,View } from 'react-native';

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <View style={styles.buttonsContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={[styles.tab, activeTab === tab.id && styles.activeTab]}
          onPress={() => setActiveTab(tab.id)}
        >
          <Text style={[styles.text, activeTab === tab.id && styles.activeText]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor:"#303649",
    justifyContent: 'center',
    alignItems: 'center',
    overflow:"hidden",
    height:40,
    borderRadius: 8,
    padding:5,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height:36,
  },
  activeTab: {
    backgroundColor: '#1C202C',
  },
  text: {
    fontSize: 14,
    color:"#7B8D9D",
  },
  activeText: {
    color: 'white',
  },
});

export default Tabs;