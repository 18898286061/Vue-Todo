<template>
  <h3>
    Message
    <ul>
      <li v-for="(message) in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">Push查看</button>
        <button @click="replaceShow(message.id)">Replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">回退</button>
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
  },

  methods: {
    pushShow(id) {
      this.$router.push(`/home/message/detail/${id}`)
    },
    replaceShow(id){
      this.$router.replace(`/home/message/detail/${id}`)
    }
  }

}

</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
}
</style>
