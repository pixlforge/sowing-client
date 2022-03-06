<template>
  <main>
    <!-- Header -->
    <Header :title="$t('orders.title')" icon="shipping-fast" />

    <!-- Page contents -->
    <ContentSection>
      <div v-if="orders.length" class="mt-96">
        <Order v-for="order in orders" :key="order.id" :order="order" />
      </div>
      <div v-else class="mt-96">
        <p>No orders yet</p>
      </div>
    </ContentSection>
  </main>
</template>

<script>
import Order from '@/components/orders/Order'
import Header from '@/components/headers/Header'
import ContentSection from '@/components/globals/ContentSection'

export default {
  components: {
    ContentSection,
    Header,
    Order,
  },
  middleware: ['authenticated'],
  async asyncData({ app }) {
    const res = await app.$axios.$get('/orders')

    return {
      orders: res.data,
    }
  },
  data() {
    return {
      orders: [],
    }
  },
  head() {
    return {
      title: this.$t('orders.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
    }
  },
}
</script>
