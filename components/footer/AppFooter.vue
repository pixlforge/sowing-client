<template>
  <footer class="footer__background">
    <div class="footer__container container">

      <!-- Categories -->
      <section class="footer__column">
        <AppTitle
          semantic="h5"
          visual="h5">
          {{ $t('footer.titles.categories') }}
        </AppTitle>
        <ul class="footer__list">
          <li
            v-for="category in categories"
            :key="category.slug">
            <nuxt-link
              :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
              class="footer__link">
              {{ category.name[locale] }}
            </nuxt-link>
          </li>
        </ul>
      </section>

      <!-- Selling -->
      <section class="footer__column">
        <AppTitle
          semantic="h5"
          visual="h5">
          {{ $t("footer.titles.sell_on_sowing") }}
        </AppTitle>
        <ul class="footer__list">
          <li>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="footer__link">
              {{ $t("footer.links.login") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="footer__link">
              {{ $t("footer.links.your_own_store") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="footer__link">
              {{ $t("footer.links.new_vendors") }}
            </nuxt-link>
          </li>
        </ul>
      </section>

      <!-- About -->
      <section class="footer__column">
        <AppTitle
          semantic="h5"
          visual="h5">
          {{ $t("footer.titles.about") }}
        </AppTitle>
        <ul class="footer__list">
          <li>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="footer__link">
              {{ $t("footer.links.terms") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="footer__link">
              {{ $t("footer.links.payments") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="localePath({ name: 'index' })"
              class="footer__link">
              {{ $t("footer.links.shipments") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              :to="localePath({ name: 'faq' })"
              class="footer__link">
              {{ $t("footer.links.faq") }}
            </nuxt-link>
          </li>
        </ul>
      </section>

      <!-- Languages -->
      <section class="footer__column">
        <AppTitle
          semantic="h5"
          visual="h5">
          {{ $t("footer.titles.language") }}
        </AppTitle>
        <ul class="footer__list">
          <li
            v-for="locale in $i18n.locales"
            :key="locale.code">
            <nuxt-link
              :to="switchLocalePath(locale.code)"
              class="footer__link">
              {{ locale.name }}
            </nuxt-link>
          </li>
        </ul>
      </section>

      <!-- Social Networks -->
      <section class="footer__column">
        <AppTitle
          semantic="h5"
          visual="h5">
          {{ $t("footer.titles.social_networks") }}
        </AppTitle>
        <ul class="footer__list">
          <li>
            <a
              href="https://www.facebook.com/Sowingch-1065130827008521/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link footer__link--social">
              <div :class="textTheme">
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="footer__social-icon"/>
              </div>
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/sowing.ch/"
              target="_blank"
              rel="noopener noreferrer"
              class="footer__link footer__link--social">
              <div :class="textTheme">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="footer__social-icon"/>
              </div>
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';
import theming from '@/mixins/theming';

import AppTitle from '@/components/AppTitle';

export default {
  components: {
    AppTitle
  },
  mixins: [theming],
  computed: {
    ...mapGetters({
      locale: 'locale',
      categories: 'categories'
    })
  }
};
</script>
