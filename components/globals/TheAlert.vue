<template>
  <div
    v-if="alert"
    :class="{ 'bg-blue-400': type === 'info', 'bg-red': type === 'danger', 'bg-green-400': type === 'success', 'bg-orange': type === 'warning' }"
    class="alert__background">
    <div class="alert__container container">
      <p
        class="alert__message"
        v-html="alert"/>
      <button
        class="alert__close-button"
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
