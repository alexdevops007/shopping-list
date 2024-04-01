import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProductList from "./ProductList";

const testData = [
  { key: "1", name: "Pomme" },
  { key: "2", name: "Banane" },
];

test("doit afficher une liste de produits", () => {
  const { getByText } = render(<ProductList data={testData} />);
  const product1 = getByText("Pomme");
  const product2 = getByText("Banane");
  expect(product1).toBeTruthy();
  expect(product2).toBeTruthy();
});

test("doit supprimer un produit lorsqu'un bouton de suppression est cliqué", () => {
  const onProductRemoveMock = jest.fn();
  const { getByText } = render(<ProductList data={testData} onProductRemove={onProductRemoveMock} />);
  const deleteButton = getByText("Supprimer");
  fireEvent.press(deleteButton);
  expect(onProductRemoveMock).toHaveBeenCalled();
});
