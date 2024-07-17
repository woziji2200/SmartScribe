import { defineStore } from 'pinia'
export const useStore = defineStore('store', {
    state: () => ({ 
        DocTitle: '首页',
        UserInfo: {},
        isSave: false,
        isAI: false,
        ctrl: null,
        isLogin: false,
        editor: null,
        CreateEditor: null,
        showOCRResult: false,
        OCRResultUrl: '',
        OCRResultData: null,
     }),
    getters: {
      
    },
    actions: {
        OCRResultDataToOcrInfo(data) {
            // return [["11111", 1, [[ 144, 249 ], [ 324,254 ], [ 324,290  ], [144,  284 ]] ]]
            if (!data) return []
            return data.texts.map(item => {
                return [item.text, item.score, item.bbox]
            })
        },
        OCRResultToPretext(data) {
            return data?.texts.map(item => {
                return item.text
            }).join('\n')
        }
    },
  })