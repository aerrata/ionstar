<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Login</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2">
        <form class="p-10 space-y-6" @submit.prevent="handleLogin">
          <ion-input v-model="form.email" label="Email" label-placement="floating" fill="outline"></ion-input>
          <ion-input v-model="form.password" type="password" label="Password" label-placement="floating" fill="outline"></ion-input>
          <ion-button type="submit" mode="ios" expand="block">Log In</ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue'
import { useRouter } from 'vue-router'
import { Preferences } from '@capacitor/preferences'

axios.defaults.baseURL = 'http://api.foo.test/api'

const router = useRouter()

const form = reactive({
  email: 'ali@domain.com',
  password: 'password',
  device_name: 'Android',
})

const handleLogin = async () => {
  try {
    const response = await axios.post('/login', form)

    const user = {
      name: response.data.user.name,
      email: response.data.user.email,
      token: response.data.token,
    }

    await Preferences.remove({ key: 'user' })

    await Preferences.set({
      key: 'user',
      value: JSON.stringify(user),
    })

    router.push('/')
  } catch (error) {
    console.error(error)
  }
}
</script>
