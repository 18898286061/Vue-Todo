<template>
  <div id="app">

    <div v-if="!repoUrl">Loading...</div>
    <div v-else>Most Star Repo is <a :href="repoUrl">{{repoName.toUpperCase()}}</a> </div>

    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/about" class="list-group-item">About</router-link>
          <router-link to="/home" class="list-group-item">Home</router-link>
        </div>
      </div>
    </div>

    <div class="col-xs-6">
      <div class="pannel">
        <div class="panel-body">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable */

// 1. 引入组件（Home）
import Home from './components/Home'
import axios from 'axios'

// 映射组件标签
export default {
  name: 'App',
  components: {
    Home
  },
  data() {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted() {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`

    axios.get(url).then(response=> {
      // 成功了
      const result = response.data
      const mostRepo = result.items[0]
      this.repoUrl = mostRepo.html_url
      this.repoName = mostRepo.name
    }).catch(err=> {
      alert('请求失败')
    })
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
