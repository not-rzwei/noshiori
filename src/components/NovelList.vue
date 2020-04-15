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

          <template v-slot:cell(action)="data">
            <b-button size="sm" @click="info(data.item)">Edit</b-button>
          </template>

          <template v-slot:table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
            </div>
          </template>
        </b-table>

        <NovelModal :id="modal.id" :novel="modal.novel" @added="updateNovel" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NovelForm from "@/components/NovelForm.vue";
import NovelModal from "@/components/NovelModal.vue";
import Novel from "@/models/Novel";
import { db } from "@/db";

@Component({
  components: {
    NovelForm,
    NovelModal
  },
  firestore: {
    list: db.collection("list").orderBy("title")
  }
})
export default class NovelList extends Vue {
  list: Novel[] = [];
  fields = [{ key: "title", sortable: true }, "progress", "action"];
  modal = {
    id: "modal",
    novel: {}
  };

  addToList(novel: Novel): void {
    db.collection("list").add(novel);
  }

  updateNovel(novel: Novel): void {
    const id = novel.id;
    const data = { ...novel };

    db.collection("list")
      .doc(id)
      .set(data)
      .then(() => {
        console.log("Updated");
      });
  }

  info(novel: Novel): void {
    const copy = JSON.parse(JSON.stringify(novel));
    copy.id = novel.id;

    this.modal.novel = copy;
    this.$root.$emit("bv::show::modal", this.modal.id);
  }
}
</script>
