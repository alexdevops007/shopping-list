import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
import TitleComponent from "../title/TitleComponent";

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <TitleComponent style={styles.headerContent}>
        My Shopping List
      </TitleComponent>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.success,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    paddingTop: 25,
    paddingBottom: 15,
  },
  headerContent: {
    color: colors.white,
    fontSize: 30,
    //fontWeight: "bold",
    fontFamily: "Balsamiq_Regular",
    padding: 9,
  },
});
