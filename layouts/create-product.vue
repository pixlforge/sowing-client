<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-center">
    <ContentSection>
      <nuxt/>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection'

export default {
  components: {
    ContentSection
  }
}
</script>
