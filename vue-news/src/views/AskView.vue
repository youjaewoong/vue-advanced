<template>
  <div>
    <ul class="news-list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
            {{ item.points || 0}}
        </div>
        <!-- 기타 정보 영역 -->
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
    </ul>
  </div>
</template>

<script>
//import { mapState, mapGetters } from 'vuex';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['fetchedAsk'])
    // 3#
    // ...mapGetters({
    //   fetchedAsk : 'fetchedAsk' 
    //  })
    // 2#
    // ...mapState({
    //   ask: state => state.ask
    // })
    // 1#
    // ask() {
    //   return this.$store.stte.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>
<style scope>
.news-list {
  margin : 0px;
  padding : 0px;
}
.post {
 list-style: none;
 display: flex;
 align-items: center;
 border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
 margin :0;
}
.link-text{
 color : #828282
}
</style>