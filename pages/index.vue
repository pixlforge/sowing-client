<template>
  <main>

    <!-- Featured Categories -->
    <section class="container">
      <h1 class="sr-only">
        {{ $t("categories.featured_categories") }}
      </h1>

      <div class="flex flex-wrap -mx-24">
        <AppFeaturedCategory
          v-for="category in featuredCategories"
          :key="category.id"
          :category="category"
        />
      </div>
    </section>

    <!-- Features -->
    <AppContentSection class="max-w-1000">
      <AppTitle
        semantic="h1"
        visual="main"
        utilities="mb-30 sm:mb-72 md:mb-60"
      >
        {{ $t("pages.home.titles.features") }}
      </AppTitle>

      <div class="flex flex-wrap justify-between -mx-20">
        <AppFeature
          :title="$t('pages.home.features.first.title')"
          :body="$t('pages.home.features.first.body')"
          icon="lightbulb"
        />

        <AppFeature
          :title="$t('pages.home.features.second.title')"
          :body="$t('pages.home.features.second.body')"
          icon="eye"
        />

        <AppFeature
          :title="$t('pages.home.features.third.title')"
          :body="$t('pages.home.features.third.body')"
          icon="rocket"
        />

        <AppFeature
          :title="$t('pages.home.features.fourth.title')"
          :body="$t('pages.home.features.fourth.body')"
          icon="shield-check"
        />
      </div>
    </AppContentSection>

    <!-- Streak register -->
    <AppStreakRegister/>

    <!-- Shops -->
    <AppContentSection>
      <AppTitle
        semantic="h1"
        visual="main"
      >
        {{ $t("pages.home.titles.shops") }}
      </AppTitle>

      <div class="flex flex-wrap -mx-20 mt-60 sm:mt-132">
        <AppShopCard
          v-for="shop in shops"
          :key="shop.id"
          :shop="shop"
          class="w-full lg:w-1/2"
        />
      </div>
    </AppContentSection>

    <!-- Categories -->
    <AppContentSection>
      <AppTitle
        semantic="h1"
        visual="main"
      >
        {{ $t("pages.home.titles.categories") }}
      </AppTitle>

      <div class="flex flex-wrap justify-center shadow-2xl -mx-20 mt-60 sm:mt-132">
        <AppCategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </AppContentSection>

    <!-- Reviews -->
    <AppContentSection class="max-w-1000">
      <AppTitle
        semantic="h1"
        visual="main"
      >
        {{ $t("pages.home.titles.reviews") }}
      </AppTitle>

      <div class="mt-60 sm:mt-132">
        <AppReview
          v-for="review in reviews"
          :key="review.id"
          :review="review"
        />
      </div>
    </AppContentSection>

    <!-- Streak newsletter -->
    <AppStreakNewsletter/>

  </main>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppReview from '@/components/AppReview'
import AppFeature from '@/components/AppFeature'
import AppShopCard from '@/components/shops/AppShopCard'
import AppContentSection from '@/components/AppContentSection'
import AppCategoryCard from '@/components/categories/AppCategoryCard'
import AppStreakRegister from '@/components/streaks/AppStreakRegister'
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter'
import AppFeaturedCategory from '@/components/categories/AppFeaturedCategory'

export default {
  head() {
    return {
      title: `${this.$t('pages.home.title')} | ${this.title}`
    }
  },
  components: {
    AppTitle,
    AppReview,
    AppFeature,
    AppShopCard,
    AppContentSection,
    AppCategoryCard,
    AppStreakRegister,
    AppStreakNewsletter,
    AppFeaturedCategory
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: 'Marty McFly',
          comment: "I think it's terrible. Girls chasing boys. When I was your age I never chased a boy, or called a boy, or sat in a parked car with a boy. He's a very strange young man. You can't, uh, that is, uh, nobody's home. Oh, you mean how you're supposed to act on a first date. I'll call you tonight.",
          stars: 3,
          avatar: 'marty.jpg'
        },
        {
          id: 2,
          name: 'Doc Brown',
          comment: "Now which one was it, Greg or Craig? Wrecked? When did this happen and- There, there, now, just relax. You've been asleep for almost nine hours now. So tell me, Marty, how long have you been in port? Okay, okay you guys, oh ha ha ha very funny. Hey you guys are being real mature.",
          stars: 5,
          avatar: 'doc.png'
        },
        {
          id: 3,
          name: 'Biff Tannen',
          comment: "Um, yeah, I'm on my way. Right. Oh, pleased to meet you, Calvin Marty Klein. Do you mind if I sit here? I over slept, look I need your help. I have to ask Lorraine out but I don't know how to do it. I have to ask Lorraine out but I don't know how to do it. Go.",
          stars: 3,
          avatar: 'biff.jpg'
        }
      ],
      shops: [
        {
          id: 1,
          name: 'Petit coin de paradis',
          description:
            'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
          articles: 89,
          avatar: 'https://bulma.io/images/placeholders/1280x960.png',
          accent: '#546E7A'
        },
        {
          id: 2,
          name: 'Ma super boutique',
          description:
            'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
          articles: 3,
          avatar: 'https://bulma.io/images/placeholders/1280x960.png',
          accent: '#7E57C2'
        },
        {
          id: 3,
          name: 'Chez Lucette',
          description:
            'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
          articles: 15,
          avatar: 'https://bulma.io/images/placeholders/1280x960.png',
          accent: '#5C6BC0'
        },
        {
          id: 4,
          name: 'Notre boutique géniale',
          description:
            'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
          articles: 17,
          avatar: 'https://bulma.io/images/placeholders/1280x960.png',
          accent: '#42A5F5'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      categories: 'categories'
    })
  },
  async asyncData({ app }) {
    const featuredCategories = await app.$axios.$get('/categories/featured')

    return {
      featuredCategories: featuredCategories.data,
      title: app.head.title
    }
  }
}
</script>
