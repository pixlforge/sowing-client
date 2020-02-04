<template>
  <div class="w-full flex flex-col md:flex-row my-72">
    <div class="flex flex-col items-center">
      <div class="w-100">
        <img
          :src="`img/reviews/avatars/${review.avatar}`"
          :alt="review.name"
          class="block rounded-full"
        >
      </div>
      <div class="flex justify-center">
        <font-awesome-icon
          v-for="(star, index) in review.stars"
          :key="index"
          :icon="['fas', 'star']"
          class="text-16 text-orange-400 mt-10"
        />
      </div>
    </div>
    <div class="text-center md:text-left px-20 sm:px-48 mt-48 md:mt-0">
      <Heading
        tag="h5"
        visual="h4"
      >
        {{ review.name }}
      </Heading>
      <p class="text-16 leading-loose mt-20">
        {{ review.comment }}
      </p>
    </div>
  </div>
</template>

<script>
import Heading from '@/components/Heading'

export default {
  components: {
    Heading
  },
  props: {
    review: {
      type: Object,
      required: true
    }
  }
}
</script>
