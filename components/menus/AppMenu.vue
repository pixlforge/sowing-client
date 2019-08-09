<template>
  <div class="md:relative">
    <button
      ref="dropdownMenu"
      class="outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-extrabold text-center uppercase no-underline whitespace-no-wrap flex px-30 py-12"
      @click.prevent="toggleDropdown"
    >
      {{ username }}
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="text-16 ml-14"
      />
    </button>

    <DropdownTransition>
      <AppDropdownContainer v-if="dropdownIsOpen">

        <!-- Account -->
        <AppDropdownItem
          :to="localePath({ name: 'account' })"
          icon="user"
        >
          {{ $t("pages.account.title") }}
        </AppDropdownItem>

        <!-- Orders -->
        <AppDropdownItem
          :to="localePath({ name: 'orders' })"
          icon="shipping-fast"
        >
          {{ $t("pages.orders.title") }}
        </AppDropdownItem>

        <!-- Shop -->
        <AppDropdownItem
          :to="localePath({ name: 'shop-management-dashboard' })"
          icon="store"
        >
          {{ $t("pages.shop.title") }}
        </AppDropdownItem>

        <template v-if="!userHasShop">
          <AppDropdownDivider/>

          <!-- Shop create -->
          <li class="my-16">
            <AppButtonLinkPrimary
              :to="localePath({ name: 'shop-creator-terms' })"
              icon="store"
              color="pink-dark"
              class="shadow-md"
            >
              {{ $t("buttons.create_my_shop") }}
            </AppButtonLinkPrimary>
          </li>
        </template>

        <AppDropdownDivider/>

        <!-- Logout -->
        <AppDropdownItem
          color="red"
          icon="sign-out"
          @click.native="logout"
        >
          {{ $t("components.navbar.user.logout") }}
        </AppDropdownItem>
      </AppDropdownContainer>
    </DropdownTransition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppDropdownItem from '@/components/dropdowns/AppDropdownItem'
import AppDropdownDivider from '@/components/dropdowns/AppDropdownDivider'
import AppButtonLinkPrimary from '@/components/buttons/AppButtonLinkPrimary'
import DropdownTransition from '@/components/transitions/DropdownTransition'
import AppDropdownContainer from '@/components/dropdowns/AppDropdownContainer'

export default {
  components: {
    AppDropdownItem,
    AppDropdownDivider,
    AppButtonLinkPrimary,
    DropdownTransition,
    AppDropdownContainer
  },
  data() {
    return {
      dropdownIsOpen: false
    }
  },
  computed: {
    ...mapGetters({
      userHasShop: 'userHasShop'
    }),
    username() {
      return this.$auth.user.name
    }
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.dropdownIsOpen) {
        this.dropdownIsOpen = false
      }
    }
    document.addEventListener('keydown', escapeHandler)

    const clickHandler = (event) => {
      const element = this.$refs.dropdownMenu
      const target = event.target
      if (element !== target && !element.contains(target)) {
        this.dropdownIsOpen = false
      }
    }
    document.addEventListener('click', clickHandler)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
      document.removeEventListener('click', clickHandler)
    })
  },
  methods: {
    ...mapActions({
      emptyCart: 'cart/emptyCart'
    }),
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen
    },
    async logout() {
      this.$toast.success(`${this.$t('toasts.logged_out')}`)
      this.$router.push(this.localePath({ name: 'index' }))
      await this.$auth.logout()
      await this.emptyCart()
    }
  }
}
</script>
