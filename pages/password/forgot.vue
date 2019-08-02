<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.password_email.title')"
      icon="redo-alt"
    />

    <!-- Content -->
    <AppContentSection class="max-w-600">
      <AppTitle
        semantic="h1"
        visual="main"
      >
        {{ $t("pages.password_email.paragraphs.first") }}
      </AppTitle>

      <!-- Infos -->
      <AppParagraph center>
        {{ $t("pages.password_email.paragraphs.second") }}}
      </AppParagraph>

      <!-- Form -->
      <form @submit.prevent="send">

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
    </AppContentSection>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppHeader from '@/components/headers/AppHeader'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormInput from '@/components/forms/AppFormInput'
import AppContentSection from '@/components/AppContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  middleware: ['guest'],
  head() {
    return {
      title: `${this.$t('pages.password_email.title')} | ${this.title}`,
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
    AppTitle,
    AppHeader,
    AppFormGroup,
    AppFormLabel,
    AppFormInput,
    AppContentSection,
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
  asyncData({ app }) {
    return {
      title: app.head.title
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
        this.$router.push(this.localePath({ name: 'login' }))
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.errors.email)
      }
    }
  }
}
</script>
