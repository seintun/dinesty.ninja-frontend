import { combineReducers } from 'redux';
import bizReducer from './BizReducer'
import menuReducer from './MenuReducer'
export default combineReducers({
  biz: bizReducer,
  menu: menuReducer
});