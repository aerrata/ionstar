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

      <ion-card>
        <ion-card-content>
          <ion-avatar>
            <img alt="Avatar" src="https://source.boringavatars.com/beam/100/aliot" />
          </ion-avatar>
        </ion-card-content>
        <ion-card-header>
          <ion-card-title>Ali</ion-card-title>
          <ion-card-subtitle>ali@domain.com</ion-card-subtitle>
        </ion-card-header>
      </ion-card>

      <ion-list>
        <ion-item :button="true">
          <ion-icon slot="start" :icon="logOut"></ion-icon>
          <ion-label>Log Out</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonAvatar } from '@ionic/vue'
import { logOut } from 'ionicons/icons'
</script>
