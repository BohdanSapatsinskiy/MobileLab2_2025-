import { View, Text, Image, FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import SortButtons from "../components/sortButtons";
import SellCards from '../components/SellCards';

export default function Store() {

  const games = [
    {
      title: 'Dead by Daylight',
      description: 'Recommended by your friend, Player',
      discount: '-70%',
      oldPrice: '$18',
      newPrice: '$5',
      image: require('../img/adc-games/deadbydaylight.png'),
      platform: require('../img/platform/windows.png'),
    },
    {
      title: 'Game 2',
      description: 'Recommended by your friend, Player',
      discount: '-50%',
      oldPrice: '$30',
      newPrice: '$15',
      image: require('../img/adc-games/deadbydaylight.png'),
      platform: require('../img/platform/windows.png'), 
    },
  ];


  const buttons = ["Top Sellers", "Free to play", "Early access", "New in 2025"];
  const products = [
    {
      id: "1",
      image: require("../img/small-games/gta5.png"),
      title: "Grand Theft Auto V",
      platform: "Windows, Xbox, PS4",
      newPrice: "$35",
    },
    {
      id: "2",
      image: require("../img/small-games/factorio.png"),
      title: "Factorio",
      platform: "Windows",
      newPrice: "$7",
    },
    {
      id: "3",
      image: require("../img/small-games/gta5.png"),
      title: "Grand Theft Auto V",
      platform: "Windows",
      newPrice: "$35",
    },
    {
      id: "4",
      image: require("../img/small-games/factorio.png"),
      title: "Factorio",
      platform: "Windows",
      newPrice: "$7",
    },
    {
      id: "5",
      image: require("../img/small-games/gta5.png"),
      title: "Grand Theft Auto V",
      platform: "Windows",
      newPrice: "$35",
    },
    {
      id: "6",
      image: require("../img/small-games/factorio.png"),
      title: "Factorio",
      platform: "Windows",
      newPrice: "$7",
    },
  ];

  const renderProduct = ({ item }) => (
    <View style={styles.block}>
      <Image source={item.image} style={styles.blockPicture} />
      <View style={{ paddingLeft: 10, alignItems: "flex-start" }}>
        <Text style={styles.gameName}>{item.title}</Text>
        <View style={styles.platformBlock}>
          <Image source={require("../img/platform/windows.png")} style={styles.blockIcon} />
          <Text style={styles.platformNameText}>{item.platform}</Text>
        </View>
      </View>
      <View style={styles.gamePrice}>
        <Text style={styles.gamePriceText}>{item.newPrice}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainBlock}>
      <View style={styles.content}>

      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView ScrollView horizontal={true} style={{ padding: 10 }}>
        {games.map((game, index) => (
          <SellCards key={index} game={game} />
        ))}
        </ScrollView>
      </SafeAreaView>

      <SortButtons buttons={buttons} />


      <SafeAreaView style={{ flex: 1 }}>

          <FlatList data={products} keyExtractor={(item) => item.id} renderItem={renderProduct} />
 
      </SafeAreaView>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    flex: 1,
    backgroundColor: "#1C202C",
  },
  content: {
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
    marginRight: 10,
  },
  block: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  blockPicture: {
    borderRadius: 5,
    width: 85,
    height: 60,
  },
  blockIcon: {
    width: 12.5,
    height: 12.5,
  },
  gameName: {
    fontSize: 16,
    color: "white",
  },
  gamePrice: {
    marginLeft: "auto",
  },
  gamePriceText: {
    fontSize: 18,
    color: "white",
  },
  platformBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  platformNameText: {
    fontSize: 14,
    color: "#7B8D9D",
  },
});
