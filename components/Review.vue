<template>
  <div class="w-full flex flex-col md:flex-row mt-50">
    <div class="flex flex-col items-center">
      <div class="w-100">
        <slot name="avatar"/>
      </div>
      <div class="flex justify-center">
        <font-awesome-icon
          v-for="(star, index) in stars"
          :key="index"
          :icon="['fas', 'star']"
          class="text-base text-orange mt-10"/>
      </div>
    </div>
    <div class="text-center md:text-left px-20 sm:px-50 mt-40 md:mt-0">
      <h5 class="text-26 text-green-darkest font-bold">{{ name }}</h5>
      <p class="text-base text-green-darkest leading-normal mt-20">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
};
</script>
