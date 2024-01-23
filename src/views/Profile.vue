<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card class="flex flex-col justify-center items-center text-center p-6 space-y-4 rounded-xl">
        <ion-card-content class="p-0">
          <ion-avatar>
            <img alt="Avatar" :src="`https://source.boringavatars.com/marble/100/${user?.name}`" />
          </ion-avatar>
        </ion-card-content>
        <ion-card-header class="p-0">
          <ion-card-title>{{ user?.name }}</ion-card-title>
          <ion-card-subtitle>{{ user?.email }}</ion-card-subtitle>
        </ion-card-header>
      </ion-card>

      <ion-list>
        <ion-item :button="true">
          <ion-icon slot="start" :icon="cog"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-item>
        <ion-item :button="true" @click="confirmLogOut">
          <ion-icon slot="start" :icon="logOut"></ion-icon>
          <ion-label>Log Out</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, actionSheetController, onIonViewWillEnter } from '@ionic/vue'
import { cog, logOut } from 'ionicons/icons'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const user = ref()

onIonViewWillEnter(async () => {
  auth.getUser().then((response) => {
    user.value = response.data
  })
})

const confirmLogOut = async () => {
  const actionSheet = await actionSheetController.create({
    header: 'Are you sure?',
    buttons: [
      {
        text: 'Yes',
        role: 'destructive',
        handler: () => auth.logout(),
      },
      {
        text: 'No',
      },
    ],
  })

  await actionSheet.present()
}
</script>
