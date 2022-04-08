import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { addProductToCart } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

export function Catalog(){
  
  const dispatch = useDispatch();
  const [ catalog, setCatalog ] = useState<IProduct[]>([]);
  
  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);


  // O produto ficaria do tipo any, seria necessário passar os parametros que o useCallback receberia. 
  // E no botão seria necessário passar a função recebendo o parametro
  const handleAddProductToCart = useCallback((product: IProduct) =>{
    // Passar como parametro o product
    dispatch(addProductToCart(product));
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>

      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}

          <button 
            type="button"
            onClick={() => handleAddProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}

    </>
  );
}