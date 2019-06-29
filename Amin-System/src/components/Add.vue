<template>
  <div class="add">
    <Alert v-if="alert" :message="alert" />
    <h1>添加用户</h1>
    <form v-on:submit="addCustomer">
      <div>
        <h4>用户信息</h4>
          <label>姓名</label>
          <input type="text" v-model="customer.name">
          <label>电话</label>
          <input type="text" v-model="customer.phone">
          <label>姓名</label>
          <input type="text" v-model="customer.email">
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'Add',
  components: {
    Alert
  },
  data () {
    return {
      customer: {},
      alert: ""
    }
  },
  methods: {
    addCustomer(e) {
      if(!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "信息填写不完整"
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email
        }
        this.$axios.post('http://localhost:3000/users', newCustomer)
          .then((response)=> {
            this.$router.push({path: "/", query:{alert: "用户信息添加成功"}})
          })
          e.preventDefault();
      }
      e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>
