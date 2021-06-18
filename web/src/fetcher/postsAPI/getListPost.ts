import {API_URL} from '../../config/config'
export const getListPostAPI = () => {
  return fetch(API_URL+"posts/getListPost",{
    method:'GET'
  }).then(response => response.json())
  .then(result => {
    if(result.resultCode === 1) return {error: false, message: "OK", data: result.data}
    return {error: true, message: "FAIL", data: []}
  }).catch(err => {
    console.log(err,"asdadad")
    return {error: true, message: "FAIL", data: []}
  })
}