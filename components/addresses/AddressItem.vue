<template>
  <ResourceListItem>
    <!-- Controls -->
    <div
      ref="controls"
      :class="{ 'w-full': controlsOpen }"
      class="w-0 h-full absolute z-10 bg-white rounded-lg flex justify-center items-center origin-left transition-all duration-200 ease-out -mx-20"
    >
      <template v-if="controlsOpen">
        <!-- View -->
        <ButtonView
          :route="{
            name: 'account-addresses-id-details',
            params: {
              id: address.id,
            },
          }"
        />

        <!-- Edit -->
        <ButtonEdit
          :route="{
            name: 'account-addresses-id-edit',
            params: {
              id: address.id,
            },
          }"
        />

        <!-- Delete -->
        <ButtonDelete @click.native="confirmDelete" />
      </template>
    </div>

    <!-- Content -->
    <div class="w-full flex items-center text-center">
      <!-- Address icon -->
      <div class="hidden md:block md:w-1/12">
        <font-awesome-icon
          :icon="['fas', 'address-card']"
          class="text-36 lg:text-48 text-gray-300"
        />
      </div>

      <!-- Card type -->
      <div class="w-3/6 md:w-5/12 text-12 md:text-14">
        {{ address.first_name }} {{ address.last_name }}
      </div>

      <!-- Last four -->
      <div class="w-2/6 md:w-4/12">
        {{ address.address_line_1 }}
      </div>

      <!-- Default payment method -->
      <div class="hidden md:block md:w-1/12">
        <div v-if="address.is_default" class="relative group cursor-pointer">
          <font-awesome-icon
            :icon="['fas', 'star']"
            :title="$t('account.payment_methods.is_default')"
            class="text-14 text-orange-400"
          />
          <div
            class="absolute top-0 bg-white rounded-lg shadow-lg invisible group-hover:visible text-12 px-20 py-12 -mx-72 -mt-72"
          >
            {{ $t('account.addresses.is_default') }}
          </div>
        </div>
      </div>

      <!-- Controls button -->
      <div class="w-1/6 md:w-1/12 flex justify-end">
        <ButtonResourceControls @click.native="controlsOpen = !controlsOpen" />
      </div>
    </div>
  </ResourceListItem>
</template>

<script>
import { mapActions } from 'vuex'

import ButtonDelete from '@/components/buttons/ButtonDelete'
import ButtonEdit from '@/components/buttons/ButtonEdit'
import ButtonResourceControls from '@/components/buttons/ButtonResourceControls'
import ButtonView from '@/components/buttons/ButtonView'
import ResourceListItem from '@/components/resources/ResourceListItem'

export default {
  components: {
    ButtonDelete,
    ButtonEdit,
    ButtonResourceControls,
    ButtonView,
    ResourceListItem,
  },
  props: {
    address: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      controlsOpen: false,
    }
  },
  mounted() {
    const escapeHandler = (event) => {
      if (event.key === 'Escape' && this.controlsOpen) {
        this.controlsOpen = false
      }
    }
    document.addEventListener('keydown', escapeHandler)

    const clickHandler = (event) => {
      const element = this.$refs.controls
      const target = event.target
      if (element === target || target.contains(element)) {
        this.controlsOpen = false
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
      openModal: 'confirmation/openModal',
    }),
    confirmDelete() {
      this.openModal(this.address.id)
      this.controlsOpen = false
    },
  },
}
</script>
