import { StyleSheet, Text, View } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizza Peperoni</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  title: { fontSize: 18, fontWeight: "600" , marginVertical: 10},
  price: {
color: Colors.light.tint,
fontWeight: 'bold'
  }
});
