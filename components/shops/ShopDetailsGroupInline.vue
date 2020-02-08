<template>
  <div class="w-full flex flex-col lg:flex-row mt-48 first:mt-0">
    <div class="lg:w-1/2 lg:pr-10">
      <Heading
        tag="h5"
        visual="h3"
      >
        {{ title }}
      </Heading>
    </div>
    <div class="lg:w-1/2 lg:pl-10 mt-20 lg:mt-0">
      <slot/>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/globals/Heading'

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
