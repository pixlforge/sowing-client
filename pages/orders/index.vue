<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.orders.title')"
      icon="shipping-fast"
    />

    <!-- Page contents -->
    <AppContentSection>
      <div
        v-if="orders.length"
        class="mt-96"
      >
        <AppOrder
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
    </AppContentSection>

  </main>
</template>

<script>
import AppOrder from '@/components/orders/AppOrder'
import AppHeader from '@/components/headers/AppHeader'
import AppContentSection from '@/components/AppContentSection'

export default {
  middleware: ['authenticated'],
  head() {
    return {
      title: `${this.$t('pages.orders.title')} | ${this.title}`,
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
    AppOrder,
    AppHeader,
    AppContentSection
  },
  data() {
    return {
      orders: []
    }
  },
  async asyncData({ app }) {
    const res = await app.$axios.$get('/orders')
    return {
      orders: res.data,
      title: app.head.title
    }
  }
}
</script>
