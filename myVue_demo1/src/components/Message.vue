<template>
  <h3>
    Message
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </h3>
</template>

<script>

export default {
  data() {
    return {
      messages: []
    }
  },
  mounted() {
    // 模拟Ajax
    setTimeout(()=> {
      const messages = [
        {
          id: 1,
          title: 'Message01'
        },
        {
          id: 2,
          title: 'Message02'
        },
        {
          id: 4,
          title: 'Message04'
        }]
        this.messages = messages
    }, 1000)
  }
}

</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
}
</style>
