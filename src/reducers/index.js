import { combineReducers } from 'redux';
import bizReducer from './BizReducer'

export default combineReducers({
  biz: bizReducer
});