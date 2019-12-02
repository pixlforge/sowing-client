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
        <AppLogo/>
      </nuxt-link>

      <nuxt/>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import AppAlert from '@/components/globals/AppAlert'

export default {
  components: {
    AppLogo,
    AppAlert
  }
}
</script>
