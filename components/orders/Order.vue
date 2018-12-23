<template>
  <div class="rounded-lg hover:bg-green-lightest text-16 text-center leading-normal flex px-20 py-40 min-h-160">
    <div class="w-1/5 flex justify-center">
      #{{ order.id }}
    </div>
    <div class="w-1/5 flex justify-center">
      {{ order.created_at }}
    </div>
    <div class="w-1/5 flex justify-center">
      <ul class="list-reset text-left">
        <li
          v-for="variation in variations"
          :key="variation.id">
          <nuxt-link
            :to="localePath({ name: 'products-slug', params: { slug: variation.product.slug } })"
            class="text-green no-underline hover:underline">
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
      <span
        :class="statusClasses"
        class="badge">
        {{ order.status }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
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
        "badge-success": this.order.status === "completed",
        "badge-info": this.order.status === "processing",
        "badge-warning": this.order.status === "pending",
        "badge-danger": this.order.status === "payment_failed"
      }
    };
  },
  computed: {
    ...mapGetters({
      locale: "locale"
    }),
    variations() {
      return this.order.variations.slice(0, this.maxItems);
    },
    moreItems() {
      return this.order.variations.length - this.maxItems;
    }
  }
};
</script>
