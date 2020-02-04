<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

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
import AppAlert from '@/components/globals/AppAlert'

export default {
  components: {
    Logo,
    AppAlert
  }
}
</script>
