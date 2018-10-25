<template>
  <div class="bg-green">
    <div class="container flex py-40">
      <div>
        <div class="w-110 h-110 rounded-full bg-white"/>
      </div>
      <div class="ml-80">
        <h1 class="font-cafe text-48 text-white">{{ item.name[locale] }}</h1>
        <p class="text-base text-white font-semibold mt-10">
          {{ item.description[locale] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    item: {
      type: Object,
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

