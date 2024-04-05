import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

export default function ProductInput({ onProductAdd }) {
  const [product, setProduct] = useState("");
  
  const inputHandler = (val) => setProduct(val);

  const submitHandler = () => {
    const trimmedProduct = product.trim();
    // if (trimmedProduct !== "" && trimmedProduct.length > 1) {
      onProductAdd(trimmedProduct);
      setProduct("");
    // }
  };
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={inputHandler}
        value={product}
        maxLength={9}
      />
      <Button title="Valider" onPress={submitHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 9,
    fontSize: 16,
    flexGrow: 1,
    marginBottom: 9
  },
});
