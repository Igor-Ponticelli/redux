import { IProduct } from "./types";


// Passado o tipo que será necessário ter para adicionar
export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  };
}