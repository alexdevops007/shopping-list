import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function ProductList({ data, onProductRemove }) {
  const removeItem = (key) => onProductRemove(key);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text style={styles.element}>{item.name}</Text>
          <Button title="X" onPress={() => removeItem(item.key)} />
        </View>
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
    backgroundColor: "#c0392b",
    color: "#fff",
    padding: 15,
    fontSize: 17,
    marginVertical: 5,
    marginRight: 10,
    flexGrow: 1,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
  },
});
