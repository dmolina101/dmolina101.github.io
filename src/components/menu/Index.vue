<template>
    <nav id="menu_principal" class="navbar navbar-expand-lg fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#itemsMenuPrincipal" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="itemsMenuPrincipal">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="item in menu">
                    <a class="nav-link link">{{ item.text }}</a>
                </li>
            </ul>
        </div>

        <ul id="menu_contacto">
            <li class="nav-item" v-for="menu in menuContacto">
                <a class="nav-link" data-toggle="tooltip" data-placement="bottom" :title="menu.titulo" :href="menu.href" target="_blank">
                    <i :class="menu.icono"></i>
                </a>
            </li>
            <!--<li class="nav-item">
                <a class="nav-link idioma" @click="lang">
                    <span class="text-uppercase" :data-lang="idiomActivo">{{ idiomActivo }}</span>
                </a>
            </li>-->
        </ul>
    </nav>
</template>

<script>

import { defineComponent, onBeforeMount, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTranslatorStore } from './Translator.js'

export default defineComponent({
    setup() {

        const translation = useTranslatorStore().translation(1)
        const menu = ref([
            { text: translation.menu.link1 },
            { text: translation.menu.link2 },
            { text: translation.menu.link3 },
            { text: translation.menu.link4 },
            { text: translation.menu.link5 }
        ])
        const menuContacto = ref([])
        
        onBeforeMount(() => {

        })

        const lang = () => {

        }

        const translate = () => {

        }

        return {
            lang,
            menuContacto,
            menu
        }

    }
})

</script>

<style lang="less" scoped src="../../assets/less/components/menu/Index.less"></style>