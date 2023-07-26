import { produce } from "immer";

const intialState = { products: [] } as any;
export const productReducer = (state = intialState, action: any) => {
  return produce(state, (drafState) => {
    switch (action.type) {
      case "getAll":
        drafState.products = action.payload;
        break;
      case "POST":
        drafState.products.push(action.payload);
        break;
      case "PUT":
        const product = action.payload
        drafState.products = state.products.map((item:any)=>item.id === product.id ? product : item)
        break;
        case "DELETE":
            const id = action.payload
        drafState.products = state.products.filter((item:any)=>item.id != id)
        break;
    }
  });
};
