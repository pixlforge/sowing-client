<template>
  <div class="hidden lg:block w-110 absolute bottom-0 text-16 text-center font-semibold cursor-pointer">
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
div {
  transform: translate(-25%, 3rem);
}
</style>
