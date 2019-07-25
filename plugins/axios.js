export default function ({ $axios, store }) {
  $axios.interceptors.request.use(function (request) {
    request.data = {
      ...request.data,
      client_locale: store.getters.locale
    }
    return request
  })
}
