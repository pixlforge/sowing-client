<template>
  <main>
    
    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'shipping-fast']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.orders.title") }}</h1>
      </template>
    </Header>

    <section class="container section">
      
      <div
        v-if="orders.length"
        class="mt-100">
        <Order
          v-for="order in orders"
          :key="order.id"
          :order="order"/>
      </div>

      <div
        v-else
        class="mt-100">
        <p>No orders yet</p>
      </div>

    </section>

  </main>
</template>

<script>
import Header from "@/components/Header";
import Order from "@/components/orders/Order";

export default {
  components: {
    Header,
    Order
  },
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.orders.title")}`
    };
  },
  data() {
    return {
      orders: []
    };
  },
  async asyncData({ app }) {
    let res = await app.$axios.$get("/orders");
    return {
      orders: res.data,
      title: app.head.title
    };
  }
};
</script>
