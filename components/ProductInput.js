import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import ButtonComponent from "./button/ButtonComponent";

export default function ProductInput({
  onProductAdd,
  displayModal,
  onProductCancel,
}) {
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
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.containerView}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
        />
        <View style={styles.containerButton}>
          <ButtonComponent
            onPressHandler={submitHandler}
            style={styles.bgBtnValidate}
          >
            Valider
          </ButtonComponent>

          <ButtonComponent
            onPressHandler={onProductCancel}
            style={styles.bgBtnCancel}
          >
            Annuler
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 9,
    fontSize: 16,
    // flexGrow: 1,
    marginBottom: 9,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bgBtnValidate: {
    backgroundColor: "#34ace0",
    borderRadius: 6,
    width: 150,
  },
  bgBtnCancel: {
    backgroundColor: "#b33939",
    borderRadius: 6,
    width: 150,
  },
});
