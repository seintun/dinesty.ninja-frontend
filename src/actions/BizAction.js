const ninjaBizAPI = 'http://13.57.17.135/biz'
import { 
  FETCH_BIZ_SUCCESS,
  FETCH_BIZ_FAIL,
  FIND_BIZ_SUCCESS,
  FIND_BIZ_FAIL
} from './types'

// fetchBiz function will GET request ninjaAPI for JSON objects of biz
export const fetchBiz = () => {
  return async dispatch => {
    try {
      let response = await fetch(ninjaBizAPI, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let result = await response.json()
      dispatch({
        type: FETCH_BIZ_SUCCESS,
        payload: result,
      })
    } catch (err) {
      dispatch({
        type: FETCH_BIZ_FAIL,
        payload: err
      })
    }
  }
}
// findBizByID function will GET request ninjaAPI for JSON objects of specified biz by ID
export const findBizByID = (bizID) => {
  return async dispatch => {
    try {
      let response = await fetch(`${ninjaBizAPI}/${bizID}`, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let result = await response.json()
      // console.log(result, '###')
      dispatch({
        type: FIND_BIZ_SUCCESS,
        payload: result,
      })
    } catch (err) {
      dispatch({
        type: FIND_BIZ_FAIL,
        payload: err
      })
    }
  }
}
