import { Button, StyleSheet, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

export default function ProductInput({ onProductAdd }) {
  const [product, setProduct] = useState("");
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (product.trim().length > 1) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [product]);

  const inputHandler = (val) => setProduct(val);

  const submitHandler = () => {
    const trimmedProduct = product.trim();
    if (trimmedProduct !== "" && trimmedProduct.length > 1) {
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
      <Button title="Valider" onPress={submitHandler} disabled={isDisable} />
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
