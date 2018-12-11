<template>
  <div class="portfolio">
    <a href="https://github.com/AltunMursalov">Visit my GitHub!</a><br>
    <label @click="next">Next page →</label>
  </div>
</template>

<script>
import store from "../store.js"
import router from "../router.js"
export default {
  name: 'portfolio',
  metaInfo: {
    title: 'Portfolio'
  },
  methods:{
    next(){
      router.push("/contact");
    }
  },
  mounted(){
    store.state.progress = 75;
  }
}
</script>
