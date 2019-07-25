<template>
  <div class="review__container">
    <div class="review__meta">
      <div class="review__avatar-container">
        <slot name="avatar"/>
      </div>
      <div class="review__rating">
        <font-awesome-icon
          v-for="(star, index) in stars"
          :key="index"
          :icon="['fas', 'star']"
          class="review__star"/>
      </div>
    </div>
    <div class="review__content">
      <h5 class="review__name">
        {{ name }}
      </h5>
      <p class="review__body">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
}
</script>
