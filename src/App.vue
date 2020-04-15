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
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-weight: 400;
  color: #2c3e50;
}
</style>
