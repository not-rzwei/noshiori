<template>
  <b-modal :id="id" :title="novel.title" hide-footer>
    <form @submit.stop.prevent="save">
      <b-form-group label="Title">
        <b-form-input v-model="novel.title" required></b-form-input>
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
              v-model="novel.progress"
              type="number"
              required
            ></b-form-input
          ></b-col>
        </b-row>
      </b-form-group>

      <b-button type="submit" block>Save</b-button>
    </form>
  </b-modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Novel from "@/models/Novel";

@Component
export default class NovelModal extends Vue {
  @Prop() id!: string;
  @Prop() novel!: Novel;

  markers = Object.values(Novel.Marker);
  kinds = Object.values(Novel.Kind);

  save(): void {
    this.$emit("added", this.novel);
    this.$root.$emit("bv::hide::modal", this.id);
  }
}
</script>
