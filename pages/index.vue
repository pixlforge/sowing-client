<template>
  <main>

    <!-- Featured Categories -->
    <section class="featured-category__wrapper">
      <AppFeaturedCategoryLarge/>
      <div class="featured-category__wrapper featured-category__wrapper--small">
        <AppFeaturedCategorySmall/>
        <AppFeaturedCategorySmall/>
      </div>
    </section>

    <!-- Features -->
    <section class="section__container container">

      <h1 class="title__main title--center">
        {{ $t("pages.home.titles.features") }}
      </h1>

      <div class="feature__wrapper">
        <AppFeature icon="lightbulb">
          <template slot="title">
            {{ $t("pages.home.features.first.title") }}
          </template>
          {{ $t("pages.home.features.first.body") }}
        </AppFeature>

        <AppFeature icon="eye">
          <template slot="title">
            {{ $t("pages.home.features.second.title") }}
          </template>
          {{ $t("pages.home.features.second.body") }}
        </AppFeature>

        <AppFeature icon="rocket">
          <template slot="title">
            {{ $t("pages.home.features.third.title") }}
          </template>
          {{ $t("pages.home.features.third.body") }}
        </AppFeature>

        <AppFeature icon="shield-check">
          <template slot="title">
            {{ $t("pages.home.features.fourth.title") }}
          </template>
          {{ $t("pages.home.features.fourth.body") }}
        </AppFeature>
      </div>
    </section>

    <!-- Streak register -->
    <section>
      <AppStreakRegister/>
    </section>

    <!-- Shops -->
    <section class="section__container container">
      <h1 class="title__main title--center">
        {{ $t("pages.home.titles.shops") }}
      </h1>

      <div class="shop-card__wrapper">
        <AppShopCard
          v-for="shop in shops"
          :key="shop.id"
          :shop="shop"/>
      </div>
    </section>

    <!-- Categories -->
    <section class="section__container container">
      <h1 class="title__main title--center">
        {{ $t("pages.home.titles.categories") }}
      </h1>

      <div class="category-card__wrapper">
        <AppCategoryCard
          v-for="category in categories"
          :key="category.id"
          :category="category"/>
      </div>
    </section>

    <!-- Reviews -->
    <section class="section__container container">
      <h1 class="title__main title--center">
        {{ $t("pages.home.titles.reviews") }}
      </h1>

      <div class="review__wrapper">
        <AppReview
          :stars="3"
          name="Marty McFly"
          body="I think it's terrible. Girls chasing boys. When I was your age I never chased a boy, or called a boy, or sat in a parked car with a boy. He's a very strange young man. You can't, uh, that is, uh, nobody's home. Oh, you mean how you're supposed to act on a first date. I'll call you tonight.">
          <template slot="avatar">
            <img
              src="~assets/img/reviews/avatars/marty.jpg"
              alt="Avatar Marty McFly"
              class="review__avatar">
          </template>
        </AppReview>

        <AppReview
          :stars="4"
          name="Doc Brown"
          body="Now which one was it, Greg or Craig? Wrecked? When did this happen and- There, there, now, just relax. You've been asleep for almost nine hours now. So tell me, Marty, how long have you been in port? Okay, okay you guys, oh ha ha ha very funny. Hey you guys are being real mature.">
          <template slot="avatar">
            <img
              src="~assets/img/reviews/avatars/doc.png"
              alt="Avatar Doc Brown"
              class="review__avatar">
          </template>
        </AppReview>

        <AppReview
          :stars="4"
          name="Biff Tannen"
          body="Um, yeah, I'm on my way. Right. Oh, pleased to meet you, Calvin Marty Klein. Do you mind if I sit here? I over slept, look I need your help. I have to ask Lorraine out but I don't know how to do it. I have to ask Lorraine out but I don't know how to do it. Go.">
          <template slot="avatar">
            <img
              src="~assets/img/reviews/avatars/biff.jpg"
              alt="Avatar Biff Tannen"
              class="review__avatar">
          </template>
        </AppReview>
      </div>
    </section>

    <!-- Streak newsletter -->
    <section>
      <AppStreakNewsletter/>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import AppReview from '@/components/AppReview';
import AppFeature from '@/components/AppFeature';
import AppShopCard from '@/components/shops/AppShopCard';
import AppStreakRegister from '@/components/streaks/AppStreakRegister';
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter';
import AppCategoryCard from '@/components/categories/AppCategoryCard';
import AppFeaturedCategoryLarge from '@/components/categories/AppFeaturedCategoryLarge';
import AppFeaturedCategorySmall from '@/components/categories/AppFeaturedCategorySmall';

export default {
  head() {
    return {
      title: `${this.$t('pages.home.title')} | ${this.title}`
    };
  },
  components: {
    AppReview,
    AppFeature,
    AppShopCard,
    AppStreakRegister,
    AppStreakNewsletter,
    AppCategoryCard,
    AppFeaturedCategoryLarge,
    AppFeaturedCategorySmall
  },
  data() {
    return {
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
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      categories: 'categories'
    })
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  }
};
</script>
