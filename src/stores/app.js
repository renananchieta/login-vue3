// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    usuario: {
      nome: '',
      email: '',
      token: '',
    } 
  }),
})
