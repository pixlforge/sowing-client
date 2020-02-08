<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <ContentSection>
      <Nuxt/>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/globals/ContentSection'

export default {
  components: {
    ContentSection
  }
}
</script>
