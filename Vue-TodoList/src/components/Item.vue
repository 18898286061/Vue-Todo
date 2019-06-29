<template>
  <div class="item">
    <el-checkbox
      v-model="checked"
      v-if="show"
      style="padding-top: 12px;"
      @change="checkChange"
    >{{input}}</el-checkbox>

    <el-input
      v-else
      v-model="input"
      placeholder="请输入修改内容"
      style="width: 160px;"
    ></el-input>

    <div>
    <el-button
      type="danger"
      icon="el-icon-delete"
      @click="deleteItem"
    >删除</el-button>

    <el-button
      type="primary"
      icon="el-icon-edit"
      @click="editItem"
    >修改</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['storeId'],
  data() {
    const storeId = this.storeId
    const todoListID = this.$store.state.todoList[storeId]
    return {
      checked: todoListID.completed,
      input: todoListID.title,
      show: true
    };
  },
  methods: {
    ...mapActions({
      DeleteTodo: 'deleteTodo',
      EditItem: 'editItem'
      }),

    deleteItem() {
      const storeId = this.storeId
      this.DeleteTodo(this.todoList[storeId].id)
    },
    editItem() {
      if(this.show !== true) {
        const storeId = this.storeId
        this.EditItem(
          {
            id: this.todoList[storeId].id,
            title: this.input,
            userId: 1,
            completed: false
          })
      }
      this.show = !this.show
    },
    checkChange() {
      const storeId = this.storeId
      const completed = this.todoList[storeId].completed

      this.EditItem(
        {
          id: this.todoList[storeId].id,
          title: this.input,
          userId: 1,
          completed: !completed
        })

    }
  },
  computed: {
    ...mapState({
      todoList: state=> state.todoList
    })
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  border-bottom: 1px solid #eee;
  padding: 12px;
}

.item:last-child {
  border-bottom: none;
}
</style>
