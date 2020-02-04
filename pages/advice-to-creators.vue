<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('advice_to_creators.title')"
      icon="comment-dots"
    />

    <!-- Content -->
    <ContentSection class="max-w-800">
      <Heading
        tag="h1"
        visual="h4"
      >
        {{ $t('advice_to_creators.created_a_shop') }}
      </Heading>
      <AppParagraph>
        {{ $t('advice_to_creators.list_of_advices') }}
      </AppParagraph>
      <AppList
        :items="advices"
        icon="chevron-circle-right"
        icon-color="green"
      />
      <AppParagraph class="font-bold">
        {{ $t('advice_to_creators.wish_you_succcess') }}
      </AppParagraph>

      <!-- Illustration -->
      <div class="my-72 md:my-96">
        <IllustrationNewIdeas class="max-w-400 mx-auto"/>
      </div>
    </ContentSection>

    <!-- Streak newsletter -->
    <StreakNewsletter/>

  </main>
</template>

<script>
import Heading from '@/components/Heading'
import AppList from '@/components/paragraphs/AppList'
import AppHeader from '@/components/headers/AppHeader'
import ContentSection from '@/components/ContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import StreakNewsletter from '@/components/streaks/StreakNewsletter'
import IllustrationNewIdeas from '@/components/illustrations/IllustrationNewIdeas'

export default {
  head() {
    return {
      title: this.$t('advice_to_creators.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  components: {
    Heading,
    AppList,
    AppHeader,
    ContentSection,
    AppParagraph,
    StreakNewsletter,
    IllustrationNewIdeas
  },
  computed: {
    advices() {
      return [
        this.$t('advice_to_creators.advice_01'),
        this.$t('advice_to_creators.advice_02'),
        this.$t('advice_to_creators.advice_03'),
        this.$t('advice_to_creators.advice_04'),
        this.$t('advice_to_creators.advice_05'),
        this.$t('advice_to_creators.advice_06'),
        this.$t('advice_to_creators.advice_07'),
        this.$t('advice_to_creators.advice_08'),
        this.$t('advice_to_creators.advice_09'),
        this.$t('advice_to_creators.advice_10')
      ]
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  }
}
</script>
