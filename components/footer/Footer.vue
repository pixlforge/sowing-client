<template>
  <div class="footer__background">
    <div class="footer__container container">

      <!-- Categories -->
      <div class="footer__column">
        <h5 class="title__smaller">
          {{ $t('footer.titles.categories') }}
        </h5>
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
      </div>

      <!-- Selling -->
      <div class="footer__column">
        <h5 class="title__smaller">
          {{ $t("footer.titles.sell_on_sowing") }}
        </h5>
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
      </div>

      <!-- About -->
      <div class="footer__column">
        <h5 class="title__smaller">
          {{ $t("footer.titles.about") }}
        </h5>
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
      </div>

      <!-- Languages -->
      <div class="footer__column">
        <h5 class="title__smaller">
          {{ $t("footer.titles.language") }}
        </h5>
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
      </div>

      <!-- Social Networks -->
      <div class="footer__column">
        <h5 class="title__smaller">
          {{ $t("footer.titles.social_networks") }}
        </h5>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      locale: "locale",
      categories: "categories",
      shopTheme: "shop/shopTheme"
    }),
    textTheme() {
      return `text-${this.shopTheme}`;
    }
  }
};
</script>
