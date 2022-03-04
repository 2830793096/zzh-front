<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--这样使用组件！-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// 在这里引入组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
