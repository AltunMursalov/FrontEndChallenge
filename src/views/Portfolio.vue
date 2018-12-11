<template>
  <div class="portfolio">
    <label @click="next">Next page</label>
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
