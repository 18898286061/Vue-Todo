import { Component, Vue, Prop } from 'vue-property-decorator';

@Component

export default class App extends Vue {
  @Prop({ required: false })
  public msg?: string;
  protected render() {
    return <span>{this.msg}</span>;
  }
}
