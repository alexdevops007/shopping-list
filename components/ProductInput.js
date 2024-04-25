import { Modal, StyleSheet, View } from "react-native";
import { useState } from "react";
import ButtonComponent from "./button/ButtonComponent";
import colors from "../constants/colors";
import InputComponent from "./input/InputComponent";
import BodyTextComponent from "./text/BodyTextComponent";
import appStyles from "../constants/appStyles";
import TitleComponent from "./title/TitleComponent";

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
    onProductAdd(trimmedProduct);
    setProduct("");
  };
  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.containerView}>

        <TitleComponent style={appStyles.headerTwo}>
          Veuillez indiquer un produit
        </TitleComponent>
        
        <BodyTextComponent style={appStyles.textBody}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quas debitis assumenda eligendi odio enim, ipsum architecto, placeat aperiam at eius. Corrupti suscipit est facilis a animi hic accusantium alias.
        </BodyTextComponent>

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
