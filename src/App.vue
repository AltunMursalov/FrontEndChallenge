<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
    <div class="progressBar" v-bind:style="{ width: progress_ + '%' }"></div>
  </div>
</template>

<script>
import store from "store.js"
  export default{
    name: "App",
    computed:{
      progress_(){
        return this.$store.state.progress
      }
    },
    methods:{
      
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.progressBar{
  height: 1%;
  position: fixed;
  background-color: blue;
  bottom: 0px;
  left: 0px;
}
</style>
