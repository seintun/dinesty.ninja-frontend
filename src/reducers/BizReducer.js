const initialState = {
  biz: []
}

const BizReducer = (state = initialState, action) => {
  console.log(action, '$$$$$')
  switch(action.type) {
    case 'GET_BIZ':
      return {
        ...state,
        biz: action.payload
      }
    default:
      return state;
  }
}

export default BizReducer;