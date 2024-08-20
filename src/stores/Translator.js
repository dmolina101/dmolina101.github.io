import { defineStore } from 'pinia'
import { esp } from '../langs/Esp'
import { eng } from '../langs/Eng'

export const useTranslatorStore = defineStore('translator', () => {

    const translation = (lang) => {

        var text = {}
        switch (lang) {
            case 1:
                text = esp
                break
            case 2:
                text = eng
                break
            default:
                text = esp
                break
        }

        return text

    }

    return { translation }

})
