<template>
  <div>
    <AppTitle
      semantic="h5"
      visual="h5">
      {{ $t("pages.checkout.delivery_address") }}
    </AppTitle>

    <AppShippingAddressSelector
      v-if="addressSelector"
      :addresses="currentAddresses"
      :selected-address="selectedAddress"
      @address:selected="switchAddress"/>

    <AppShippingAddressCreator
      v-if="addressCreator"
      @address:created="addAddress"/>

    <ul
      v-if="selectedAddress && selectedAddress.country && !addressManagersVisible"
      class="list__address">
      <li>
        {{ selectedAddress.first_name }} {{ selectedAddress.last_name }}
      </li>
      <li v-if="selectedAddress.company_name">
        {{ selectedAddress.company_name }}
      </li>
      <li>
        {{ selectedAddress.address_line_1 }}
      </li>
      <li v-if="selectedAddress.address_line_2">
        {{ selectedAddress.address_line_2 }}
      </li>
      <li>
        {{ selectedAddress.country.code }} &ndash; {{ selectedAddress.postal_code }} {{ selectedAddress.city }}
      </li>
      <li>
        ({{ selectedAddress.country.name[locale] }})
      </li>
    </ul>

    <!-- Change address -->
    <a
      v-if="addresses.length && !addressManagersVisible"
      class="link__block"
      @click.prevent="openAddressSelector">
      {{ $t("pages.checkout.change_address") }}
    </a>

    <!-- Add an address -->
    <a
      v-if="!addresses.length && !addressManagersVisible"
      class="link__block"
      @click.prevent="openAddressCreator">
      {{ $t("pages.checkout.add_address") }}
    </a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppTitle from '@/components/AppTitle'
import AppShippingAddressCreator from '@/components/checkout/addresses/AppShippingAddressCreator'
import AppShippingAddressSelector from '@/components/checkout/addresses/AppShippingAddressSelector'

export default {
  components: {
    AppTitle,
    AppShippingAddressCreator,
    AppShippingAddressSelector
  },
  props: {
    addresses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentAddresses: this.addresses,
      selectedAddress: {}
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale',
      addressSelector: 'checkout/addressSelector',
      addressCreator: 'checkout/addressCreator',
      addressManagersVisible: 'checkout/addressManagersVisible'
    }),
    defaultAddress() {
      return this.currentAddresses.find(address => address.is_default)
    }
  },
  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress)
    }
  },
  methods: {
    ...mapActions({
      openAddressSelector: 'checkout/openAddressSelector',
      closeAddressSelector: 'checkout/closeAddressSelector',
      openAddressCreator: 'checkout/openAddressCreator',
      closeAddressCreator: 'checkout/closeAddressCreator'
    }),
    switchAddress(address) {
      this.selectedAddress = address
      this.closeAddressSelector()
      this.$emit('input', this.selectedAddress.id)
    },
    addAddress(address) {
      this.currentAddresses.push(address)
      this.switchAddress(address)
      this.closeAddressCreator()
      this.$toast.success(this.$t('toasts.addresses.created'))
    }
  }
}
</script>
