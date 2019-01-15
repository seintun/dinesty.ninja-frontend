const ninjaBizAPI = 'http://13.57.17.135/biz'
import { 
  FETCH_CURRENTBIZMENU_SUCCESS,
  FETCH_CURRENTBIZMENU_FAIL
} from './types'

// fetchBiz function will GET request ninjaAPI for JSON objects of biz
export const fetchCurrentBizMenu = (bizID) => {
  console.log(bizID, 'inside menuAction')
  return async dispatch => {
    try {
      let response = await fetch(`${ninjaBizAPI}/${bizID}/menu`, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let result = await response.json()
      let categorizedMenu = {
        appetizers: [],
        entrees: [],
        desserts: [],
        drinks: []
      }
      result.forEach(menuItem => {
        if (categorizedMenu[menuItem.category]) {
          categorizedMenu[menuItem.category].push(menuItem);
        }
      })
      dispatch({
        type: FETCH_CURRENTBIZMENU_SUCCESS,
        payload: result,
      })
      // console.log(result, 'action JSON')
      console.log(categorizedMenu, 'categorized JSON')
    } catch (err) {
      dispatch({
        type: FETCH_CURRENTBIZMENU_FAIL,
        payload: err
      })
    }
  }
}