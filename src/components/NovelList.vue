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
import { db } from "@/db";

@Component({
  components: {
    NovelForm
  },
  firestore: {
    list: db.collection("list").orderBy("title")
  }
})
export default class NovelList extends Vue {
  list: Novel[] = [];

  addToList(novel: Novel): void {
    db.collection("list").add(novel);
  }
}
</script>
