<template>
  <b-container fluid="sm">
    <b-row>
      <b-col>
        <h3>ノベルの栞</h3>
      </b-col>
      <b-col align="right">
        <b-button v-b-modal.new-modal variant="primary">Add Novel</b-button>
        <NovelModal
          id="new-modal"
          :novel="{}"
          title="New Novel"
          @added="addToList"
        />
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
          <template v-slot:cell(title)="data">
            <b-link :href="data.item.link" target="blank" v-if="data.item.link">
              {{ data.item.title }}
            </b-link>
            <template v-else>
              {{ data.item.title }}
            </template>
          </template>

          <template v-slot:cell(progress)="data">
            {{ markerShorthand[data.item.marker] }} {{ data.item.progress }}
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

        <NovelModal
          :id="modal.id"
          :novel="modal.novel"
          title="Edit Novel"
          @added="updateNovel"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NovelModal from "@/components/NovelModal.vue";
import Novel from "@/models/Novel";
import { db } from "@/db";

@Component({
  components: {
    NovelModal
  },
  firestore: {
    list: db.collection("list").orderBy("title")
  }
})
export default class NovelList extends Vue {
  list: Novel[] = [];
  fields = [{ key: "title", sortable: true }, "progress", "action"];
  markerShorthand = {
    Chapter: "ch.",
    Volume: "vol."
  };
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
