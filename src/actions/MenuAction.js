const ninjaBizAPI = 'http://13.57.17.135/biz'
import { 
  FETCH_CURRENTBIZMENU_SUCCESS,
  FETCH_CURRENTBIZMENU_FAIL
} from './types'

// fetchCurrentBizMenu function will GET request ninjaBizAPI for JSON objects of biz
export const fetchCurrentBizMenu = (bizID) => {
  return async dispatch => {
    try {
      let response = await fetch(`${ninjaBizAPI}/${bizID}/menu`, {
        method: "GET",
        headers: {'Content-Type':'application/json'}
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
        payload: categorizedMenu,
      })
    } catch (err) {
      dispatch({
        type: FETCH_CURRENTBIZMENU_FAIL,
        payload: err
      })
    }
  }
}
