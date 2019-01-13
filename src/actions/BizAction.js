const ninjaAPI = 'http://13.57.17.135/biz'

export const fetchBiz = () => {
  console.log('Inside Actions')
  return async dispatch => {
    try {
      let response = await fetch(ninjaAPI, {
        method: "GET",
        headers: {'Content-Type':'application/json'},
      })
      let result = await response.json()
      console.log(result, '####')
      dispatch({
        type: 'GET_BIZ',
        payload: result,
      })
    } catch (err) {
      console.log(err);
    }
  }
}
