<template>
  <Menu />   
  
</template>

<script>

  import { defineComponent } from 'vue'
  import Menu from './components/menu/Index.vue'

  export default defineComponent({
    components: {
      Menu
    }
  })

</script>

<style lang="less" src="./assets/less/App.less"></style>