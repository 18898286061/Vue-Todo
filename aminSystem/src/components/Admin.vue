<template>
  <div class="admin">
    <h1>用户管理</h1>
    <Alert v-if="alert" :message="alert"></Alert>
    <label>搜索：</label><input type="text"  placeholder="搜索" v-model="searchInput">
    <br>
    <table class="tabel">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, id) in searchBy(customers, searchInput)" :key="id">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link :to="'/detail/'+customer.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'Admin',
  data() {
    return {
      customers: [],
      alert: "",
      searchInput: ""
    }
  },
  methods: {
    fetchCustomers() {
      this.$axios.get('http://localhost:3000/users')
        .then((response)=> { //this 指向问题
          this.customers = response.data
      })
    },
    searchBy(customers, value) {
      return customers.filter((customer)=> {
        return customer.name.match(value)
      })
    }
  },
  created() {
    if(this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  },
  components: {
    Alert
  }
}
</script>

<style scoped>

</style>
