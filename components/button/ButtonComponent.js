import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
    <Pressable onPress={onPressHandler}>
      <View style={{ ...styles.buttonWrapper, ...style }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: "gray",
    padding: 9,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
});
