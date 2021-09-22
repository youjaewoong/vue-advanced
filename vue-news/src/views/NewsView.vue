<template>
  <div> 
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a v-bind:href="item.url" target="_blank">
        {{ item.title }}
      </a>
      <small> 
        <router-link v-bind:to="`/user/${item.user}`"> 
          {{ item.time_ago }} by {{ item.user }}
        </router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>