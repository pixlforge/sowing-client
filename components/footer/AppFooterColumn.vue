<template>
  <section class="w-1/3 lg:w-1/5 mx-auto mt-48 lg:mt-96">
    <AppTitle
      semantic="h5"
      visual="h5">
      {{ title }}
    </AppTitle>
    <ul class="leading-loose mt-16">
      <slot/>
    </ul>
  </section>
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
