<template>
  <div>

    <!-- Alert -->
    <AppAlert/>

    <div class="antialiased text-gray-800 overflow-hidden min-h-screen flex flex-col justify-center items-center">

      <!-- Logo -->
      <nuxt-link
        :to="{ name: 'index' }"
        class="my-36 px-20"
      >
        <AppLogo class="w-1/2 sm:w-full mx-auto"/>
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
