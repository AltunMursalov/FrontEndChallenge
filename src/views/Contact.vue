<template>
  <div class="contact">
    <h1>Altun Mursalov</h1>
    <p>Phone: +994 - 55 - 752 - 72 - 44</p>
    <a href="mailto:altun.mursalov00@gmail.com">My E-Mail</a>
  </div>
</template>

<script>
import store from "../store.js"
export default {
  name: 'contact',
  metaInfo: {
    title: 'Contact'
  },
  mounted(){
    store.state.progress = 100;
  }
}
</script>
