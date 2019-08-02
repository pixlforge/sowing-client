<template>
  <div class="w-full flex flex-col lg:flex-row mt-48 first:mt-0">
    <div class="lg:w-1/2 lg:pr-10">
      <AppTitle
        semantic="h5"
        visual="h3"
      >
        {{ title }}
      </AppTitle>
    </div>
    <div class="lg:w-1/2 lg:pl-10 mt-20 lg:mt-0">
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
    }
  }
}
</script>
