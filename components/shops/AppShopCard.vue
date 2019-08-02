<template>
  <div class="px-20 mb-36">
    <div class="flex flex-col md:flex-row rounded-lg shadow-2xl bg-white">

      <!-- Left side -->
      <div
        :style="style"
        class="w-full md:w-1/4 flex justify-center items-center rounded-t-lg md:rounded-tr-none md:rounded-bl-lg py-30 md:py-0"
      >

        <!-- Avatar -->
        <img
          :src="shop.avatar"
          class="w-75 h-75 rounded-full border-4 border-white"
          alt="Shop avatar"
        >
      </div>

      <!-- Right side -->
      <div class="w-full md:w-3/4 p-30">

        <!-- Title -->
        <AppTitle
          semantic="h5"
          visual="h4"
        >
          {{ shop.name }}
        </AppTitle>

        <!-- Description -->
        <p class="text-14 leading-relaxed text-center md:text-left my-30">
          {{ shop.description }}
        </p>

        <!-- Meta -->
        <div class="flex justify-center md:justify-start items-center text-14 text-gray-300 mt-30">
          <font-awesome-icon
            :icon="['far', 'box-full']"
            class="mr-10"
          />
          <span>
            {{ shop.articles }} articles
          </span>
        </div>
      </div>
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
    shop: {
      type: Object,
      required: true
    }
  },
  computed: {
    style() {
      return `background-color: ${this.shop.accent}`
    }
  }
}
</script>
