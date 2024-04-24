import { StyleSheet, Text } from "react-native";

const TitleComponent = ({ style, children }) => (
  <Text style={{ ...styles.title, ...style }}>{children}</Text>
);

export default TitleComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 9,
  },
});
