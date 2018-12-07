<template>
  <table class="table-fixed border-separate border-spacing-h-40 w-full">
    <tbody>
      <CartOverviewProduct
        v-for="product in products"
        :key="product.id"
        :product="product"/>
    </tbody>
  </table>
</template>

<script>
import CartOverviewProduct from "@/components/cart/CartOverviewProduct";
import { mapGetters } from "vuex";

export default {
  components: {
    CartOverviewProduct
  },
  computed: {
    ...mapGetters({
      products: "cart/products"
    })
  }
};
</script>
