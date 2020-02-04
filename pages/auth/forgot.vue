<template>
  <main>

    <!-- Content -->
    <ContentSection class="max-w-600">

      <!-- Page title -->
      <Heading
        tag="h1"
        visual="h1"
        utilities="md:text-center"
      >
        {{ $t("pages.password_email.paragraphs.first") }}
      </Heading>

      <!-- Infos -->
      <AppParagraph center>
        {{ $t("pages.password_email.paragraphs.second") }}
      </AppParagraph>

      <!-- Form -->
      <form
        @submit.prevent="send"
        class="mt-36 sm:mt-72"
      >

        <!-- Email -->
        <AppFormGroup>
          <AppFormLabel name="email">
            {{ $t("forms.labels.email") }}
          </AppFormLabel>
          <AppFormInput
            ref="autofocus"
            v-model="email"
            :errors="errors"
            name="email"
            type="email"
            placeholder="elon@musk.ch"
            required
          />
          <AppFormValidation
            :errors="errors"
            name="email"
          />
        </AppFormGroup>

        <!-- Submit -->
        <AppButtonPrimary
          type="submit"
          icon="redo-alt"
          class="mx-auto my-72"
        >
          {{ $t("buttons.password_email") }}
        </AppButtonPrimary>
      </form>
    </ContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import Heading from '@/components/Heading'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import ContentSection from '@/components/ContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  layout: 'auth',
  middleware: ['guest'],
  head() {
    return {
      title: this.$t('pages.password_email.title'),
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
    Heading,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    ContentSection,
    AppParagraph,
    AppFormValidation,
    AppButtonPrimary
  },
  data() {
    return {
      email: '',
      errors: {}
    }
  },
  mounted() {
    this.$refs.autofocus.$el.focus()
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async send() {
      try {
        const res = await this.$axios.$post('/auth/forgot', { email: this.email })
        this.$toast.success(res.message)
        this.flash({ message: res.message, type: 'success' })
        this.$router.push({ name: 'auth-login' })
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.errors.email)
      }
    }
  }
}
</script>
