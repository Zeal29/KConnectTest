<template>
  <v-app class="grey lighten-3">
    <v-content>
        <nav-bar></nav-bar>
     <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
    import NavBar from './components/Home/NavBar.vue'

export default {
  name: 'App',
  components: {
      NavBar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

</style>
