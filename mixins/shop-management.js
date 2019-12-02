import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      shopExists: 'shop/shopExists'
    })
  },
  async asyncData({ app }) {
    const shop = await app.$axios.$get('/user/shop')

    return {
      shopData: shop.data
    }
  },
  mounted() {
    if (!this.shopExists) {
      this.setShop(this.shopData)
    }
  },
  methods: {
    ...mapActions({
      setShop: 'shop/setShop'
    })
  }
}
