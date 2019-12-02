<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <AppContentSection>
      <nuxt/>
    </AppContentSection>
  </div>
</template>

<script>
import AppContentSection from '@/components/AppContentSection'

export default {
  components: {
    AppContentSection
  }
}
</script>
