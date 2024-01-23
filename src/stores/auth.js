import axios from 'axios'
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'
import { Device } from '@capacitor/device'
import { alertController } from '@ionic/vue'
import http from '@/helpers/http'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const token = localStorage.getItem('token') ? ref(localStorage.getItem('token')) : ref(null)

  const isAuthenticated = computed(() => token.value !== '' && token.value !== null)

  const login = async (email, password) => {
    try {
      const { model } = await Device.getInfo()

      const response = await axios.post('http://api.foo.test/api/login', {
        email,
        password,
        device_name: model,
      })

      token.value = response.data

      router.push('/')
    } catch (error) {
      const alert = await alertController.create({ header: 'Whoops!', message: error.response.data.message, buttons: ['OK'] })
      await alert.present()
    }
  }

  const logout = async () => {
    try {
      await axios.post(
        'http://api.foo.test/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      )

      token.value = null

      router.replace({ name: 'login' })
    } catch (error) {
      const alert = await alertController.create({ header: 'Whoops!', message: error.code, buttons: ['OK'] })
      await alert.present()
    }
  }

  const getUser = () => {
    return http()
      .get('/api/user')
      .catch(async (error) => {
        const alert = await alertController.create({ header: 'Whoops!', message: error.code, buttons: ['OK'] })
        await alert.present()
      })
  }

  watch(token, (value) => {
    localStorage.setItem('token', value)
  })

  return { token, isAuthenticated, login, logout, getUser }
})
