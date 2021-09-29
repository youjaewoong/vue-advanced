<template>
  <div>
    <list-item></list-item>
  </div>
</template>
<script>
import ListItem from '../components/ListItem.vue';
import ListMix from '../mixins/ListMixin.js'
export default {
  components: { ListItem },
  mixins: [ListMix]
}
</script>
<style scope>
</style>