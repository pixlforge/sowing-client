<template>
  <div>
    <div>
      <label
        for=""
        class="label">
        {{ variations[0].type.name[locale] }}
      </label>
      <select
        id=""
        name=""
        class="select">
        <option value="">Sélection</option>
        <option
          v-for="variation in variations"
          :key="variation.id"
          :value="variation.id">
          {{ variation.name[locale] }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    variations: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    })
  }
};
</script>

