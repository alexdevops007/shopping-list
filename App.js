import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [product, setProduct] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = (val) => setProduct(val);

  const capitalizeFirstLetter = (string) => {
    return {
      key: Date.now().toString(),
      name: string.charAt(0).toUpperCase() + string.slice(1)
    };
  };

  const submitHandler = () => {
    const trimmedProduct = product.trim();
    if (trimmedProduct !== "") {
      setList((currentList) => [...currentList, capitalizeFirstLetter(trimmedProduct)]);
      setProduct("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
        />
        <Button title="Valider" onPress={submitHandler} />
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Text style={styles.element}>
            {item.name}
          </Text>
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
  inputContainer: {
    flexDirection: "row",
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 16,
    flexGrow: 1,
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
  },
});
