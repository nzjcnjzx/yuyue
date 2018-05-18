import request from './request'

const baseUrlApi = 'https://api.ithome.com'

const api = {
  getUserInfo: (r) => request.get('/json/newslist/news', null, {
    baseURL: baseUrlApi
  })
}

export default api
