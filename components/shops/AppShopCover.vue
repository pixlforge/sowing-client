<template>
  <div
    :style="`background-image: url('${shopCover}');`"
    class="shop-cover__container"/>
</template>

<script>
export default {
  props: {
    shopCover: {
      type: String,
      required: true
    }
  }
};
</script>
