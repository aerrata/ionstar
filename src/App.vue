<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { StatusBar } from '@capacitor/status-bar'
import { isPlatform } from '@ionic/vue'

if (isPlatform('android')) {
  StatusBar.setBackgroundColor({ color: '#1f1f1f' })
}
</script>
