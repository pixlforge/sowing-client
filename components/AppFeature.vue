<template>
  <div class="w-full md:w-1/2 px-20 my-36 md:my-72">
    <div class="w-90 h-90 border-4 border-pink-600 rounded-full flex justify-center items-center mx-auto">
      <font-awesome-icon
        :icon="['far', icon]"
        class="text-48 text-pink-600"
      />
    </div>
    <AppTitle
      semantic="h2"
      visual="h4"
      utilities="text-center my-30"
    >
      {{ title }}
    </AppTitle>
    <p class="text-14 lg:text-16 text-center leading-loose">
      {{ body }}
    </p>
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
    },
    body: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
