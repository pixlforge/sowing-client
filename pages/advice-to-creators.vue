<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('advice_to_creators.title')"
      icon="comment-dots"
    />

    <!-- Content -->
    <AppContentSection class="max-w-800">
      <AppTitle
        semantic="h1"
        visual="h4"
      >
        {{ $t('advice_to_creators.created_a_shop') }}
      </AppTitle>
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
    </AppContentSection>

    <!-- Streak newsletter -->
    <AppStreakNewsletter/>

  </main>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppList from '@/components/paragraphs/AppList'
import AppHeader from '@/components/headers/AppHeader'
import AppContentSection from '@/components/AppContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter'
import IllustrationNewIdeas from '@/components/illustrations/IllustrationNewIdeas'

export default {
  head() {
    return {
      title: `${this.$t('pages.faq.title')} | ${this.title}`,
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
    AppTitle,
    AppList,
    AppHeader,
    AppContentSection,
    AppParagraph,
    AppStreakNewsletter,
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
