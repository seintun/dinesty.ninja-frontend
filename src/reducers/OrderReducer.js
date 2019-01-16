import {
  SET_BIZ_SUCCESS,
  SET_ORDER_DATE_SUCCESS,
  SET_GUESTS_SUCCESS,
  CREATE_ORDER_SUCCESS,
  ADD_ITEM_TO_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_SUCCESS
} from '../actions/types'

const initialState = {
  bizID: "",
  userID: "5c355340b9481947fa50c9ea",
  bizName: "",
  userName: "Ninja X",
  guests: 0,
  date: "",
  cart: [],
  paid: false,
  cancelled: false,
  total: 0,
  tax: 0,
  tip: 0
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_BIZ_SUCCESS:
      return {
        ...state,
        bizID: action.payload.bizID,
        bizName: action.payload.bizName,
      }
    case SET_ORDER_DATE_SUCCESS:
      return {
        ...state,
        date: action.payload
      }
    case SET_GUESTS_SUCCESS:
      return {
        ...state,
        guests: action.payload
      }
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        newOrder: action.payload
      }
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case REMOVE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    default:
      return state;
  }
}

export default orderReducer;