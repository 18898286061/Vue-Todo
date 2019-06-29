<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>ID: {{messageDetail.id}}</li>
      <li>Title: {{messageDetail.title}}</li>
      <li>Content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      messageDetail: {}
    }
  },
  mounted() {
    setTimeout(()=> {
      const allMessageDetails = [
        {
          id: 1,
          title: 'Message01',
          content: 'Message01 Content...'
        },
        {
          id: 2,
          title: 'Message02',
          content: 'Message02 Content...'
        },
        {
          id: 4,
          title: 'Message04',
          content: 'Message04 Content...'
        }
      ]
      this.allMessageDetails = allMessageDetails
      const id = this.$route.params.id*1
      this.messageDetail = allMessageDetails.find(detail=> detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function(value) { // 路由路径(param)发生了改变
      const id = value.params.id*1
      this.messageDetail = this.allMessageDetails.find(detail=> detail.id === id)
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
