import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const http = () => {
  const auth = useAuthStore()

  const options = {
    baseURL: 'http://api.foo.test',
    headers: {},
  }

  if (auth.isAuthenticated) {
    options.headers.Authorization = `Bearer ${auth.token}`
  }

  return axios.create(options)
}

export default http
