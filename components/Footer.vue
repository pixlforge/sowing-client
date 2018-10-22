<template>
  <div>
    <div class="bg-green-lightest">
      <div class="container flex flex-wrap pb-100">

        <!-- Categories -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small mb-10">Catégories</h5>
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
          <h5 class="title-small">Vendre sur Sowing</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link">
                Connexion
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Votre propre boutique
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Nouveaux vendeurs
              </a>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">À propos</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link">
                Conditions d'utilisation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Règlement
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Modes de paiement
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Livraisons
              </a>
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small mb-10">{{ $t("lang") }}</h5>
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
          <h5 class="title-small">Réseaux sociaux</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link flex items-center">
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="text-15 text-green mr-10"/>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link flex items-center">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="text-15 text-green mr-10"/>
                Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <Disclaimer/>
  </div>
</template>

<script>
import Disclaimer from "@/components/Disclaimer";
import { mapGetters } from "vuex";

export default {
  components: {
    Disclaimer
  },
  computed: {
    ...mapGetters({
      categories: "categories"
    }),
    locale() {
      return this.$store.state.i18n.locale;
    }
  }
};
</script>

