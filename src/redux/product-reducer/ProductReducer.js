import { ACTION_TYPE } from "../types/ActionTypes";

const initialState = {
    products : [],
    cartData : []
}

//reducer is the one  which will update the store
export const ProductReducer = (state = initialState,action)=>{
   switch(action.type){
    case ACTION_TYPE.ADD_TO_CART:
       return {...state, cartData:[...state.cartData,action.payload]};

       case ACTION_TYPE.REMOVE_FROM_CART:
         const filteredProducts = state.cartData.filter(
            (cartItem) => cartItem.id !== action.payload

         )
         return {...state, cartData :filteredProducts}

      case ACTION_TYPE.FETCH_PRODUCTS:
         return {...state, products:action.payload}
    default : 
    return state;
   }
}