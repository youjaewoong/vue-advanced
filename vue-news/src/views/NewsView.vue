<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus.js';
export default {
  components: { ListItem },
  created() {
    bus.$emit('start:spinner', this.staringSpinner);
    this.$store.dispatch('FETCH_NEWS');
    bus.$emit('end:spinner', this.endSpinner);
  }
}
</script>
<style scope>
</style>