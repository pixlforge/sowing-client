<template>
  <div class="hover:bg-green-lightest text-16 text-center flex p-20">
    <div class="w-1/5">
      #{{ order.id }}
    </div>
    <div class="w-1/5">
      {{ order.created_at }}
    </div>
    <div class="w-1/5">
      <ul class="list-reset">
        <li
          v-for="variation in variations"
          :key="variation.id">
          {{ variation.name[locale] }}
        </li>
        <template v-if="moreItems > 0">
          and {{ moreItems }} more...
        </template>
      </ul>
    </div>
    <div class="w-1/5">
      {{ order.subtotal.currency }} {{ order.subtotal.amount }}
    </div>
    <div class="w-1/5">
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
