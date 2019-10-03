<template>
  <div
    :style="`background-image: url('${shopCover}');`"
    class="block w-full h-200 sm:h-250 md:h-300 lg:h-400 bg-center bg-no-repeat bg-cover"
  />
</template>

<script>
export default {
  props: {
    shopCover: {
      type: String,
      required: true
    }
  }
}
</script>
