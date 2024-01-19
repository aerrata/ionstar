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

      <ion-card class="flex flex-col justify-center items-center text-center p-6 space-y-4">
        <ion-card-content class="p-0">
          <ion-avatar>
            <img alt="Avatar" src="https://source.boringavatars.com/beam/100/aliot" />
          </ion-avatar>
        </ion-card-content>
        <ion-card-header class="p-0">
          <ion-card-title>Ali</ion-card-title>
          <ion-card-subtitle>ali@domain.com</ion-card-subtitle>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar, actionSheetController } from '@ionic/vue'
import { cog, logOut } from 'ionicons/icons'

const confirmLogOut = async () => {
  const actionSheet = await actionSheetController.create({
    header: 'Are you sure?',
    buttons: [
      {
        text: 'Yes',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'No',
        data: {
          action: 'share',
        },
      },
    ],
  })

  await actionSheet.present()
}
</script>
