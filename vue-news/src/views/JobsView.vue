<template>
  <div>
    <ul class="news-list">
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
            {{ job.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
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
    </ul>
    <!-- <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a v-bind:href="job.url" target="_blank">
        {{ job.title }}
      </a>
      <small> {{ job.time_ago }} by {{ job.domain }} </small>
    </p> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_JOBS');
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
