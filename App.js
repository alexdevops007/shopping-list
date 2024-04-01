import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import ProductInput from "./components/ProductInput";

export default function App() {
  const [list, setList] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return {
      key: Date.now().toString(),
      name: string.charAt(0).toUpperCase() + string.slice(1)
    };
  };

  const addProductToList = (productName) =>
    setList((currentList) => [
      ...currentList,
      capitalizeFirstLetter(productName),
    ]); 

  const removeItem = (key) => {
    setList((currentList) => currentList.filter(item => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductToList} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.element}>
              {item.name}
            </Text>
            <Button title="X" onPress={() => removeItem(item.key)} />
          </View>
        )}
        keyExtractor={(item) => item.key}
        style={styles.items}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "#c0392b",
    color: "#fff",
    padding: 15,
    fontSize: 17,
    marginVertical: 5,
    marginRight: 10,
    flexGrow: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
