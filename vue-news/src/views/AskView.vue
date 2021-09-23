<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <div class="points">
            {{ item.points || 0}}
        </div>
        <div>
            <p class="news-title"> 
              <a v-bind:href="item.url" target="_blank">
                  {{ item.title }}
                </a>
            </p>
            <small class="link-text">
              {{ item.time_ago }} by
              <router-link class="link-text" v-bind:to="`/item/${item.id}`">
                {{ item.user }}
              </router-link>
            </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';
//import { mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
export default {
  components: { ListItem }
  // computed: {
  //   ...mapGetters(['fetchedAsk'])
  //   3#
  //   ...mapGetters({
  //     fetchedAsk : 'fetchedAsk' 
  //    })
  //   2#
  //   ...mapState({
  //     ask: state => state.ask
  //   })
  //   1#
  //   ask() {
  //     return this.$store.stte.ask;
  //   }
  // },
}
</script>
<style scope>
</style>