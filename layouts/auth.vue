<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <div class="min-h-screen flex flex-col justify-center items-center">

      <!-- Logo -->
      <nuxt-link
        :to="{ name: 'index' }"
        class="w-full max-w-200 sm:max-w-300 lg:max-w-400 my-36 px-20"
      >
        <Logo/>
      </nuxt-link>

      <nuxt/>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import Alert from '@/components/globals/Alert'

export default {
  components: {
    Logo,
    Alert
  }
}
</script>
