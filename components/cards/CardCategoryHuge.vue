<template>
  <div
    class="relative w-full lg:w-1/2 h-700 bg-cover bg-center bg-no-repeat flex items-end"
    style="background-image: url(https://bulma.io/images/placeholders/1280x960.png)">
    <div class="flex flex-col items-start px-60 pb-50 z-10">
      <h2 class="font-cafe text-36 md:text-48 text-white">
        Vêtements pour bébé
      </h2>
      <p class="text-16 md:text-20 font-semibold text-white mt-10">
        Now let's put some happy little clouds in here. Have fun with it. It looks so good, I might as well not stop.
      </p>
      <nuxt-link
        :to="localePath({ name: 'index' })"
        class="btn btn-secondary mt-40">
        Voir les produits
      </nuxt-link>
    </div>
    <div class="absolute w-full h-full bg-black opacity-25"/>
  </div>
</template>

<script>
export default {};
</script>

