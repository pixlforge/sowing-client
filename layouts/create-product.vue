<template>
  <div
    :class="`bg-${shopTheme}-500`"
    class="min-h-screen flex justify-center items-start"
  >
    <main class="container bg-white lg:rounded-lg lg:shadow-2xl px-20 py-36 sm:px-36 sm:py-36 lg:px-48 lg:py-48 xl:px-60 xl:py-60 lg:my-48">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import theming from '@/mixins/theming'

export default {
  mixins: [theming]
}
</script>
