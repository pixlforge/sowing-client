<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.orders.title')"
      icon="shipping-fast"
    />

    <!-- Page contents -->
    <ContentSection>
      <div
        v-if="orders.length"
        class="mt-96"
      >
        <Order
          v-for="order in orders"
          :key="order.id"
          :order="order"
        />
      </div>
      <div
        v-else
        class="mt-96"
      >
        <p>No orders yet</p>
      </div>
    </ContentSection>

  </main>
</template>

<script>
import Order from '@/components/orders/Order'
import AppHeader from '@/components/headers/AppHeader'
import ContentSection from '@/components/ContentSection'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: this.$t('pages.orders.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ]
    }
  },
  components: {
    Order,
    AppHeader,
    ContentSection
  },
  data() {
    return {
      orders: []
    }
  },
  async asyncData({ app }) {
    const res = await app.$axios.$get('/orders')

    return {
      orders: res.data
    }
  }
}
</script>
