import axios from 'axios'

const myStorage = window.localStorage
const baseURL = 'http://challenge-react.alkemy.org/'

export const postLogin = (values) => {
  axios
    .post(baseURL, values)
    .then((response) => {
      console.log(response.data)
      myStorage.setItem('Token', response.data.token)
    })
    .catch((error) => {
      console.log('error')
      return false
    })
  return true
}
