import React from "react";
import { render, fireEvent } from "../test-utils";
import ProductInput from "../components/ProductInput";

test("doit afficher le champ de saisie", () => {
  const { getByPlaceholderText } = render(<ProductInput />);
  const input = getByPlaceholderText("Nouveau produit");
  expect(input).toBeTruthy();
});

test("doit mettre à jour la valeur du champ de saisie lorsqu'une saisie est effectuée", () => {
  const { getByPlaceholderText } = render(<ProductInput />);
  const input = getByPlaceholderText("Nouveau produit");
  fireEvent.changeText(input, "Pomme");
  expect(input.props.value).toBe("Pomme");
});

test("doit appeler la fonction onProductAdd lorsqu'un nouveau produit est soumis", () => {
  const onProductAddMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <ProductInput onProductAdd={onProductAddMock} />
  );
  const input = getByPlaceholderText("Nouveau produit");
  fireEvent.changeText(input, "Banane");
  const button = getByText("Valider");
  fireEvent.press(button);
  expect(onProductAddMock).toHaveBeenCalledWith("Banane");
});
