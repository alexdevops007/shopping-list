import { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import ProductInput from "./components/ProductInput";
import ProductList from "./components/ProductList";

export default function App() {
  const [list, setList] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const capitalizeFirstLetter = (string) => {
    return {
      key: Date.now().toString(),
      name: string.charAt(0).toUpperCase() + string.slice(1),
    };
  };

  const addProductToList = (productName) => {
    if (productName.length > 1) {
      setList((currentList) => [
        ...currentList,
        capitalizeFirstLetter(productName),
      ]);
    } else {
      setIsVisibleModal(true)
    }
  }

  const removeProductFromList = (key) => {
    setList((currentList) => currentList.filter((item) => item.key !== key));
  };

  return (
    <View style={styles.container}>
      <Modal 
        visible={isVisibleModal}
        onRequestClose={() => setIsVisibleModal(false)}
      >
        <Text>Hello</Text>
      </Modal>
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
