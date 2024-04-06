import {
  defineStore,
  storeToRefs,
} from 'pinia'


export const usePageStore = defineStore('page-store', () => {
  const alphaState = ref(true)
  const pageMovingTime = ref(1500)
  return {
    alphaState,
    pageMovingTime
  }
})

