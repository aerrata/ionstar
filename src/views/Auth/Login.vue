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
        <form class="p-10 space-y-6" @submit.prevent="auth.login(form.email, form.password)">
          <ion-input v-model="form.email" label="Email" label-placement="floating" fill="outline"></ion-input>
          <ion-input v-model="form.password" type="password" label="Password" label-placement="floating" fill="outline"></ion-input>
          <ion-button type="submit" mode="ios" expand="block">
            <!-- <ion-spinner name="dots"></ion-spinner> -->
            Log In
          </ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const form = reactive({
  email: 'ali@domain.com',
  password: 'password',
})
</script>
