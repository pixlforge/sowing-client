<template>
  <div class="shop-creator__section">

    <!-- Profile image -->
    <section class="shop-customization__group shop-customization__group--first">
      <div class="shop-customization__group-header">
        <h5 class="shop-customization__label">
          {{ $t("forms.labels.avatar") }}
        </h5>
        <button
          class="button button__secondary button--small"
          @click="deleteAvatar">
          {{ $t("buttons.delete") }}
        </button>
      </div>
      <dropzone
        id="dropzoneProfile"
        ref="dropzoneProfile"
        :options="optionsForAvatar"
        :destroy-dropzone="true"
        @vdropzone-max-files-exceeded="dzMaxFilesExceeded"
        @vdropzone-success="updateShop"/>
    </section>

    <!-- Cover image -->
    <section class="shop-customization__group">
      <div class="shop-customization__group-header">
        <h5 class="shop-customization__label">
          {{ $t("forms.labels.cover_image") }}
        </h5>
        <button
          class="button button__secondary button--small"
          @click="deleteCover">
          {{ $t("buttons.delete") }}
        </button>
      </div>
      <dropzone
        id="dropzoneCover"
        ref="dropzoneCover"
        :options="optionsForCover"
        :destroy-dropzone="true"
        @vdropzone-max-files-exceeded="dzMaxFilesExceeded"
        @vdropzone-success="updateShop"/>
    </section>

    <section class="shop-customization__group shop-customization__group--last">
      <div class="shop-customization__label-container">
        <h5 class="shop-customization__label">
          {{ $t("forms.labels.theme_selection") }}
        </h5>
      </div>
      <div class="shop-customization__list-container">
        <ul class="shop-customization__list">
          <li
            v-for="(theme, index) in availableThemes"
            :key="index"
            class="shop-customization__list-item">
            <Tile :theme="theme"/>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import Tile from "@/components/themes/Tile";
import "vue2-dropzone/dist/vue2Dropzone.css";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Dropzone,
    Tile
  },
  data() {
    return {
      dzOptions: {
        headers: {
          Authorization: this.$auth.getToken("local")
        },
        maxFiles: 1,
        maxFilesize: 2,
        addRemoveLinks: true,
        dictRemoveFile: this.$t("dropzone.dict_remove_file"),
        dictCancelUpload: this.$t("dropzone.dict_cancel_upload"),
        dictCancelUploadConfirmation: this.$t(
          "dropzone.dict_cancel_upload_confirmation"
        ),
        dictDefaultMessage: `<span>${this.$t(
          "dropzone.dict_default_message"
        )}</span>`,
        dictFallbackMessage: this.$t("dropzone.dict_fallback_message"),
        dictFileTooBig: this.$t("dropzone.dict_file_too_big")
      }
    };
  },
  computed: {
    ...mapGetters({
      shop: "shop/shop",
      availableThemes: "shop/availableThemes"
    }),
    optionsForAvatar() {
      return {
        ...this.dzOptions,
        url: `${process.env.API_URL}/images/${
          this.shop.slug
        }/upload?type=avatar`
      };
    },
    optionsForCover() {
      return {
        ...this.dzOptions,
        url: `${process.env.API_URL}/images/${this.shop.slug}/upload?type=cover`
      };
    }
  },
  mounted() {
    if (this.shop.id) {
      const dropzoneProfile = this.$refs.dropzoneProfile.dropzone;
      const dropzoneCover = this.$refs.dropzoneCover.dropzone;
    }
  },
  methods: {
    ...mapActions({
      setCover: "shop/setCover",
      setAvatar: "shop/setAvatar"
    }),
    deleteAvatar() {
      console.log('delete avatar');
    },
    deleteCover() {
      console.log('delete cover');
    },
    dzMaxFilesExceeded(file) {
      this.$refs.dropzoneProfile.removeFile(file);
      this.$toast.error(
        "Vous devez d'abord supprimer ou annuler l'image existante."
      );
    },
    updateShop(file, res) {
      if (res.media.type === "avatar") {
        this.setAvatar(res.media.url);
        this.$toast.success(this.$t("toasts.shop_avatar_updated"));
      }
      if (res.media.type === "cover") {
        this.setCover(res.media.url);
        this.$toast.success(this.$t("toasts.shop_cover_updated"));
      }
    }
  }
};
</script>
