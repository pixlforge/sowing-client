<template>
  <div class="w-350 flex flex-col justify-between mx-auto mt-100">
    <div class="flex flex-col items-center">
      <div class="w-90 h-90 border-4 border-pink-dark rounded-full flex justify-center items-center">
        <font-awesome-icon
          :icon="['far', icon]"
          class="text-48 text-pink-dark"/>
      </div>
      <h3 class="text-20 text-green-darkest font-extrabold text-center uppercase mt-40">
        <slot name="title"/>
      </h3>
    </div>
    <p class="text-16 text-grey-light text-center leading-loose mt-30">
      <slot/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
