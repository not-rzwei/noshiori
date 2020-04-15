<template>
  <form @submit.prevent="submit">
    <input placeholder="Novel title" v-model="novel.title" required />

    <select v-model="novel.kind">
      <option value disabled>Marker</option>
      <option v-for="kind in kinds" :key="kind">{{ kind }}</option>
    </select>

    <select v-model="novel.marker">
      <option value disabled>Kind</option>
      <option v-for="marker in markers" :key="marker">{{ marker }}</option>
    </select>

    <input
      type="number"
      min="0"
      placeholder="Progress"
      v-model="novel.progress"
    />

    <input type="submit" value="Add" />
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Novel from "@/models/Novel";

@Component
export default class NovelForm extends Vue {
  markers = Novel.Marker;
  kinds = Novel.Kind;
  novel = this.placeholder;

  submit(): void {
    this.$emit("added", this.novel);
    this.novel = this.placeholder;
  }

  get placeholder(): Novel {
    return {
      title: "",
      kind: Novel.Kind.WebNovel,
      marker: Novel.Marker.Chapter,
      progress: 0
    };
  }
}
</script>
