const initialState = {
  bizList: []
}

const BizReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_BIZ_SUCCESS':
      return {
        ...state,
        bizList: action.payload
      }
    default:
      return state;
  }
}

export default BizReducer;