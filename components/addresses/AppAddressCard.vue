<template>
  <div class="max-w-400 sm:max-w-600 rounded-lg shadow-lg border border-gray-200 flex flex-col sm:flex-row mt-36 sm:mt-72 mx-auto lg:mx-0">

    <!-- Icon -->
    <div class="w-full sm:w-1/4 bg-gray-200 flex justify-center items-center py-20 sm:py-0">
      <div class="w-60 sm:w-90 h-60 sm:h-90 bg-white rounded-full flex justify-center items-center">
        <font-awesome-icon
          :icon="['fas', 'mailbox']"
          class="text-24 sm:text-36 text-gray-200"
        />
      </div>
    </div>

    <!-- Content -->
    <ul class="w-full sm:w-3/4 leading-relaxed p-20 sm:p-30">
      <li class="relative text-18 sm:text-24 font-bold flex">
        {{ address.first_name }} {{ address.last_name }}
        <div class="group">
          <font-awesome-icon
            v-if="address.is_default"
            :icon="['fas', 'check-circle']"
            class="text-blue-500 ml-10"
          />

          <div class="absolute top-0 left-0 sm:left-auto w-auto invisible group-hover:visible">
            <div class="opacity-0 group-hover:opacity-100 transition-opacity transition-medium bg-blue-500 rounded-lg shadow-lg text-12 text-white text-center sm:whitespace-no-wrap px-20 py-10 -mt-60 sm:-mt-48">
              {{ $t('pages.account.addresses.is_default') }}
            </div>
          </div>
        </div>
      </li>
      <li class="text-16 sm:text-20 font-semibold text-gray-400">
        {{ address.company_name }}
      </li>
      <li class="text-14 sm:text-16 mt-5 sm:mt-12">
        {{ address.address_line_1 }}
      </li>
      <li class="text-14 sm:text-16">
        {{ address.address_line_2 }}
      </li>
      <li class="text-14 sm:text-16">
        {{ address.country.code }} &ndash; {{ address.postal_code }} {{ address.city }} ({{ address.country.name[locale] }})
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    address: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  }
}
</script>
