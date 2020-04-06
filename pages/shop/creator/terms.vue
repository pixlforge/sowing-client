<template>
  <main>

    <!-- Header -->
    <Header
      :title="$t('shop.creation')"
      icon="file-contract"
    />

    <!-- Page contents -->
    <ContentSection>

      <!-- Terms -->
      <Terms/>

      <!-- Controls -->
      <div class="flex flex-col items-center">
        <div class="text-18 text-center leading-normal mb-36 md:mb-72">
          <FormCheckbox
            v-model="localTerms"
            name="terms"
          >
            {{ $t("terms.approve") }}
          </FormCheckbox>
          <small class="block text-gray-300">
            {{ $t("terms.must_approve") }}
          </small>
        </div>

        <!-- Next -->
        <ButtonPrimary
          :disabled="!userAgreesToTerms"
          @click.native="next"
          icon="chevron-circle-right"
        >
          {{ $t("button.begin_shop_creation") }}
        </ButtonPrimary>

      </div>
    </ContentSection>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ContentSection from '@/components/globals/ContentSection'
import FormCheckbox from '@/components/forms/FormCheckbox'
import Header from '@/components/headers/Header'
import Terms from '@/components/terms/Terms'

export default {
  components: {
    ButtonPrimary,
    ContentSection,
    FormCheckbox,
    Header,
    Terms
  },
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('terms.title'),
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
