<template>
  <div>
    <div class="">
      <Heading tag="h5" visual="h3">
        {{ title }}
      </Heading>
      <p class="text-16 leading-relaxed capitalize my-10">
        {{ language }}
      </p>
      <p class="text-16 text-gray-300 leading-relaxed my-10">
        {{ description }}
      </p>
    </div>
    <div class="mt-24">
      <slot />
    </div>
  </div>
</template>

<script>
import Heading from '@/components/globals/Heading'

export default {
  components: {
    Heading,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>
