<template>
  <div
    :style="`background-image: url('${shopCover}');`"
    class="block w-full h-400 bg-center bg-no-repeat bg-cover"
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
