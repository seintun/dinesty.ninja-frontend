const ninjaOrderAPI = 'http://13.57.17.135/orders'
import { 
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL,
} from './types'

export const addItemtoCart = (item) => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: item,
      })
    } catch (err) {
      dispatch({
        type: ADD_ITEM_TO_CART_FAIL,
        payload: err
      })
    }
  }
}
// createOrder function will GET request ninjaAPI for JSON objects of biz
// export const createOrder = () => {
//   console.log('createOrder actions')
//   return async dispatch => {
//     try {
//       let response = await fetch(ninjaOrderAPI, {
//         method: "GET",
//         headers: {'Content-Type':'application/json'},
//       })
//       let result = await response.json()
//       dispatch({
//         type: CREATE_ORDER_SUCCESS,
//         payload: result,
//       })
//     } catch (err) {
//       dispatch({
//         type: CREATE_ORDER_FAIL,
//         payload: err
//       })
//     }
//   }
// }

// export const updateOrder = (orderID) => {
//   console.log('updateOrder actions')
//   return async dispatch => {
//     try {
//       let response = await fetch(`${ninjaOrderAPI}/${orderID}`, {
//         method: "PUT",
//         headers: {'Content-Type':'application/json'},
//       })
//       let result = await response.json()
//       dispatch({
//         type: CREATE_ORDER_SUCCESS,
//         payload: result,
//       })
//     } catch (err) {
//       dispatch({
//         type: CREATE_ORDER_FAIL,
//         payload: err
//       })
//     }
//   }
// }