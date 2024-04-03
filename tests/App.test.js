// App.test.js
import React from "react";
import { render, fireEvent } from "../test-utils";
import App from "../App";

test("doit afficher le champ de saisie et la liste de produits", () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText("Nouveau produit");
  const productList = getByText("Liste des produits");
  expect(input).toBeTruthy();
  expect(productList).toBeTruthy();
});

test("doit ajouter un produit à la liste lorsqu'un nouveau produit est soumis", () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText("Nouveau produit");
  const button = getByText("Valider");
  fireEvent.changeText(input, "Pomme");
  fireEvent.press(button);
  const productItem = getByText("Pomme");
  expect(productItem).toBeTruthy();
});

test("doit supprimer un produit de la liste lorsqu'un bouton de suppression est cliqué", () => {
  const { getByPlaceholderText, getByText, queryByText } = render(<App />);
  const input = getByPlaceholderText("Nouveau produit");
  const addButton = getByText("Valider");
  fireEvent.changeText(input, "Banane");
  fireEvent.press(addButton);
  const deleteButton = getByText("Supprimer");
  fireEvent.press(deleteButton);
  const deletedProductItem = queryByText("Banane");
  expect(deletedProductItem).toBeNull();
});
