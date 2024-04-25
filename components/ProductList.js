import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../constants/colors";

export default function ProductList({ data, onProductRemove }) {
  const removeItem = (key) => onProductRemove(key);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Pressable onPress={() => removeItem(item.key)} style={styles.items}>
          <View style={styles.listItem}>
            <AntDesign 
              name="delete" 
              size={29} color={colors.white} />
            <Text style={styles.element}>{item.name}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.key}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    backgroundColor: colors.danger,
    borderRadius: 15,
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  element: {
    color: colors.white,
    fontSize: 18,
    marginLeft: 20
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
