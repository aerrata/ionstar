import { ref, onMounted } from 'vue'
import { Storage } from '@ionic/storage'

export function useStore() {
  const store = ref()

  onMounted(async () => {
    store.value = new Storage()

    await store.value.create()
  })

  return { store }
}
