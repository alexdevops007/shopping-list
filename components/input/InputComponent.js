import { StyleSheet, TextInput, View } from "react-native";
import colors from "../../constants/colors";

const InputComponent = ({ style, placeholder, onChangeText, value, ...props }) => (
  <TextInput
    {...props}
    style={{ ...styles.input, ...style }}
    placeholder={placeholder}
    onChangeText={onChangeText}
    value={value}
  />
);

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    borderColor: colors.secondary,
    borderWidth: 1,
    height: 40,
    marginVertical: 5,
  },
});
