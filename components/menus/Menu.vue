<template>
  <div class="md:relative">
    <button
      ref="dropdownMenu"
      class="outline-none focus:shadow-outline rounded-lg border border-gray-200 text-12 text-gray-500 font-extrabold text-center uppercase no-underline whitespace-no-wrap flex px-30 py-12"
      @click.prevent="toggleDropdown"
    >
      {{ username }}
      <font-awesome-icon :icon="['fas', 'caret-down']" class="text-16 ml-14" />
    </button>

    <DropdownTransition>
      <DropdownContainer v-if="dropdownIsOpen">
        <!-- Account -->
        <DropdownItem :to="{ name: 'account-dashboard' }" icon="user">
          {{ $t('account.title') }}
        </DropdownItem>

        <!-- Orders -->
        <DropdownItem :to="{ name: 'orders' }" icon="shipping-fast">
          {{ $t('orders.title') }}
        </DropdownItem>

        <!-- Shop -->
        <DropdownItem :to="{ name: 'shop-management-dashboard' }" icon="store">
          {{ $t('shop.title') }}
        </DropdownItem>

        <template v-if="!userHasShop">
          <DropdownDivider />

          <!-- Shop create -->
          <li class="my-16">
            <ButtonLinkPrimary
              :route="{ name: 'shop-creator-terms' }"
              icon="store"
              color="pink-dark"
              class="shadow-md"
            >
              {{ $t('button.create_my_shop') }}
            </ButtonLinkPrimary>
          </li>
        </template>

        <DropdownDivider />

        <!-- Logout -->
        <DropdownItem color="red" icon="sign-out" @click.native="logout">
          {{ $t('navbar.user.logout') }}
        </DropdownItem>
      </DropdownContainer>
    </DropdownTransition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ButtonLinkPrimary from '@/components/buttons/ButtonLinkPrimary'
import DropdownContainer from '@/components/dropdowns/DropdownContainer'
import DropdownDivider from '@/components/dropdowns/DropdownDivider'
import DropdownItem from '@/components/dropdowns/DropdownItem'
import DropdownTransition from '@/components/transitions/DropdownTransition'

export default {
  components: {
    ButtonLinkPrimary,
    DropdownContainer,
    DropdownDivider,
    DropdownItem,
    DropdownTransition,
  },
  data() {
    return {
      dropdownIsOpen: false,
    }
  },
  computed: {
    ...mapGetters({
      userHasShop: 'userHasShop',
    }),
    username() {
      return this.$auth.user.name
    },
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
      emptyCart: 'cart/emptyCart',
    }),
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen
    },
    async logout() {
      this.$toast.success(`${this.$t('toasts.logged_out')}`)
      this.$router.push({ name: 'index' })
      await this.$auth.logout()
      await this.emptyCart()
    },
  },
}
</script>
