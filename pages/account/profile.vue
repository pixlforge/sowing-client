<template>
  <div>

    <!-- Page title -->
    <AppTitle
      semantic="h1"
      visual="h1"
    >
      {{ $t("pages.account.profile.title") }}
    </AppTitle>

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
      <AppFormValidation name="name"/>
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
      <AppFormValidation name="email"/>
    </AppFormGroup>

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
    this.form.name = this.user.name
    this.form.email = this.user.email
  },
  methods: {
    update() {
      console.log('update')
    }
  }
}
</script>
