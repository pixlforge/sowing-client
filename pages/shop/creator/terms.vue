<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.shop.creation')"
      icon="file-contract"/>

    <!-- Page contents -->
    <AppContentSection>

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
          :disabled="!userAgreesToTerms"
          :class="{ 'button__disabled': !userAgreesToTerms }"
          class="button button__primary button--spaced-large"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="button__icon button__icon--small"/>
          {{ $t("buttons.begin_shop_creation") }}
        </button>
      </div>
    </AppContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import AppTerms from '@/components/terms/AppTerms';
import AppHeader from '@/components/headers/AppHeader';
import AppContentSection from '@/components/AppContentSection';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.terms.title')} | ${this.title}`
    };
  },
  components: {
    AppTerms,
    AppHeader,
    AppContentSection
  },
  computed: {
    ...mapGetters({
      terms: 'shop/terms'
    }),
    localTerms: {
      get() {
        return this.terms;
      },
      set(terms) {
        this.setTerms(terms);
      }
    },
    userAgreesToTerms() {
      return this.localTerms;
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    ...mapActions({
      setTerms: 'shop/setTerms'
    }),
    next() {
      if (this.terms) {
        this.$router.push(this.localePath({ name: 'shop-creator-name' }));
      }
    }
  }
};
</script>
