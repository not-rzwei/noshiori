<template>
  <b-modal :id="id" :title="novel.title">
    <b-form-group label="Title">
      <b-form-input :value="novel.title" required></b-form-input>
    </b-form-group>

    <b-form-group label="Kind">
      <b-form-select :options="kinds" v-model="novel.kind"></b-form-select>
    </b-form-group>

    <b-form-group label="Progress">
      <b-row>
        <b-col
          ><b-form-select
            :options="markers"
            v-model="novel.marker"
          ></b-form-select
        ></b-col>
        <b-col
          ><b-form-input
            :value="novel.progress"
            type="number"
            required
          ></b-form-input
        ></b-col>
      </b-row>
    </b-form-group>

    <template v-slot:modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="primary" @click="ok()">
        Update
      </b-button>
      <b-button size="sm" variant="danger" @click="cancel()">
        Delete
      </b-button>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Novel from "@/models/Novel";

@Component({
  props: ["id", "novel"]
})
export default class NovelModal extends Vue {
  markers = Object.values(Novel.Marker);
  kinds = Object.values(Novel.Kind);
}
</script>
