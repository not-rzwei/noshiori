<template>
  <b-container fluid="sm">
    <b-row>
      <b-col>
        <NovelForm @added="addToList" />
      </b-col>
    </b-row>

    <b-row>
      <b-col>
        <b-table
          :items="list"
          :busy="!list.length"
          :fields="fields"
          class="mt-3"
          outlined
        >
          <template v-slot:cell(progress)="data">
            {{ data.item.marker }} {{ data.item.progress }}
          </template>

          <template v-slot:table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
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
  fields = [{ key: "title", sortable: true }, "kind", "progress"];

  addToList(novel: Novel): void {
    // db.collection("list").add(novel);
    console.log(novel);
  }
}
</script>
