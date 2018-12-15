<template>
  <div class="w-full">
    <CartOverviewProduct
      v-for="product in products"
      :key="product.id"
      :product="product"/>
  </div>
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
