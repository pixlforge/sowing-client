<template>
  <div class="w-full">
    <!-- Profile image -->
    <section>
      <div class="flex justify-between items-center">
        <!-- Title -->
        <Heading tag="h1" visual="h3">
          {{ $t('form.avatar.label') }}
        </Heading>

        <!-- Delete avatar -->
        <ButtonPrimary
          size="mini"
          color="pink-dark"
          @click.native="deleteAvatar"
        >
          {{ $t('button.delete') }}
        </ButtonPrimary>
      </div>

      <!-- Avatar dropzone -->
      <dropzone
        id="dropzoneProfile"
        ref="dropzoneProfile"
        :options="optionsForAvatar"
        :destroy-dropzone="true"
        @vdropzone-max-files-exceeded="dzMaxFilesExceeded"
        @vdropzone-success="updateShop"
      />
    </section>

    <!-- Cover image -->
    <section class="my-72">
      <div class="flex justify-between items-center">
        <!-- Title -->
        <Heading tag="h1" visual="h3">
          {{ $t('form.cover_image.label') }}
        </Heading>

        <!-- Delete cover -->
        <ButtonPrimary
          size="mini"
          color="pink-dark"
          @click.native="deleteCover"
        >
          {{ $t('button.delete') }}
        </ButtonPrimary>
      </div>

      <!-- Cover dropzone -->
      <dropzone
        id="dropzoneCover"
        ref="dropzoneCover"
        :options="optionsForCover"
        :destroy-dropzone="true"
        @vdropzone-max-files-exceeded="dzMaxFilesExceeded"
        @vdropzone-success="updateShop"
      />
    </section>

    <!-- Theme selection -->
    <section>
      <!-- Title -->
      <Heading tag="h1" visual="h3">
        {{ $t('form.theme_selection.label') }}
      </Heading>

      <!-- Tiles list -->
      <ul class="w-full flex flex-wrap justify-start -mx-10 mt-30">
        <li
          v-for="(theme, index) in availableThemes"
          :key="index"
          class="mx-10 mt-20 lg:mt-0"
        >
          <Tile :theme="theme" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import 'vue2-dropzone/dist/vue2Dropzone.css'
import Dropzone from 'nuxt-dropzone'
import ButtonPrimary from '@/components/buttons/ButtonPrimary'
import Heading from '@/components/globals/Heading'
import Tile from '@/components/themes/Tile'

export default {
  components: {
    ButtonPrimary,
    Dropzone,
    Heading,
    Tile,
  },
  data() {
    return {
      dzOptions: {
        headers: {
          Authorization: this.$auth.getToken('local'),
        },
        maxFiles: 1,
        maxFilesize: 2,
        addRemoveLinks: true,
        dictRemoveFile: this.$t('dropzone.dict_remove_file'),
        dictCancelUpload: this.$t('dropzone.dict_cancel_upload'),
        dictCancelUploadConfirmation: this.$t(
          'dropzone.dict_cancel_upload_confirmation'
        ),
        dictDefaultMessage: `<span>${this.$t(
          'dropzone.dict_default_message'
        )}</span>`,
        dictFallbackMessage: this.$t('dropzone.dict_fallback_message'),
        dictFileTooBig: this.$t('dropzone.dict_file_too_big'),
      },
    }
  },
  computed: {
    ...mapGetters({
      shop: 'shop/shop',
      availableThemes: 'shop/availableThemes',
    }),
    optionsForAvatar() {
      return {
        ...this.dzOptions,
        url: `${process.env.API_URL}/images/${this.shop.slug}/upload?type=avatar`,
      }
    },
    optionsForCover() {
      return {
        ...this.dzOptions,
        url: `${process.env.API_URL}/images/${this.shop.slug}/upload?type=cover`,
      }
    },
  },
  methods: {
    ...mapActions({
      setCover: 'shop/setCover',
      setAvatar: 'shop/setAvatar',
    }),
    deleteAvatar() {
      console.log('delete avatar')
    },
    deleteCover() {
      console.log('delete cover')
    },
    dzMaxFilesExceeded(file) {
      this.$refs.dropzoneProfile.removeFile(file)
      this.$toast.error(
        "Vous devez d'abord supprimer ou annuler l'image existante."
      )
    },
    updateShop(file, res) {
      if (res.media.type === 'avatar') {
        this.setAvatar(res.media.url)
        this.$toast.success(this.$t('toasts.shop_avatar_updated'))
      }
      if (res.media.type === 'cover') {
        this.setCover(res.media.url)
        this.$toast.success(this.$t('toasts.shop_cover_updated'))
      }
    },
  },
}
</script>
