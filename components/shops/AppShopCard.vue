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
        <h5 class="shop-card__name">
          {{ shop.name }}
        </h5>
        <p class="shop-card__description">
          {{ shop.description }}
        </p>
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
export default {
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
