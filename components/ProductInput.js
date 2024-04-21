import { Modal, StyleSheet, View } from "react-native";
import { useState } from "react";
import ButtonComponent from "./button/ButtonComponent";
import colors from "../constants/colors";
import InputComponent from "./input/InputComponent";

export default function ProductInput({
  onProductAdd,
  displayModal,
  onProductCancel,
}) {
  const [product, setProduct] = useState("");

  const inputHandler = (val) => {
    const regex = /[^a-z]/gi
    setProduct(val.replace(regex, ''));
  }

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
        <InputComponent
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={inputHandler}
          value={product}
          maxLength={15}
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
    padding: 10,
    textAlign: "center",
    fontSize: 19,
    borderRadius: 10,
    marginBottom: 15,
    height: 50,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bgBtnValidate: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    width: 150,
  },
  bgBtnCancel: {
    backgroundColor: colors.danger,
    borderRadius: 6,
    width: 150,
  },
});
