<template>
  <div class="input">
    <el-input
      v-model="input"
      placeholder="请输入添加的内容"
      style="width: 100%"
      @keyup.enter.native="addTodo"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Input',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    ...mapActions({
      AddTodo: 'addTodo'
      }),
    addTodo() {
      let inputValue = { title: this.input, completed: false, userId: 1 }
      this.AddTodo(inputValue)
      this.input = ''
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
}
</style>
