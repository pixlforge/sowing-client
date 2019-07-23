<template>
  <div class="shop-card__container">
    <div class="shop-card__body">

      <!-- Left side -->
      <div
        :style="style"
        class="shop-card__left-side">

        <!-- Avatar -->
        <img
          :src="shop.avatar"
          class="shop-card__avatar"
          alt="Shop avatar">
      </div>

      <!-- Right side -->
      <div class="shop-card__right-side">

        <!-- Title -->
        <AppTitle
          semantic="h5"
          visual="h4">
          {{ shop.name }}
        </AppTitle>

        <!-- Description -->
        <p class="shop-card__description">
          {{ shop.description }}
        </p>

        <!-- Meta -->
        <div class="shop-card__meta">
          <font-awesome-icon
            :icon="['far', 'box-full']"
            class="shop-card__icon"/>
          <span class="shop-card__products">
            {{ shop.articles }} articles
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle';

export default {
  components: {
    AppTitle
  },
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  computed: {
    style() {
      return `background-color: ${this.shop.accent}`;
    }
  }
};
</script>
