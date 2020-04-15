<template>
  <div id="app">
    <NovelList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NovelList from "@/components/NovelList.vue";

@Component({
  components: {
    NovelList
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
