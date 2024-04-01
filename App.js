import { useState } from "react";
import { StyleSheet, View } from "react-native";
import ProductInput from "./components/ProductInput";
import ProductList from "./components/ProductList";

export default function App() {
  const [list, setList] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return {
      key: Date.now().toString(),
      name: string.charAt(0).toUpperCase() + string.slice(1),
    };
  };

  const addProductToList = (productName) =>
    setList((currentList) => [
      ...currentList,
      capitalizeFirstLetter(productName),
    ]);

  const removeProductFromList = (key) => {
    setList((currentList) => currentList.filter((item) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <ProductInput onProductAdd={addProductToList} />
      <ProductList data={list} onProductRemove={removeProductFromList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
});
