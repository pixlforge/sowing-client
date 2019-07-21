<template>
  <div class="cart-product__container">

    <!-- Product featured image -->
    <div class="cart-product__featured-image-container">
      <img
        :src="imgUrl"
        :alt="imgAlt"
        class="cart-product__featured-image">
    </div>

    <!-- Name & description -->
    <div class="cart-product__info-container">
      <h3 class="cart-product__name">
        {{ baseProductName }} &ndash; {{ variationType }} &ndash; {{ variationName }}
      </h3>

      <p class="cart-product__description">
        {{ baseProductDescription }}
      </p>
    </div>

    <!-- Price -->
    <div class="cart-product__price-container">
      <h5 class="cart-product__label">
        {{ labelPrice }}
      </h5>

      <div class="cart-product__price">
        {{ product.total.currency }} {{ product.total.amount }}
      </div>
    </div>

    <!-- Quantity -->
    <div class="cart-product__quantity-container">
      <h5 class="cart-product__label">
        {{ labelQuantity }}
      </h5>

      <div class="form__select-group form__select-group--spaced">
        <select
          id="quantity"
          v-model="quantity"
          name="quantity"
          class="form__select">
          <option
            v-if="product.quantity == 0"
            value="0"
            disabled>
            0
          </option>
          <option
            v-for="n in parseInt(product.stock_count)"
            :key="n"
            :value="n"
            :selected="n == product.quantity">
            {{ n }}
          </option>
        </select>
        <font-awesome-icon
          :icon="['fas', 'caret-down']"
          class="form__select-caret"/>
      </div>
    </div>

    <!-- Remove control -->
    <button
      role="button"
      title="Remove"
      class="cart-product__delete-button"
      @click="remove(product.id)">
      <font-awesome-icon
        :icon="['far', 'times']"
        class="cart-product__delete-button-icon"/>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    quantity: {
      get() {
        return this.product.quantity;
      },
      set(quantity) {
        this.update({ productId: this.product.id, quantity });
      }
    },
    imgUrl() {
      return require('@/assets/img/placeholders/category.svg');
    },
    imgAlt() {
      return this.$t('components.products.img.alt');
    },
    labelPrice() {
      return this.$t('components.cart.labels.price');
    },
    labelQuantity() {
      return this.$t('components.cart.labels.quantity');
    },
    baseProductName() {
      return this.product.product.name[this.locale];
    },
    baseProductDescription() {
      return this.product.product.description[this.locale];
    },
    variationName() {
      return this.product.name[this.locale];
    },
    variationDescription() {
      return this.product.description[this.locale];
    },
    variationType() {
      return this.product.type.name[this.locale];
    }
  },
  methods: {
    ...mapActions({
      destroy: 'cart/destroy',
      update: 'cart/update'
    }),
    remove(productId) {
      this.$toast.success(
        `${this.baseProductName} ${this.variationType} ${
          this.variationName
        } ${this.$t('toasts.cart.product_removed')}`
      );
      this.destroy(productId);
    }
  }
};
</script>
