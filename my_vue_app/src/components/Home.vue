<template>
  <div class="container">
    <Input />
    <List />
  </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
  components: {
    Input,
    List
  },
  name: 'Home'
}
</script>

<style scoped>
  .container {
    border-radius: 6px;
    display: flex;
    width: 60vw;
    border: 1px solid #eee;
    margin: 0 auto;
    flex-direction: column;
  }
</style>
