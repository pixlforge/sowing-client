<template>
  <div>
    <ul class="text-14 leading-relaxed -mt-10">
      <li
        v-for="address in addresses"
        :key="address.id"
        :class="{
          'border-green-500': address.id == selectedAddress.id,
          'border-transparent': address.id != selectedAddress.id
        }"
        @click.prevent="selectAddress(address)"
        class="text-14 border-l-4 hover:border-green-500 cursor-pointer pl-0 -ml-10"
      >
        <ul class="text-14 leading-relaxed pl-10 mt-20">
          <li>
            {{ address.first_name }} {{ address.last_name }}
          </li>
          <li v-if="address.company_name">
            {{ address.company_name }}
          </li>
          <li>
            {{ address.address_line_1 }}
          </li>
          <li v-if="address.address_line_2">
            {{ address.address_line_2 }}
          </li>
          <li>
            {{ address.country.code }} &ndash; {{ address.postal_code }} {{ address.city }}
          </li>
          <li>
            ({{ address.country.name[locale] }})
          </li>
        </ul>
      </li>
    </ul>

    <!-- Address creator button -->
    <ButtonPrimary
      @click.native="openCreator"
      icon="plus"
      class="w-full mt-20"
    >
      {{ $t("checkout.new_address") }}
    </ButtonPrimary>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonPrimary from '@/components/buttons/ButtonPrimary'

export default {
  components: {
    ButtonPrimary
  },
  props: {
    addresses: {
      type: Array,
      required: true
    },
    selectedAddress: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    })
  },
  methods: {
    ...mapActions({
      closeAddressSelector: 'checkout/closeAddressSelector',
      openAddressCreator: 'checkout/openAddressCreator'
    }),

    openCreator() {
      this.closeAddressSelector()
      this.openAddressCreator()
    },

    selectAddress(address) {
      this.$emit('address:selected', address)
      this.$toast.success(this.$t('toasts.addresses.selected'))
    }
  }
}
</script>
