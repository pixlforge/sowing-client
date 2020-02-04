<template>
  <div>
    <Heading
      tag="h5"
      visual="h5"
    >
      {{ $t("pages.checkout.delivery_address") }}
    </Heading>

    <ShippingAddressSelector
      v-if="addressSelector"
      :addresses="currentAddresses"
      :selected-address="selectedAddress"
      @address:selected="switchAddress"
    />

    <ShippingAddressCreator
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
    <ButtonPrimary
      v-if="addresses.length && !addressManagersVisible"
      @click.native="openAddressSelector"
      icon="repeat-alt"
      class="w-full mt-20"
    >
      {{ $t("pages.checkout.change_address") }}
    </ButtonPrimary>

    <!-- Add an address -->
    <ButtonPrimary
      v-if="!addresses.length && !addressManagersVisible"
      @click.native="openAddressCreator"
      icon="plus"
      class="w-full mt-20"
    >
      {{ $t("pages.checkout.add_address") }}
    </ButtonPrimary>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Heading from '@/components/globals/Heading'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import ShippingAddressCreator from '@/components/addresses/ShippingAddressCreator'
import ShippingAddressSelector from '@/components/addresses/ShippingAddressSelector'

export default {
  components: {
    Heading,
    ButtonPrimary,
    ShippingAddressCreator,
    ShippingAddressSelector
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
