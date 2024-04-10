import { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import ProductInput from "./components/ProductInput";
import ProductList from "./components/ProductList";
import DismissKeyboard from "./components/DismissKeyboard";

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
      <View style={styles.container}>
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

        <Button
          title="Nouveau produit"
          onPress={() => setDisplayAddProductModal(!displayAddProductModal)}
        />
        <ProductInput
          onProductAdd={addProductToList}
          displayModal={displayAddProductModal}
          onProductCancel={cancelNewProduct}
        />
        <ProductList data={list} onProductRemove={removeProductFromList} />
      </View>
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
    height: 250,
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
});
