import { combineReducers } from 'redux';
import BizReducer from './BizReducer'

export default combineReducers({
  bizList: BizReducer
});