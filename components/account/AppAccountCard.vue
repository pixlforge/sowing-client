<template>
  <div class="max-w-600 rounded-lg border border-gray-100 shadow flex px-24 py-72">
    <div class="w-1/4">
      <div class="w-100 h-100 bg-gray-200 rounded-full flex justify-center items-center mx-auto">
        <font-awesome-icon
          :icon="['fas', 'user']"
          class="text-36 text-white"
        />
      </div>
    </div>
    <div class="w-3/4 pl-60">

      <div class="relative flex items-center">

        <!-- Status -->
        <div class="flex items-center group cursor-pointer mr-12">
          <font-awesome-icon
            :icon="['fas', userIsVerified ? 'check-circle' : 'exclamation-triangle']"
            :class="{
              'text-blue-500': userIsVerified,
              'text-orange-500': !userIsVerified
            }"
            class="text-24"
          />
          <div class="absolute top-0 w-auto invisible group-hover:visible">
            <div
              :class="{
                'bg-blue-500': userIsVerified,
                'bg-orange-500': !userIsVerified
              }"
              class="opacity-0 group-hover:opacity-100 transition-opacity transition-medium rounded-lg shadow-lg text-12 text-white px-20 py-10 -mt-48"
            >
              <template v-if="userIsVerified">
                {{ $t('components.account_card.verified') }}
              </template>
              <template v-else>
                {{ $t('components.account_card.verification_pending') }}
              </template>
            </div>
          </div>
        </div>

        <!-- Name -->
        <AppTitle
          semantic="h3"
          visual="h3"
        >
          {{ user.name }}
        </AppTitle>
      </div>

      <div class="ml-36">

        <!-- Email -->
        <div class="text-14 text-gray-500 flex items-center my-10">
          <font-awesome-icon
            :icon="['far', 'envelope']"
            class="mr-10"
          />
          {{ user.email }}
        </div>

        <!-- Created -->
        <div class="text-12 text-gray-300 flex items-baseline">
          <font-awesome-icon
            :icon="['far', 'birthday-cake']"
            class="mr-10"
          />
          {{ $t("components.account_card.member_for") }} {{ user.member_for[locale] }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AppTitle from '@/components/AppTitle'

export default {
  components: {
    AppTitle
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    userIsVerified() {
      return this.user.is_verified
    }
  }
}
</script>
