import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
    <TouchableOpacity 
        onPress={onPressHandler}
        activeOpacity={0.9}
    >
      <View style={{ ...styles.buttonWrapper, ...style }}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
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
