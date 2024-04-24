import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import ProductInput from "./components/ProductInput";
import ProductList from "./components/ProductList";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/button/ButtonComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import colors from "./constants/colors";

import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold,
} from "@expo-google-fonts/balsamiq-sans";

const App = () => {
  const [list, setList] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [displayAddProductModal, setDisplayAddProductModal] = useState(false);
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       // Inter
  //       "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
  //       "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
  //       // Montserrat
  //       "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  //       "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
  //       // Poppins
  //       "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  //       "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  //       // Roboto
  //       "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  //       "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //       // Pacifico
  //       "pacifico-regular": require("./assets/fonts/Pacifico-Regular.ttf"),
  //     });
  //     setFontsLoaded(true);
  //   };

  //   loadFonts();
  // }, []);

  let [fontsLoaded, error] = useFonts({
    Balsamiq_Regular: BalsamiqSans_400Regular,
    BalsamiqS_Bold: BalsamiqSans_700Bold,
    "pacifico-regular": require("./assets/fonts/Pacifico-Regular.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

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

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: "https://cdn.pixabay.com/photo/2021/05/30/19/52/abstract-rainbow-6296890_1280.jpg",
        }}
      >
        <HeaderComponent />
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
                  <Image
                    source={require("./assets/red-check-128.png")}
                    style={styles.redCheck}
                  />
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
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
};

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
    backgroundColor: colors.white,
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
    borderBottomColor: colors.secondary,
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
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalFooterText: {
    fontSize: 17,
    color: colors.white,
    textAlign: "center",
    padding: 16,
  },
  redCheck: {
    width: 100,
    height: 100,
  },
  btnAddProduct: {
    backgroundColor: colors.success,
    padding: 20,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.white,
    marginBottom: 20,
    marginTop: -30,
  },
  bgImage: {
    flex: 1,
  },
});

export default App;
