<template>
  <div>
    <Heading
      tag="h5"
      visual="h5"
    >
      {{ $t("pages.checkout.delivery_address") }}
    </Heading>

    <AppShippingAddressSelector
      v-if="addressSelector"
      :addresses="currentAddresses"
      :selected-address="selectedAddress"
      @address:selected="switchAddress"
    />

    <AppShippingAddressCreator
      v-if="addressCreator"
      @address:created="addAddress"
    />

    <ul
      v-if="selectedAddress && selectedAddress.country && !addressManagersVisible"
      class="text-14 leading-relaxed mt-10"
    >
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
    <AppButtonPrimary
      v-if="addresses.length && !addressManagersVisible"
      icon="repeat-alt"
      class="w-full mt-20"
      @click.native="openAddressSelector"
    >
      {{ $t("pages.checkout.change_address") }}
    </AppButtonPrimary>

    <!-- Add an address -->
    <AppButtonPrimary
      v-if="!addresses.length && !addressManagersVisible"
      icon="plus"
      class="w-full mt-20"
      @click.native="openAddressCreator"
    >
      {{ $t("pages.checkout.add_address") }}
    </AppButtonPrimary>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Heading from '@/components/Heading'
import AppButtonPrimary from '@/components/buttons/AppButtonPrimary'
import AppShippingAddressCreator from '@/components/addresses/AppShippingAddressCreator'
import AppShippingAddressSelector from '@/components/addresses/AppShippingAddressSelector'

export default {
  components: {
    Heading,
    AppButtonPrimary,
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
