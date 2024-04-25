import { StyleSheet, Text } from "react-native";
import React from "react";
import appStyles from "../../constants/appStyles";

const { textBody } = appStyles;
const BodyTextComponent = ({ children, style }) => (
  <Text style={{ ...textBody, ...style }}>{children}</Text>
);

export default BodyTextComponent;
