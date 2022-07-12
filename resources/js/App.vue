<template>
  <div>
   <center> <h2>Development Starter Project</h2> <h1>Laravel 9 + Vue 3 + Vue Class Component + Vuex + TypeScript</h1></center>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
   
  },
})
export default class App extends Vue {
  initial = 0

  increment() {
    this.initial += 1
  }
  mounted() {
    console.log('hello');
  }
}
</script>
<style scoped>
.progress-bar {
  height: 0.2rem;
}
</style>