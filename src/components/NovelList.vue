<template>
  <div>
    <NovelForm @added="addToList" />
    <ul>
      <li v-for="novel in list" :key="novel.title">
        {{ novel.title }} - {{ novel.marker }} {{ novel.progress }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NovelForm from "@/components/NovelForm.vue";
import Novel from "@/models/Novel";

@Component({
  components: {
    NovelForm
  }
})
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

  addToList(novel: Novel): void {
    this.list.push(novel);
  }
}
</script>
