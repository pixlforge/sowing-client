<template>
  <div class="w-full sm:w-1/2 px-10 my-20">
    <div class="relative h-full border border-gray-200 rounded-lg flex py-30 px-36">
      <button class="absolute top-0 right-0 w-25 h-25 bg-gray-100 hover:bg-red-100 rounded-full flex justify-center items-center group transition-color transition-fast mt-10 mr-10">
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="text-12 text-gray-300 group-hover:text-red-500 transition-color transition-fast"
        />
      </button>
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
    </div>
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
