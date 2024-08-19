<template>
    <nav id="menu_principal" class="navbar navbar-expand-lg fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#itemsMenuPrincipal" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="itemsMenuPrincipal">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="menu in menuPrincipal">
                    <a class="nav-link link" v-on:click="irSeccion">{{ menu.text }}</a>
                </li>
            </ul>
        </div>

        <ul id="menu_contacto">
            <li class="nav-item" v-for="menu in menuContacto">
                <a class="nav-link" data-toggle="tooltip" data-placement="bottom" v-bind:title="menu.titulo" v-bind:href="menu.href" target="_blank">
                    <i v-bind:class="menu.icono"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link idioma" v-on:click="idioma">
                    <span class="text-uppercase" v-bind:data-lang="idiomActivo">{{ idiomActivo }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>

import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useUserAccountStore } from '../stores/UserAccount.js'
import { ajax } from '../utils/AjaxRequest'

export default defineComponent({
    setup() {

        const route = useRoute()
        const userAccount = useUserAccountStore()

        const showLogin = computed(function() {
            return (route.name !== 'sign-in' && userAccount.state.id === null)
        })

        const showSignUp = computed(function() {
            return (route.name !== 'sign-up' && userAccount.state.id === null)
        })

        const userLogged = computed(function() {
            return userAccount.state.id !== null
        })

        const logout = function() {

            localStorage.clear();
            userAccount.updateState()
            this.$router.push({ name: "home" });

        }

        return {
            logout,
            route,
            showLogin,
            showSignUp,
            userAccount,
            userLogged
        }

    }
})

</script>

<style lang="less" scoped src="../assets/less/components/Menu.less"></style>
