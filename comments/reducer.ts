import { Reducer } from "redux";
import produce from 'immer';


interface IProduct {
  id: number,
  title: string,
  price: number,
}
interface ICartItem {
  product: IProduct,
  quantity: number,
}
interface ICartState {
  items: ICartItem[],
}



// Criar um estado inicial, pois o carrinho irá ser alterado. Colocado o tipo para não esquecer nenhuma propriedade do carrinho
const INITIAL_STATE: ICartState = {
  items: [],
};

// Essa tipo de função (arrow function), permite eu dar um tipo pra esse variável (cart)
// O reducer tem que receber os parametros state e action
const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;


        // Ele escreve como se fosse mutável. Ele compara o estado anterior, e depois faz as alterações
        
          draft.items.push({
            product,
            quantity: 1,
          })
          break;
        
        // Utilizando a biblioteca immer ajuda a evitar a verbosidade nos estados imutáveis
        // Não pode alterar o estado, e sim adicionar um novo estado
        // Por isso é feito a lógica dessa maneira
        // O código abaixo era da maneira antiga sem o immer. Acima é com immer
        // return {
        //   ...state,
        //   items: [
        //     ...state.items,
        //     {
        //       product,
        //       quantity: 1,
        //     }
        //   ]
        // };
      }
      default: {
        return draft;
      }
    }
  });
}

export default cart;