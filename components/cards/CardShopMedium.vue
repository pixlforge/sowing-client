<template>
  <div class="w-full md:w-575 bg-white rounded-lg shadow-lg flex flex-col md:flex-row mx-auto mt-100">

    <!-- Left side -->
    <div
      :style="style"
      class="w-full md:w-1/4 flex justify-center items-center rounded-t-lg md:rounded-tr-none md:rounded-l-lg py-30 md:py-0">

      <!-- Avatar -->
      <img
        :src="shop.avatar"
        class="w-75 h-75 rounded-full"
        alt="Shop avatar">
    </div>

    <!-- Right side -->
    <div class="w-full md:w-3/4 p-30">
      <h5 class="text-22 text-green-darkest font-bold text-center md:text-left">
        {{ shop.name }}
      </h5>
      <p class="text-base text-grey-lighter font-semibold leading-normal text-center md:text-left mt-30">
        {{ shop.description }}
      </p>
      <div class="flex justify-center md:justify-start items-center mt-30">
        <font-awesome-icon
          :icon="['far', 'box-full']"
          class="text-14 text-grey-lighter mr-10"/>
        <span class="text-14 text-grey-lighter">
          {{ shop.articles }} articles
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  computed: {
    style() {
      return `background-color: ${this.shop.accent}`;
    }
  }
};
</script>

