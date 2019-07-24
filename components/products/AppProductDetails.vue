<template>
  <div class="product-details__container">
    <div class="product-details__main">

      <!-- Product featured image -->
      <div class="product-details__featured-image-container">
        <img
          :src="imgUrl"
          :alt="imgAlt"
          class="product-details__featured-image">
      </div>

      <!-- Product content -->
      <div class="product-details__content">

        <!-- Base product name -->
        <AppTitle
          semantic="h1"
          visual="main">
          {{ productName }}
        </AppTitle>

        <!-- Base product description -->
        <p class="product-details__description">
          {{ productDescription }}
        </p>

        <!-- Base product price and currency -->
        <div class="product-details__price-container">
          <span class="product__currency">
            {{ productCurrency }}
          </span>
          <span class="product__price">
            {{ productPrice }}
          </span>
        </div>

        <!-- Total products in stock -->
        <div
          v-if="product.in_stock"
          class="product-details__stock-container">
          <font-awesome-icon
            :icon="['far', 'boxes']"
            class="product-details__icon product-details__icon--green"/>
          <span class="product-details__stock-count">
            {{ product.stock_count }}
          </span>
          <span>
            {{ productsRemaining }}
          </span>
        </div>

        <!-- Product is out of stock -->
        <div
          v-else
          class="produce-details__out-of-stock-container">
          <font-awesome-icon
            :icon="['far', 'boxes']"
            class="product-details__icon"/>
          <span class="product-details__stock-count product-details__stock-count--no-margin">
            {{ productOutOfStock }}
          </span>
        </div>

        <form
          class="product-details__variation-container"
          @submit.prevent="add">

          <!-- Variations -->
          <AppVariation
            v-for="(variations, type) in product.variations"
            :key="type"
            v-model="form.variation"
            :type="type"
            :variations="variations"
            class="mb-20"/>

          <!-- Quantity -->
          <div
            v-if="form.variation"
            class="form__group form__group--tight">
            <label
              for="quantity"
              class="form__label">
              {{ quantityLabel }}
            </label>
            <div class="form__select-group">
              <select
                id="quantity"
                v-model="form.quantity"
                name="quantity"
                class="form__select">
                <option
                  v-for="n in parseInt(form.variation.stock_count)"
                  :key="n"
                  :value="n">
                  {{ n }}
                </option>
              </select>
              <font-awesome-icon
                :icon="['fas', 'caret-down']"
                class="form__select-caret"/>
            </div>

            <!-- Submit -->
            <button
              type="submit"
              class="button button__primary button--centered button--spaced button--aligned-left-lg">
              <font-awesome-icon
                :icon="['far', 'cart-plus']"
                class="button__icon button__icon--small"/>
              {{ $t("buttons.add_to_cart") }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Additional product images -->
    <div class="product-details__additional-images-container">
      <div
        v-for="n in 13"
        :key="n"
        class="product-details__additional-images">
        <img
          :src="imgUrl"
          :alt="imgAlt"
          class="product-details__image">
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import AppTitle from '@/components/AppTitle';
import AppVariation from '@/components/products/AppVariation';

export default {
  components: {
    AppTitle,
    AppVariation
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {
        variation: '',
        quantity: 1
      }
    };
  },
  computed: {
    ...mapGetters({
      locale: 'locale'
    }),
    imgUrl() {
      return require('@/assets/img/placeholders/category.svg');
    },
    imgAlt() {
      return this.$t('components.products.img.alt');
    },
    productName() {
      return this.product.name[this.locale];
    },
    productDescription() {
      return this.product.description[this.locale];
    },
    productCurrency() {
      return this.product.price.currency;
    },
    productPrice() {
      return this.product.price.amount;
    },
    quantityLabel() {
      return this.$t('components.variations.labels.quantity');
    },
    productsRemaining() {
      return this.$t('components.products.details.remaining');
    },
    productOutOfStock() {
      return this.$t('components.products.details.out_of_stock');
    }
  },
  watch: {
    'form.variation'() {
      this.form.quantity = 1;
    }
  },
  methods: {
    ...mapActions({
      store: 'cart/store'
    }),
    async add() {
      await this.store([
        {
          id: this.form.variation.id,
          quantity: this.form.quantity
        }
      ]);

      this.$toast.success(
        `
          ${this.form.quantity}x
          ${this.product.name[this.locale]}
          ${this.form.variation.type.name[this.locale]}
          ${this.form.variation.name[this.locale]}
          ${this.form.quantity > 1 ? this.$t('toasts.cart.item_added_plural') : this.$t('toasts.cart.item_added_singular')}
        `
      );

      this.form = {
        variation: '',
        quantity: 1
      };
    }
  }
};
</script>
