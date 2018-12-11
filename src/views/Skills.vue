<template>
  <div class="skills">
    <label @click="next">Next page →</label>
  </div>
</template>

<script>
import store from '../store.js'
import router from '../router.js'
export default {
  name: 'skills',
  metaInfo: {
    title: 'Skills'
  },
  methods:{
    next(){
      router.push("/portfolio");
    }
  },
  mounted(){
    store.state.progress = 50;
  }
}
</script>
