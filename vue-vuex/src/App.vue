<template>
  <div>
    <p>Click {{$store.state.count}} Times, Count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  computed: {
    evenOrOdd() {
      return this.$store.getters.evenOrOdd
    }
  },
  methods: {
    increment() {
      // 通知vuex去增加
      this.$store.dispatch('increment') // 触发 store中的action调用
      // const count = this.count
      // this.count = count + 1
    },
    decrement() {
      this.$store.dispatch('decrement')
      // const count = this.count
      // this.count = count - 1
    },
    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')
      // const count = this.count
      // if(count % 2 === 1) {
      //   this.count = count + 1
      // }
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
      // setTimeout(()=> {
      //   const count = this.count
      //   this.count = count + 1
      // }, 1000)
    }
  }
}
</script>

<style>

</style>
