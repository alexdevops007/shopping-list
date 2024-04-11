import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

const HeaderComponent = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerContent}>My Shopping List</Text>
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
    fontWeight: "bold",
    padding: 9,
  },
});
