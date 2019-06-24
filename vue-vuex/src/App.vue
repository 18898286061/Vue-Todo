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
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapState(['count']),
    ...mapGetters({evenOrOdd: 'evenOrOdd'}) //mapGtters() 返回值: {evenOrOdd {return $store.getters[evenOrOdd]}}
  },
  methods: {
    // increment() {
    //   // 通知vuex去增加, 触发 store中的action调用
    //   this.$store.dispatch('increment')
    // },
    // decrement() {
    //   this.$store.dispatch('decrement')
    // },
    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd')
    //   // }
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync')
    // }
    ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
}
</script>

<style>

</style>
