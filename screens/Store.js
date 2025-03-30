import { View, Text, Image, FlatList, themeheet, SafeAreaView, ScrollView } from "react-native";
import SortButtons from "../components/sortButtons";
import SellCards from '../components/SellCards';
import { useTheme } from "../contexts/ThemeContext";


export default function Store() {
  const { theme } = useTheme();

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
    <View style={theme.block}>
      <Image source={item.image} style={theme.blockPicture} />
      <View style={{ paddingLeft: 10, alignItems: "flex-start" }}>
        <Text style={theme.gameName}>{item.title}</Text>
        <View style={theme.platformBlock}>
          <Image source={require("../img/platform/windows.png")} style={theme.blockIcon} />
          <Text style={theme.platformNameText}>{item.platform}</Text>
        </View>
      </View>
      <View style={theme.gamePrice}>
        <Text style={theme.gamePriceText}>{item.newPrice}</Text>
      </View>
    </View>
  );

  return (
    <View style={theme.mainBlock}>
      <View style={theme.content}>

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
