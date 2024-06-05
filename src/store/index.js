import { defineStore } from 'pinia'
export const useStore = defineStore('store', {
    state: () => ({ 
        DocTitle: '首页',
        UserInfo: {},
        isSave: false,
        isAI: false,
        ctrl: null,
     }),
    getters: {
      
    },
    actions: {

    },
  })