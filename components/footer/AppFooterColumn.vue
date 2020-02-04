<template>
  <section class="w-1/3 lg:w-1/5 mx-auto mt-48 lg:mt-96">
    <Heading
      tag="h5"
      visual="h5"
    >
      {{ title }}
    </Heading>
    <ul class="leading-loose mt-16">
      <slot/>
    </ul>
  </section>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  components: {
    Heading
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
