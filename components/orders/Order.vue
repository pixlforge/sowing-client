<template>
  <div class="rounded-lg hover:bg-gray-100 text-16 text-center leading-normal flex px-20 py-48 min-h-160">
    <div class="w-1/5 flex justify-center">
      #{{ order.id }}
    </div>
    <div class="w-1/5 flex justify-center">
      {{ order.created_at }}
    </div>
    <div class="w-1/5 flex justify-center">
      <ul class="text-left">
        <li
          v-for="variation in variations"
          :key="variation.id"
        >
          <nuxt-link
            :to="{
              name: 'products-slug',
              params: {
                slug: variation.product.slug
              }
            }"
            class="text-green-400 no-underline hover:underline"
          >
            {{ variation.product.name[locale] }} {{ variation.type.name[locale] }} {{ variation.name[locale] }}
          </nuxt-link>
        </li>
        <template v-if="moreItems > 0">
          and {{ moreItems }} more...
        </template>
      </ul>
    </div>
    <div class="w-1/5 text-right flex justify-center">
      {{ order.subtotal.currency }} {{ order.subtotal.amount }}
    </div>
    <div class="w-1/5 flex justify-center items-start">
      <component :is="order.status"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import StatusPending from '@/components/orders/statuses/StatusPending'
import StatusCompleted from '@/components/orders/statuses/StatusCompleted'
import StatusProcessing from '@/components/orders/statuses/StatusProcessing'
import StatusPaymentFailed from '@/components/orders/statuses/StatusPaymentFailed'

export default {
  components: {
    pending: StatusPending,
    completed: StatusCompleted,
    processing: StatusProcessing,
    payment_failed: StatusPaymentFailed
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      maxItems: 3,
      statusClasses: {
        'badge-success': this.order.status === 'completed',
        'badge-info': this.order.status === 'processing',
        'badge-warning': this.order.status === 'pending',
        'badge-danger': this.order.status === 'payment_failed'
      }
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    variations() {
      return this.order.variations.slice(0, this.maxItems)
    },
    moreItems() {
      return this.order.variations.length - this.maxItems
    }
  }
}
</script>
