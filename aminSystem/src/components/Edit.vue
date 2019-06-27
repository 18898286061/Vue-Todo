<template>
  <div class="add">
    <Alert v-if="alert" :message="alert" />
    <h1>编辑用户</h1>
    <form v-on:submit="updateCustomer">
      <div>
        <h4>用户信息</h4>
          <label>姓名</label>
          <input type="text" v-model="customer.name">
          <label>电话</label>
          <input type="text" v-model="customer.phone">
          <label>姓名</label>
          <input type="text" v-model="customer.email">
      </div>
      <button type="submit">提交修改内容</button>
    </form>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  name: 'Edit',
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
    fetchCustomer(id) {
      this.$axios.get('http://localhost:3000/users/'+id)
        .then((response)=> {
          this.customer = response.data
        })
    },

    updateCustomer(e) {
      if(!this.customer.name || !this.customer.phone || !this.customer.email) {
        this.alert = "信息填写不完整"
      } else {
        let updateCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email
        }
        console.log(this.$route.params.id)
        this.$axios.put('http://localhost:3000/users/'+ this.$route.params.id, updateCustomer)
          .then((response)=> {
            this.$router.push({path: "/", query:{alert: "用户更新成功"}})
          })
          e.preventDefault();
      }
      e.preventDefault();
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
