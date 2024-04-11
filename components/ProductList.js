import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProductList({ data, onProductRemove }) {
  const removeItem = (key) => onProductRemove(key);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Pressable
          // onLongPress={() => removeItem(item.key)}
          onPress={() => removeItem(item.key)}
        >
          <View style={styles.listItem}>
            <Text style={styles.element}>{item.name}</Text>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.key}
      style={styles.items}
    />
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "#192a56",
    color: "#fff",
    padding: 20,
    fontSize: 20,
    marginVertical: 10,
    // marginRight: 2,
    flexGrow: 1,
    borderRadius: 15,
    fontWeight: "800"
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
