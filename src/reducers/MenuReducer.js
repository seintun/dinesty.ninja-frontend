import { 
  FETCH_CURRENTBIZMENU_SUCCESS
} from '../actions/types'

const initialState = {
  currentBizMenu: []
}

const menuReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CURRENTBIZMENU_SUCCESS:
      return {
        ...state,
        currentBizMenu: action.payload
      }
    default:
      return state;
  }
}

export default menuReducer;