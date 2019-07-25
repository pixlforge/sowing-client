<template>
  <div
    v-if="alert"
    :class="{
      'bg-blue-500': type === 'info',
      'bg-red-500': type === 'danger',
      'bg-green-500': type === 'success',
      'bg-orange-500': type === 'warning'
    }"
    class="py-48">
    <div class="container relative flex justify-center items-center">
      <!-- eslint-disable vue/no-v-html -->
      <p
        class="text-18 font-semibold text-white text-center"
        v-html="alert"/>
      <!-- eslint-enable -->
      <button
        class="absolute right-0 text-24 text-white hover:text-gray-200 p-10"
        @click.prevent="close">
        <font-awesome-icon
          :icon="['fas', 'times']"/>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      type: 'alert/type',
      alert: 'alert/message'
    })
  },
  methods: {
    ...mapActions({
      close: 'alert/close'
    })
  }
}
</script>
