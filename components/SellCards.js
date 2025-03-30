import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from "../contexts/ThemeContext";

export default function SellCards({ game }) {
  const { theme } = useTheme();
  return (
    <View style={theme.card}>
      <Image source={game.image} style={theme.cardImage} />
      <View style={theme.cardText}>
        <Text style={theme.cardTitle}>{game.title}</Text>
        <Text style={theme.cardAbout}>{game.description}</Text>
        <View style={theme.cardInfo}>
          <View style={theme.cardPart}>
            <View style={theme.cardDiscount}>
              <Text style={theme.cardDiscountText}>{game.discount}</Text>
            </View>
            <View style={theme.cardPrice}>
              <Text style={theme.oldPrice}>{game.oldPrice}</Text>
              <Text style={theme.newPrice}>{game.newPrice}</Text>
            </View>
          </View>
          <View style={theme.cardPart}>
            <Image source={game.platform} style={theme.cardPlatform} />
          </View>
        </View>
      </View>
    </View>
  );
}

