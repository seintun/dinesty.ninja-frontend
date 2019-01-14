const ninjaBizAPI = 'http://13.57.17.135/biz'

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
        type: 'FETCH_BIZ_SUCCESS',
        payload: result,
      })
    } catch (err) {
      dispatch({
        type: 'FETCH_BIZ_FAIL',
        payload: err
      })
    }
  }
}
