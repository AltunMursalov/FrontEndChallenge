<template>
  <div class="about">
    <label @click="next">Next page →</label>
  </div>
</template>

<script>
import store from "../store.js"
import router from "../router.js"
export default {
  name: 'about',
  metaInfo: {
    title: 'About'
  },
  methods:{
    next(){
      router.push("/skills");
    }
  },
  mounted(){
    store.state.progress = 25;
  }
}
</script>
