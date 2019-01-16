const ninjaOrderAPI = 'http://13.57.17.135/orders'
import {
  SET_BIZ_SUCCESS,
  SET_BIZ_FAIL,
  SET_ORDER_DATE_SUCCESS,
  SET_ORDER_DATE_FAIL,
  SET_GUESTS_SUCCESS,
  SET_GUESTS_FAIL,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_FAIL
} from './types'

export const setBizToOrder = (bizID, bizName) => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_BIZ_SUCCESS,
        payload: {bizID: bizID, bizName:bizName},
      })
    } catch (err) {
      dispatch({
        type: SET_BIZ_FAIL,
        payload: err
      })
    }
  }
}
export const setOrderDate = (date) => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_ORDER_DATE_SUCCESS,
        payload: date,
      })
    } catch (err) {
      dispatch({
        type: SET_ORDER_DATE_FAIL,
        payload: err
      })
    }
  }
}
export const setGuests = (number) => {
  return async dispatch => {
    try {
      dispatch({
        type: SET_GUESTS_SUCCESS,
        payload: number,
      })
    } catch (err) {
      dispatch({
        type: SET_GUESTS_FAIL,
        payload: err
      })
    }
  }
}
export const addItemtoCart = (items) => {
  return async dispatch => {
    try {
      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: items,
      })
    } catch (err) {
      dispatch({
        type: ADD_ITEM_TO_CART_FAIL,
        payload: err
      })
    }
  }
}
export const removeItemtoCart = (itemId) => {
  console.log(itemId, 'remove what?')
  return async dispatch => {
    try {
      dispatch({
        type: REMOVE_ITEM_FROM_CART_SUCCESS,
        payload: itemId,
      })
    } catch (err) {
      dispatch({
        type: REMOVE_ITEM_FROM_CART_FAIL,
        payload: err
      })
    }
  }
}
export const createOrder = (order) => {
  return async dispatch => {
    try {
      let response = await fetch(ninjaOrderAPI, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(order)
      })
      let result = await response.json();
      dispatch({
        type: CREATE_ORDER_SUCCESS,
        payload: result
      })
    } catch (err) {
      dispatch({
        type: CREATE_ORDER_FAIL,
        payload: err
      })
    }
  }
}
