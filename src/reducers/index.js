import { combineReducers } from 'redux';
import bizReducer from './BizReducer'
import menuReducer from './MenuReducer'
import orderReducer from './OrderReducer'

export default combineReducers({
  biz: bizReducer,
  menu: menuReducer,
  order: orderReducer
});