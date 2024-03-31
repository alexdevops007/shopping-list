import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [product, setProduct] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = (val) => setProduct(val);

  const capitalizeFirstLetter = (string) =>
    string.charArt(0).toUpperCase() + string.slice(1);

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
        <Button title="valider" onPress={submitHandler} />
      </View>
      <ScrollView>
        <View style={styles.items}>
          {list.map((product, index) => (
            <Text style={styles.element} key={index}>
              {product}
            </Text>
          ))}
        </View>
      </ScrollView>
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
