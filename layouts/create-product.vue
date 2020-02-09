<template>
  <div
    :class="`bg-${shopTheme}-500`"
    class="min-h-screen flex justify-center items-center"
  >
    <main class="container bg-white shadow-2xl p-36 lg:p-48 xl:p-60">
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
