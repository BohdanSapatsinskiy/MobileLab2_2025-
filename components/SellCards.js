import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SellCards({ game }) {
  return (
    <View style={styles.card}>
      <Image source={game.image} style={styles.cardImage} />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>{game.title}</Text>
        <Text style={styles.cardAbout}>{game.description}</Text>
        <View style={styles.cardInfo}>
          <View style={styles.cardPart}>
            <View style={styles.cardDiscount}>
              <Text style={styles.cardDiscountText}>{game.discount}</Text>
            </View>
            <View style={styles.cardPrice}>
              <Text style={styles.oldPrice}>{game.oldPrice}</Text>
              <Text style={styles.newPrice}>{game.newPrice}</Text>
            </View>
          </View>
          <View style={styles.cardPart}>
            <Image source={game.platform} style={styles.cardPlatform} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
  },
  card: {
    width: 330,
    height: 230,
    borderRadius: 25,
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'end',
    position: 'relative',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
  cardTitle: {
    color: 'white',
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
  },
  cardAbout: {
    color: '#ececec',
    fontSize: 18,
    margin: 5,
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardPart: {
    width: 'auto',
    height: 22,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    overflow: 'hidden',
  },
  cardDiscount: {
    width: 33,
    height: '100%',
    backgroundColor: 'rgba(0, 212, 74, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDiscountText: {
    color: '#ececec',
    fontSize: 12,
  },
  cardPrice: {
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 2,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    marginRight: 5,
    color: '#ececec',
    fontSize: 12,
  },
  newPrice: {
    color: '#ececec',
    fontSize: 12,
  },
  cardPlatform: {
    height: 17,
    width: 17,
    margin: 2,
  },
});
