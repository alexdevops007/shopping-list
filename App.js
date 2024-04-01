import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [product, setProduct] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = (val) => setProduct(val);

  const capitalizeFirstLetter = (string) =>
    string[0].toUpperCase() + string.slice(1);

  const submitHandler = () => {
    const trimmedProduct = product.trim();
    if (product.trim() !== "") {
      setList((currentList) => [
        ...currentList,
        capitalizeFirstLetter(trimmedProduct),
      ]);
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
      {/* <ScrollView>
        <View style={styles.items}>
          {list
            .filter((product) => product.trim() !== "")
            .sort((a, b) => a.localeCompare(b))
            .map((product, index) => (
              <Text style={styles.element} key={index}>
                {product}
              </Text>
            ))}
        </View>
      </ScrollView> */}

      <FlatList
        data={list.filter(product => product.trim() !== "").sort()}
        renderItem={({ item }) => (
          <Text style={styles.element}>
            {item}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
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
