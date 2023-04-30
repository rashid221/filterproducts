import { actionTypes } from "../types/types"


export const setProducts = (products)=>{
    return {
          type:actionTypes.SET_PRODUCTS,
          payload:products
    }
}


export const sendData = (id)=>{
    return {
          type:actionTypes.SEND_DATA,
          payload:id
    }
}