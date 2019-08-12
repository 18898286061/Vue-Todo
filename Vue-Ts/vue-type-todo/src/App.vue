<script lang="tsx">
import { Component, Vue, Watch } from 'vue-property-decorator';
// import style from './test.module.less';
// import Xxx from './xxx';

@Component export default class App extends Vue {
  protected render() {
    return (
      <div>Hello TypeScript</div>
    );
  }
  // public value = '';
  // public msg = '';
  // public get valueLength() {
  //   return this.value.length;
  // }
  // public created() {
  //   console.log('我在组件创建时被调用');
  //   console.log(this.$refs);
  // }
  // public handleClick() {
  //   console.log('我被点了');
  //   console.log(this.$refs);
  // }
  // @Watch('value')
  // protected valueWatch(newV: any, oldV: any) {
  //   this.msg = `监听到属性value发生变化，新的值为：${newV}`;
  // }
  // protected render() {
  //   return (
  //     <div class={style.class1}>
  //       <input type='text' v-model={this.value} />
  //       {this.valueLength}
  //       <button class='class2' onClick={this.handleClick}>
  //         点我
  //       </button>
  //       <div>
  //         <Xxx msg='渲染组件成功' ref='xxx'/>
  //       </div>
  //     </div>
  //   );
  // }
}
</script>