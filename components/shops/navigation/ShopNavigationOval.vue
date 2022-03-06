<template>
  <div
    class="w-50 h-50 rounded-full text-24 font-bold flex justify-center items-center cursor-pointer"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
