<template>
  <main>
    <div class="container py-100">
      <h1 class="title-large text-center">Products</h1>
      <p class="text-base mt-100">
        {{ products }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  },
  async asyncData({ params, app }) {
    let res = await app.$axios.$get(`/products/${params.slug}`);

    return {
      products: res.data
    };
  }
};
</script>

