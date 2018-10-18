<template>
  <a
    href="#"
    class="block relative w-40 h-40 bg-green hover:bg-green-dark outline-none focus:shadow-outline rounded-full flex justify-center items-center">
    <font-awesome-icon
      :icon="['far', 'shopping-cart']"
      class="text-18 text-white"/>
    <div class="number absolute pin-t pin-r w-20 h-20 rounded-full bg-pink-dark text-12 font-bold text-white flex justify-center items-center">
      13
    </div>
  </a>
</template>

<script>
export default {};
</script>

<style scoped>
.number {
  line-height: 0;
}
</style>

