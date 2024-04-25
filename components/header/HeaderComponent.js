import { StyleSheet, View } from "react-native";
import colors from "../../constants/colors";
import TitleComponent from "../title/TitleComponent";
import appStyles from "../../constants/appStyles";

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <TitleComponent style={appStyles.headerOne}>My Shopping List</TitleComponent>
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
});
