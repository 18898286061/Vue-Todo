<template>
  <div class="detail">
    <router-link to="/">返回</router-link>
    <h1>{{customer.name}}</h1>
    <span>
      <router-link :to="'/edit/'+customer.id">编辑</router-link>
      <button @click="deleteCustomer(customer.id)">删除</button>
    </span>
    <ul>
      <li>{{customer.email}}</li>
      <li>{{customer.phone}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      customer: ""
    }
  },
  methods: {
    fetchCustomers(id) {
      this.$axios.get('http://localhost:3000/users/'+id)
        .then((response)=> { //this 指向问题
          this.customer = response.data
      })
    },
    deleteCustomer(id) {
      this.$axios.delete('http://localhost:3000/users/'+id)
        .then((response)=> {
          this.$router.push({path:"/", query: {alert: "用户删除成功!"}})
        })
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
