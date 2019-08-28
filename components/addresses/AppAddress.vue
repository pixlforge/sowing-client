<template>
  <div class="w-full sm:w-1/2 px-10 my-20">
    <nuxt-link
      :to="localePath({ name: 'account-addresses-id', params: { id: address.id } })"
      class="relative h-full border border-gray-200 rounded-lg shadow-lg transition-shadow transition-medium flex overflow-hidden group py-30 px-36"
    >
      <ul>
        <li class="text-20 font-bold">
          {{ address.first_name }} {{ address.last_name }}
          <font-awesome-icon
            v-if="address.is_default"
            :icon="['fas', 'check-circle']"
            class="text-blue-500 ml-10"
          />
        </li>
        <li class="text-18 font-semibold text-gray-400">
          {{ address.company_name }}
        </li>
        <li class="text-14">
          {{ address.address_line_1 }}
        </li>
        <li class="text-14">
          {{ address.address_line_2 }}
        </li>
        <li class="text-14">
          {{ address.country.code }} &ndash; {{ address.postal_code }} {{ address.city }}
        </li>
      </ul>
      <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity transition-fast flex justify-center items-center">
        <font-awesome-icon
          :icon="['fas', 'eye']"
          class="text-48 text-white"
        />
      </div>
    </nuxt-link>
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
