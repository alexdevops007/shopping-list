import { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductInput from "./components/ProductInput";
import ProductList from "./components/ProductList";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/button/ButtonComponent";

export default function App() {
  const [list, setList] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [displayAddProductModal, setDisplayAddProductModal] = useState(false);

  const capitalizeFirstLetter = (string) => {
    return {
      key: Date.now().toString(),
      name: string.charAt(0).toUpperCase() + string.slice(1),
    };
  };

  const addProductToList = (productName) => {
    setDisplayAddProductModal(false);

    if (productName.length > 1) {
      setList((currentList) => [
        ...currentList,
        capitalizeFirstLetter(productName),
      ]);
    } else {
      setIsVisibleModal(true);
    }
  };

  const cancelNewProduct = () => {
    setDisplayAddProductModal(false);
  };

  const removeProductFromList = (key) => {
    setList((currentList) => currentList.filter((item) => item.key !== key));
  };

  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.container}
        source={{
          uri: "https://cdn.pixabay.com/photo/2021/05/30/19/52/abstract-rainbow-6296890_1280.jpg",
        }}
      >
        <Modal
          visible={isVisibleModal}
          onRequestClose={() => setIsVisibleModal(false)}
          animationType="slide"
          hardwareAccelerated
          transparent={true}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>OUPS !</Text>
              </View>
              <View style={styles.modalBody}>
                <Image
                  source={require("./assets/red-check-128.png")}
                  style={styles.redCheck}
                />
                {/* <Image
                  source={{
                    uri: "https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_1280.png",
                  }}
                  style={styles.redCheck}
                /> */}
                <Text style={styles.modalBodyText}>
                  Merci d'indiquer plus d'un seul caractère
                </Text>
              </View>
              <View style={styles.modalFooter}>
                <Pressable
                  style={styles.pressableBtnModal}
                  onPress={() => setIsVisibleModal(false)}
                >
                  <Text style={styles.modalFooterText}>OK</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {/* <Button
          title="Nouveau produit"
          onPress={() => setDisplayAddProductModal(!displayAddProductModal)}
        /> */}

        <ButtonComponent
          onPressHandler={() =>
            setDisplayAddProductModal(!displayAddProductModal)
          }
          style={styles.btnAddProduct}
        >
          Nouveau produit
        </ButtonComponent>

        <ProductInput
          onProductAdd={addProductToList}
          displayModal={displayAddProductModal}
          onProductCancel={cancelNewProduct}
        />
        <ProductList data={list} onProductRemove={removeProductFromList} />
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "90%",
    height: 280,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#95a5a6",
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  pressableBtnModal: {
    backgroundColor: "#192a56",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalFooterText: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    padding: 16,
  },
  redCheck: {
    width: 100,
    height: 100,
  },
  btnAddProduct: {
    backgroundColor: "#218c74",
  },
});
