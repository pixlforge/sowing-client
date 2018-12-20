<template>
  <div class="flex flex-col">
    <ul class="list-reset -mt-10">
      <li
        v-for="address in addresses"
        :key="address.id"
        :class="{ 'border-green': address.id == selectedAddress.id, 'border-green-lightest': address.id != selectedAddress.id }"
        class="text-14 border-l-4 hover:border-green cursor-pointer -ml-14"
        @click.prevent="selectAddress(address)">
        <ul class="list-reset pl-10 mt-20">
          <li class="text-14 leading-normal">
            {{ address.first_name }} {{ address.last_name }}
          </li>
          <li
            v-if="address.company_name"
            class="text-14 leading-normal">
            {{ address.company_name }}
          </li>
          <li class="text-14 leading-normal">
            {{ address.address_line_1 }}
          </li>
          <li
            v-if="address.address_line_2"
            class="text-14 leading-normal">
            {{ address.address_line_2 }}
          </li>
          <li class="text-14 leading-normal">
            {{ address.country.code }} &ndash; {{ address.postal_code }} {{ address.city }}
          </li>
          <li class="text-14 leading-normal">
            ({{ address.country.name[locale] }})
          </li>
        </ul>
      </li>
    </ul>
    <button
      class="btn btn-primary mt-40"
      @click.prevent="openCreator">
      {{ $t("pages.checkout.new_address") }}
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
      locale: "locale"
    })
  },
  methods: {
    ...mapActions({
      closeAddressSelector: "checkout/closeAddressSelector",
      openAddressCreator: "checkout/openAddressCreator"
    }),

    openCreator() {
      this.closeAddressSelector();
      this.openAddressCreator();
    },

    selectAddress(address) {
      this.$emit("address:selected", address);
      this.$toast.success(this.$t("toasts.addresses.selected"));
    }
  }
};
</script>

