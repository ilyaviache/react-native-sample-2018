import axios from 'axios'
import config from 'react-native-config'

const request = axios.create()

request.defaults.baseURL = config.API_URL
request.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
request.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
request.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

export const setupToken = token => {
  request.defaults.headers.common.Authorization = token
}

export const resetToken = () => {
  request.defaults.headers.common.Authorization = undefined
}

request.interceptors.request.use(
  request => request,
  error => {
    console.log(error)
  }
)

request.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      // TODO Navigate to Login
    }
    return Promise.reject(error)
  }
)

export const post = (url, data, config = {}) => request.post(url, data, config)
export const get = (url, config = {}) => request.get(url, config)
export const put = (url, data, config = {}) => request.put(url, data, config)
export const del = (url, config = {}) => request.delete(url, config)