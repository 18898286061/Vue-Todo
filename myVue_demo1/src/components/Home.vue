<template>
  <div>
    <h3>Home主页</h3>

      <router-link to="/home/news">News</router-link>
      <router-link to="/home/message">Message</router-link>

      <router-view></router-view>
  </div>
</template>

<script>

export default {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
