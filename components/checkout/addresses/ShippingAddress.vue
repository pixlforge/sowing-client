<template>
  <div>
    <h5 class="text-20 text-green-darkest">{{ $t("pages.checkout.delivery_address") }}</h5>

    <template v-if="addressSelector">
      <ShippingAddressSelector
        :addresses="currentAddresses"
        :selected-address="selectedAddress"
        @address:selected="switchAddress"/>
    </template>

    <template v-if="addressCreator">
      <ShippingAddressCreator @address:created="addAddress"/>
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
          {{ $t("pages.checkout.change_address") }}
        </a>
      </div>
    </template>

  </div>
</template>

<script>
import ShippingAddressSelector from "@/components/checkout/addresses/ShippingAddressSelector";
import ShippingAddressCreator from "@/components/checkout/addresses/ShippingAddressCreator";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ShippingAddressSelector,
    ShippingAddressCreator
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
      addressSelector: "checkout/addressSelector",
      addressCreator: "checkout/addressCreator",
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
      closeAddressSelector: "checkout/closeAddressSelector",
      closeAddressCreator: "checkout/closeAddressCreator"
    }),

    switchAddress(address) {
      this.selectedAddress = address;
      this.closeAddressSelector();
    },

    addAddress(address) {
      this.currentAddresses.push(address);
      this.switchAddress(address);
      this.closeAddressCreator();
      this.$toast.success(this.$t("toasts.addresses.created"));
    }
  }
};
</script>

