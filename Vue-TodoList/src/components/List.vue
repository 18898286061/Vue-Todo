<template>
  <div class="list">
    <el-input
      placeholder="请输入搜索内容"
      prefix-icon="el-icon-search"
      v-model="seachValue">
    </el-input>
    <Item
      v-for="(item, index) in searchBy(items, seachValue)"
      :key="item.id"
      :storeId="index"></Item>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'List',
  components: {
    Item
  },
  data () {
    return {
      seachValue: ''
    }
  },
  methods: {
    searchBy(items, value) {
      return items.filter((item)=> {
        return item.title.match(value)
      })
    }
  },
  computed: {
    items() {
      return this.$store.state.todoList
    }
  },
  created() {
    this.$store.dispatch('fetchTodos')
  }
}
</script>

<style scoped>

</style>
