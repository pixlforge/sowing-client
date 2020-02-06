<template>
  <div>

    <!-- Alert -->
    <Alert/>

    <main class="min-h-screen flex justify-center items-center bg-green-500">
      <div class="w-full max-w-600 bg-white rounded-lg shadow-2xl p-48">

        <!-- Logo -->
        <div class="text-center mb-36">
          <nuxt-link
            :to="{ name: 'index' }"
            class="inline-block"
          >
            <Logo class="w-200"/>
          </nuxt-link>
        </div>

        <!-- Page content -->
        <nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from '@/components/globals/Logo'
import Alert from '@/components/globals/Alert'

export default {
  components: {
    Logo,
    Alert
  }
}
</script>
