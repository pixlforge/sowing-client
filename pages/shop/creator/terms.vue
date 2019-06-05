<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'store']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">{{ $t("pages.shop.creation") }}</h1>
      </template>
    </Header>

    <!-- Page contents -->
    <section class="section__container container">
      
      <!-- Terms -->
      <AppTerms/>

      <!-- Controls -->
      <div class="terms__controls">
        <div class="terms__checkbox-container">
          <label
            for="terms"
            class="terms__checkbox-label">
            <input
              id="terms"
              v-model="localTerms"
              type="checkbox"
              name="terms"
              class="terms__checkbox-input">
            {{ $t("pages.terms.approve") }}
          </label>
          <small class="terms__checkbox-subtitle">
            {{ $t("pages.terms.must_approve") }}
          </small>
        </div>

        <button
          :disabled="!terms"
          :class="{ 'btn-disabled': !terms }"
          class="button button__primary button--spaced-large"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.begin_shop_creation") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import AppTerms from "@/components/terms/AppTerms";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.$t("pages.terms.title")} | ${this.title}`
    };
  },
  components: {
    Header,
    AppTerms
  },
  computed: {
    ...mapGetters({
      terms: "shop/terms"
    }),
    localTerms: {
      get() {
        return this.terms;
      },
      set(terms) {
        this.setTerms(terms);
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    ...mapActions({
      setTerms: "shop/setTerms"
    }),
    next() {
      if (this.terms) {
        this.$router.push(this.localePath({ name: "shop-creator-name" }));
      }
    }
  }
};
</script>
