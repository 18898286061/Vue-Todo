<template>
  <h3>
    News
    <div>
      <ul>
        <li v-for="(news, index) in newArr" :key="index">{{news}}</li>
      </ul>
    </div>
  </h3>
</template>

<script>

export default {
  data() {
    return {
      newArr: ['news001', 'news002', 'news003']
    }
  },
}

</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
}
</style>
