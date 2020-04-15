<template>
  <div>
    <ul>
      <li v-for="novel in list" :key="novel.title">
        {{ novel.title }} - {{ novel.marker }} {{ novel.progress }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Novel from "@/models/Novel";

@Component
export default class NovelList extends Vue {
  list: Novel[] = [
    {
      title: "Isaac",
      kind: Novel.Kind.WebNovel,
      marker: Novel.Marker.Chapter,
      progress: 31
    },
    {
      title: "Tutorial is Too Hard",
      kind: Novel.Kind.WebNovel,
      marker: Novel.Marker.Chapter,
      progress: 100
    }
  ];
}
</script>
