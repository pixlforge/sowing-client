<template>
  <div>
    <div class="bg-green-lightest">
      <div class="container flex flex-wrap pb-100">

        <!-- Categories -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small mb-10">{{ $t('footer.titles.categories') }}</h5>
          <ul class="list-reset leading-normal">
            <li
              v-for="category in categories"
              :key="category.slug"
              class="mx-10 xl:mx-0">
              <nuxt-link
                :to="localePath({ name: 'categories-slug', params: { slug: category.slug } })"
                class="footer-link">
                {{ category.name[locale] }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Selling -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">{{ $t("footer.titles.sell_on_sowing") }}</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="footer-link">
                {{ $t("footer.links.login") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="footer-link">
                {{ $t("footer.links.your_own_store") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="footer-link">
                {{ $t("footer.links.new_vendors") }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">{{ $t("footer.titles.about") }}</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="footer-link">
                {{ $t("footer.links.terms") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="footer-link">
                {{ $t("footer.links.payments") }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="localePath({ name: 'index' })"
                class="footer-link">
                {{ $t("footer.links.shipments") }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small mb-10">{{ $t("footer.titles.language") }}</h5>
          <ul class="list-reset leading-normal">
            <li
              v-for="locale in $i18n.locales"
              :key="locale.code">
              <nuxt-link
                :to="switchLocalePath(locale.code)"
                class="footer-link">
                {{ locale.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Social Networks -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">{{ $t("footer.titles.social_networks") }}</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link flex items-center">
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="text-16 text-green mr-10"/>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link flex items-center">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="text-16 text-green mr-10"/>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      categories: "categories",
      locale: "locale"
    })
  }
};
</script>

