import { 
  CREATE_ORDER_SUCCESS,
  ADD_ITEM_TO_CART_SUCCESS
} from '../actions/types'

const initialState = {
  bizID: "5c346548667e879434054621",
  userID: "5c355340b9481947fa50c9ea",
  bizName: "Marufuku Ramen SF",
  userName: "Ninja X",
  guests: 2,
  date: "2019-02-14T15:30:00Z",
  cart: [],
  paid: false,
  cancelled: false,
  total: 0,
  tax: 0,
  tip: 0
}

const orderReducer = (state = initialState, action) => {
  switch(action.type) {
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
    default:
      return state;
  }
}

export default orderReducer;