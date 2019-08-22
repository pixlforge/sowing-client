<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      {{ $t("pages.account.profile.title") }}
    </AppTitle>

    <div class="my-72 md:my-96">

      <!-- Name -->
      <AppFormGroup>
        <AppFormLabel name="name">
          {{ $t("forms.labels.name") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.name"
          :errors="errors"
          name="name"
        />
        <AppFormValidation
          :errors="errors"
          name="name"
        />
      </AppFormGroup>

      <!-- Email -->
      <AppFormGroup>
        <AppFormLabel name="email">
          {{ $t("forms.labels.email") }}
        </AppFormLabel>
        <AppFormInput
          v-model="form.email"
          :errors="errors"
          name="email"
          type="email"
        />
        <AppFormValidation
          :errors="errors"
          name="email"
        />
      </AppFormGroup>
    </div>

    <!-- Save changes -->
    <AppButtonPrimary
      icon="check"
      @click.native="update"
    >
      {{ $t("buttons.update") }}
    </AppButtonPrimary>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppFormGroup from '@/components/forms/AppFormGroup'
import AppFormInput from '@/components/forms/AppFormInput'
import AppFormLabel from '@/components/forms/AppFormLabel'
import AppFormValidation from '@/components/forms/AppFormValidation'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'

export default {
  components: {
    AppTitle,
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
      title: `${this.$t('pages.account.profile.title')} | ${this.$t('pages.account.title')} | ${this.title}`,
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
        name: '',
        email: ''
      },
      errors: {}
    }
  },
  async asyncData({ app }) {
    const user = await app.$axios.$get('/user/account')

    return {
      user: user.data,
      title: app.head.title
    }
  },
  mounted() {
    this.hydrateUser()
  },
  methods: {
    ...mapActions({
      setUser: 'setUser'
    }),
    async update() {
      try {
        const res = await this.$axios.$patch('/user/account', {
          id: this.$auth.user.id,
          ...this.form
        })
        this.setUser(res.data)
        this.$toast.success(this.$t('pages.account.profile.updated'))
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
      }
    },
    hydrateUser() {
      this.form.name = this.user.name
      this.form.email = this.user.email
    }
  }
}
</script>
