import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() =>{
    // Passar como parametro o product
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <>
      <article>
        <strong>{product.title}</strong> {" - "}
        <span>{product.price}</span> {"  "}

        <button 
          type="button"
          onClick={handleAddProductToCart}
        >
          Comprar
        </button>
      </article>
    </>
  );
}

export default CatalogItem;

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}
