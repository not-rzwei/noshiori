<template>
  <b-form inline @submit.prevent="submit">
    <b-input
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Title"
      v-model="novel.title"
      required
    ></b-input>

    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="kinds"
      v-model="novel.kind"
    ></b-form-select>

    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :options="markers"
      v-model="novel.marker"
    ></b-form-select>

    <b-form-input
      class="mb-2 mr-sm-2 mb-sm-0 number"
      type="number"
      placeholder="Progress"
      min="0"
      v-model="novel.progress"
    ></b-form-input>

    <b-button type="submit" variant="primary">Save</b-button>
  </b-form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Novel from "@/models/Novel";

@Component
export default class NovelForm extends Vue {
  markers = Object.values(Novel.Marker);
  kinds = Object.values(Novel.Kind);
  novel = this.placeholder;

  submit(): void {
    this.$emit("added", this.novel);
    this.novel = this.placeholder;
  }

  get placeholder(): Novel {
    return {
      id: "",
      title: "",
      kind: Novel.Kind.WebNovel,
      marker: Novel.Marker.Chapter,
      progress: 0
    };
  }
}
</script>

<style scoped>
@media (min-width: 576px) {
  .number {
    width: 100px;
  }
}
</style>
