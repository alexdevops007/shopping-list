import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../constants/colors";

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.9}>
      <View style={{ ...styles.buttonWrapper, ...style }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: colors.secondary,
    padding: 9,
  },
  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 17,
  },
});
