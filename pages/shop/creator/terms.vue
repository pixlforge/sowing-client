<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.shop.creation')"
      icon="file-contract"
    />

    <!-- Page contents -->
    <ContentSection>

      <!-- Terms -->
      <Terms/>

      <!-- Controls -->
      <div class="flex flex-col items-center">
        <div class="text-18 text-center leading-normal mb-36 md:mb-72">
          <AppFormCheckbox
            v-model="localTerms"
            name="terms"
          >
            {{ $t("pages.terms.approve") }}
          </AppFormCheckbox>
          <small class="block text-gray-300">
            {{ $t("pages.terms.must_approve") }}
          </small>
        </div>

        <!-- Next -->
        <AppButtonPrimary
          :disabled="!userAgreesToTerms"
          @click.native="next"
          icon="chevron-circle-right"
        >
          {{ $t("buttons.begin_shop_creation") }}
        </AppButtonPrimary>

      </div>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Terms from '@/components/terms/Terms'
import AppHeader from '@/components/headers/AppHeader'
import ContentSection from '@/components/ContentSection'
import AppFormCheckbox from '@/components/forms/AppFormCheckbox'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('pages.terms.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  components: {
    Terms,
    AppHeader,
    ContentSection,
    AppFormCheckbox,
    AppButtonPrimary
  },
  computed: {
    ...mapGetters({
      terms: 'shop/terms'
    }),
    localTerms: {
      get() {
        return this.terms
      },
      set(terms) {
        this.setTerms(terms)
      }
    },
    userAgreesToTerms() {
      return this.localTerms
    }
  },
  methods: {
    ...mapActions({
      setTerms: 'shop/setTerms'
    }),
    next() {
      if (this.terms) {
        this.$router.push({ name: 'shop-creator-name' })
      }
    }
  }
}
</script>
