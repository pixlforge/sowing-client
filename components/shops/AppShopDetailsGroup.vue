<template>
  <div>
    <div class="">
      <AppTitle
        semantic="h5"
        visual="h3"
      >
        {{ title }}
      </AppTitle>
      <p class="text-16 leading-relaxed capitalize my-10">
        {{ language }}
      </p>
      <p class="text-16 text-gray-300 leading-relaxed my-10">
        {{ description }}
      </p>
    </div>
    <div class="mt-24">
      <slot/>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppTitle
  },
  props: {
    title: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
