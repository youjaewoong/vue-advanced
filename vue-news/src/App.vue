<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: { ToolBar },
  commponets : {
    ToolBar,
  },
  methods: {
    fetchData(){
      console.log("test");
    }
  }
}
</script>

<style>
</style>
