import { 
  FETCH_BIZ_SUCCESS,
  FIND_BIZ_SUCCESS
} from '../actions/types'

const initialState = {
  bizList: [],
  currentBizInfo: {},
  currentBizMenu: {}
}

const BizReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_BIZ_SUCCESS:
      return {
        ...state,
        bizList: action.payload
      }
    case FIND_BIZ_SUCCESS:
      return {
        ...state,
        currentBizInfo: action.payload
      }
    default:
      return state;
  }
}

export default BizReducer;