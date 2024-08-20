<template>
    <nav id="wrapper-menu" class="navbar navbar-expand-lg fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="menu">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="item in menu">
                    <a class="nav-link link">{{ item.text }}</a>
                </li>
            </ul>
        </div>

        <ul id="social-links">
            <li class="nav-item" v-for="menu in socialLinks">
                <a class="nav-link" data-toggle="tooltip" data-placement="bottom" :title="menu.title" :href="menu.href" target="_blank">
                    <i :class="menu.icon"></i>
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
        const menu = reactive([
            { text: translation.menu.link1 },
            { text: translation.menu.link2 },
            { text: translation.menu.link3 },
            { text: translation.menu.link4 },
            { text: translation.menu.link5 }
        ])
        const socialLinks = reactive([
            { icon : "bi bi-linkedin", "href" : "https://www.linkedin.com/in/david-leonardo-molina-ruíz-1254a9152", "title" : "Linkedin" },
            { icon : "bi bi-github", "href" : "https://github.com/dmolina101", "title" : "Github" },
            { icon : "bi bi-stack-overflow", "href" : "https://es.stackoverflow.com/users/95526/david-leonardo-molina-ruiz-dav?tab=profile", "title" : "Stackoverflow" }
        ])
        
        onBeforeMount(() => {

        })

        return {
            socialLinks,
            menu
        }

    }
})

</script>

<style lang="less" scoped src="../../assets/less/components/menu/Index.less"></style>