import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtonComponent = ({ btnTitle, onPressHandler, style }) => {
  return (
    <Pressable onPress={onPressHandler}>
      <View style={{ ...styles.buttonWrapper, ...style }}>
        <Text style={styles.buttonText}>{btnTitle}</Text>
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
