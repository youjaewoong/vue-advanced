<template>
  <div>
     <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <div class="points">
            {{ job.points || 0 }}
        </div>
        <div>
            <p class="news-title"> 
              <a v-bind:href="job.url" target="_blank">
                  {{ job.title }}
                </a>
            </p>
            <small class="link-text">
              {{ job.time_ago }} by
              <a class="link-text" :href="job.url">
                {{ job.domain }}
              </a>
            </small>
        </div>
      </li>
    </ul> -->
    <!-- <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a v-bind:href="job.url" target="_blank">
        {{ job.title }}
      </a>
      <small> {{ job.time_ago }} by {{ job.domain }} </small>
    </p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: { ListItem }
}
</script>
<style scope>
</style>
