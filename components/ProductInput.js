import { Button, StyleSheet, TextInput, View } from 'react-native'
import { useState } from 'react'

export default function ProductInput({ onProductAdd }) {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => setProduct(val);

  const submitHandler = () => {
    const trimmedProduct = product.trim();
    if (trimmedProduct !== "") {
      onProductAdd(trimmedProduct);
      setProduct("");
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        value={product}
      />
      <Button title="Valider" onPress={submitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});