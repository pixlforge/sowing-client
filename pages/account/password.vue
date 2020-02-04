<template>
  <div>

    <!-- Page title -->
    <Heading
      tag="h1"
      visual="h1"
    >
      {{ $t("pages.account.password.title") }}
    </Heading>

    <AppCard>
      <form @submit.prevent="update">

        <!-- Password -->
        <AppFormGroup>
          <AppFormLabel name="password">
            {{ $t("forms.labels.password") }}
          </AppFormLabel>
          <AppFormInput
            v-model="form.password"
            :errors="errors"
            name="password"
            type="password"
          />
          <AppFormValidation
            :errors="errors"
            name="password"
          />
        </AppFormGroup>

        <!-- Password confirmation -->
        <AppFormGroup>
          <AppFormLabel name="password_confirmation">
            {{ $t("forms.labels.password_confirmation") }}
          </AppFormLabel>
          <AppFormInput
            v-model="form.password_confirmation"
            :errors="errors"
            name="password_confirmation"
            type="password"
          />
        </AppFormGroup>

        <!-- Save changes -->
        <AppButtonPrimary
          icon="check"
          type="submit"
        >
          {{ $t("buttons.update") }}
        </AppButtonPrimary>
      </form>
    </AppCard>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppCard from '@/components/AppCard'
import Heading from '@/components/Heading'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppCard,
    Heading,
    AppFormGroup,
    AppFormInput,
    AppFormLabel,
    AppFormValidation,
    AppButtonPrimary
  },
  middleware: ['authenticated'],
  layout: 'account-management',
  head() {
    return {
      title: `${this.$t('pages.account.password.title')} | ${this.$t('pages.account.title')}`,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  data() {
    return {
      form: {
        password: '',
        password_confirmation: ''
      },
      errors: {}
    }
  },
  methods: {
    ...mapActions({
      flash: 'alert/flash'
    }),
    async update() {
      try {
        await this.$axios.$patch('/user/account', { ...this.form })
        this.displaySuccessFeedback()
        this.resetFields()
      } catch (e) {
        this.errors = e.response.data.errors
        this.displayErrorsFeedback()
      }
    },
    displaySuccessFeedback() {
      this.flash({
        type: 'success',
        message: this.$t('alerts.password_updated')
      })
      this.$toast.success(this.$t('alerts.password_updated'))
    },
    displayErrorsFeedback() {
      this.$toast.error(this.$t('toasts.validation'))
    },
    resetFields() {
      this.form = {
        password: '',
        password_confirmation: ''
      }

      this.errors = {}
    }
  }
}
</script>
