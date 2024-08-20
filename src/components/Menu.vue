<template>
    <nav id="menu_principal" class="navbar navbar-expand-lg fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#itemsMenuPrincipal" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="itemsMenuPrincipal">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="menu in menuPrincipal">
                    <a class="nav-link link">{{ menu.text }}</a>
                </li>
            </ul>
        </div>

        <ul id="menu_contacto">
            <li class="nav-item" v-for="menu in menuContacto">
                <a class="nav-link" data-toggle="tooltip" data-placement="bottom" :title="menu.titulo" :href="menu.href" target="_blank">
                    <i :class="menu.icono"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link idioma" @click="lang">
                    <span class="text-uppercase" :data-lang="idiomActivo">{{ idiomActivo }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

import { defineComponent, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTranslatorStore } from '../stores/Translator.js'

export default defineComponent({
    setup() {

        const menuPrincipal = ref([])
        const menuContacto = ref([])
        const translation = useTranslatorStore().translation(1)

        onBeforeMount(() => {

        })

        const lang = () => {

        }

        const translate = () => {

        }

        return {
            lang,
            menuContacto,
            menuPrincipal
        }

    }
})

</script>

<style lang="less" scoped src="../assets/less/components/Menu.less"></style>
