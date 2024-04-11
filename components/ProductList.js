import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import colors from "../constants/colors";

export default function ProductList({ data, onProductRemove }) {
  const removeItem = (key) => onProductRemove(key);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Pressable
          // onLongPress={() => removeItem(item.key)}
          onPress={() => removeItem(item.key)}
          style={styles.items}
        >
          <View style={styles.listItem}>
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
    backgroundColor: colors.primary,
    borderRadius: 15,
  },
  element: {
    color: colors.white,
    padding: 15,
    fontSize: 20,
    marginVertical: 10,
    // marginRight: 2,
    flexGrow: 1,
    fontWeight: "800",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
