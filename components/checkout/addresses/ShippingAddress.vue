<template>
  <div>
    <h5 class="text-20 text-green-darkest">Adresse de livraison</h5>

    <template v-if="addressManagersVisible">
      <ShippingAddressSelector
        :addresses="currentAddresses"
        :selected-address="selectedAddress"
        @address:selected="switchAddress"/>
    </template>

    <template v-if="selectedAddress && !addressManagersVisible">
      <ul class="list-reset mt-10">
        <li class="text-14 leading-normal">
          {{ selectedAddress.first_name }} {{ selectedAddress.last_name }}
        </li>
        <li
          v-if="selectedAddress.company_name"
          class="text-14 leading-normal">
          {{ selectedAddress.company_name }}
        </li>
        <li class="text-14 leading-normal">
          {{ selectedAddress.address_line_1 }}
        </li>
        <li
          v-if="selectedAddress.address_line_2"
          class="text-14 leading-normal">
          {{ selectedAddress.address_line_2 }}
        </li>
        <li class="text-14 leading-normal">
          {{ selectedAddress.country.code }} &ndash; {{ selectedAddress.postal_code }} {{ selectedAddress.city }}
        </li>
        <li class="text-14 leading-normal">
          ({{ selectedAddress.country.name[locale] }})
        </li>
      </ul>
    </template>

    <template v-if="!addressManagersVisible">
      <div class="flex justify-between mt-20">
        <a
          class="text-14 no-underline hover:underline text-green font-bold cursor-pointer"
          @click.prevent="openAddressSelector">
          Changer d'adresse?
        </a>
      </div>
    </template>

  </div>
</template>

<script>
import ShippingAddressSelector from "@/components/checkout/addresses/ShippingAddressSelector";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
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
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale",
      addressManagersVisible: "checkout/addressManagersVisible"
    }),
    defaultAddress() {
      return this.currentAddresses.find(address => address.is_default);
    }
  },
  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress);
    }
  },
  methods: {
    ...mapActions({
      openAddressSelector: "checkout/openAddressSelector",
      closeAddressSelector: "checkout/closeAddressSelector"
    }),
    switchAddress(address) {
      this.selectedAddress = address;
      this.closeAddressSelector();
    }
  }
};
</script>

