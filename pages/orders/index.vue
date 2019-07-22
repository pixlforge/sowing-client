<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'shipping-fast']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">
          {{ $t("pages.orders.title") }}
        </h1>
      </template>
    </AppHeader>

    <section class="section__container container">
      <div
        v-if="orders.length"
        class="mt-96">
        <AppOrder
          v-for="order in orders"
          :key="order.id"
          :order="order"/>
      </div>
      <div
        v-else
        class="mt-96">
        <p>No orders yet</p>
      </div>
    </section>
  </main>
</template>

<script>
import AppOrder from '@/components/orders/AppOrder';
import AppHeader from '@/components/headers/AppHeader';

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.orders.title')} | ${this.title}`
    };
  },
  components: {
    AppOrder,
    AppHeader
  },
  data() {
    return {
      orders: []
    };
  },
  async asyncData({ app }) {
    const res = await app.$axios.$get('/orders');
    return {
      orders: res.data,
      title: app.head.title
    };
  }
};
</script>
