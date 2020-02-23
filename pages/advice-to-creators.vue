<template>
  <main>

    <!-- Header -->
    <Header
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
      <Paragraph>
        {{ $t('advice_to_creators.list_of_advices') }}
      </Paragraph>
      <List
        :items="advices"
        icon="chevron-circle-right"
        icon-color="green"
      />
      <Paragraph class="font-bold">
        {{ $t('advice_to_creators.wish_you_succcess') }}
      </Paragraph>

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
import ContentSection from '@/components/globals/ContentSection'
import Header from '@/components/headers/Header'
import Heading from '@/components/globals/Heading'
import IllustrationNewIdeas from '@/components/illustrations/IllustrationNewIdeas'
import List from '@/components/paragraphs/List'
import Paragraph from '@/components/paragraphs/Paragraph'
import StreakNewsletter from '@/components/streaks/StreakNewsletter'

export default {
  components: {
    ContentSection,
    Header,
    Heading,
    IllustrationNewIdeas,
    List,
    Paragraph,
    StreakNewsletter
  },
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
