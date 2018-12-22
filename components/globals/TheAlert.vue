<template>
  <div
    v-if="alert"
    :class="{ 'bg-blue': type === 'info', 'bg-red': type === 'danger', 'bg-green': type === 'success', 'bg-orange': type === 'warning' }"
    class="py-40">
    <div class="container relative flex justify-center items-center">
      <p class="text-20 font-bold text-white text-center">{{ alert }}</p>
      <button
        class="absolute pin-r text-24 text-white hover:text-grey-lightest p-10"
        @click.prevent="close">
        <font-awesome-icon
          :icon="['fas', 'times']"/>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      type: "alert/type",
      alert: "alert/message"
    })
  },
  methods: {
    ...mapActions({
      close: "alert/close"
    })
  }
};
</script>
