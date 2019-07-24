<template>
  <div>
    <ul class="list__address list__address--push-top">
      <li
        v-for="address in addresses"
        :key="address.id"
        :class="{ 'border-green-400': address.id == selectedAddress.id, 'border-green-200': address.id != selectedAddress.id }"
        class="list__item-bordered"
        @click.prevent="selectAddress(address)">
        <ul class="list__address list__address--selector">
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
    <button
      class="button button__primary button--centered button--spaced"
      @click.prevent="openCreator">
      <font-awesome-icon
        :icon="['far', 'plus']"
        class="button__icon button__icon--small"/>
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
