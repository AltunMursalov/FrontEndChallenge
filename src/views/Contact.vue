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
