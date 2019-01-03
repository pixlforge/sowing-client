<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">{{ $t("shop_creator.steps.customization.title") }}</h2>

        <section class="w-full max-w-1000">
          <p class="paragraph-body text-center mt-60">{{ $t("shop_creator.steps.customization.paragraph") }}</p>
        </section>

        <template v-if="shop.id">
          
          <!-- Profile image -->
          <section class="w-full max-w-1000 mt-100">
            <h5 class="text-24">{{ $t("forms.labels.avatar") }}</h5>
            <dropzone
              id="dropzoneProfile"
              ref="dropzoneProfile"
              :options="optionsForAvatar"
              :destroy-dropzone="true"
              @vdropzone-max-files-exceeded="dzMaxFilesExceeded"
              @vdropzone-success="updateShop"/>
          </section>

          <!-- Cover image -->
          <section class="w-full max-w-1000 mt-100">
            <h5 class="text-24">{{ $t("forms.labels.cover_image") }}</h5>
            <dropzone
              id="dropzoneCover"
              ref="dropzoneCover"
              :options="optionsForCover"
              :destroy-dropzone="true"
              @vdropzone-max-files-exceeded="dzMaxFilesExceeded"
              @vdropzone-success="updateShop"/>
          </section>
        </template>

        <section class="w-full max-w-1000 flex mt-100">
          <div class="w-1/3">
            <h5 class="text-24">{{ $t("forms.labels.theme_selection") }}</h5>
          </div>
          <div class="w-2/3">
            <ul class="list-reset flex justify-between">
              <li
                v-for="theme in availableThemes"
                :key="theme.name">
                <Tile :theme="theme"/>
              </li>
            </ul>
          </div>
        </section>

        <!-- Next -->
        <button
          :style="`background-color: ${shopTheme}`"
          class="btn btn-primary mt-100"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          {{ $t("buttons.finalize_shop_creation") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.css";
import Tile from "@/components/themes/Tile";
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
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
      stepName: "shop/stepName",
      stepDetails: "shop/stepDetails",
      shopExists: "shop/shopExists",
      shop: "shop/shop",
      availableThemes: "shop/availableThemes",
      shopTheme: "shop/shopTheme"
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

    if (!this.shopExists && this.$auth.user.has_shop) {
      this.getShop();
    }

    this.setStepName(true);
    this.setStepDetails(true);
  },
  methods: {
    ...mapActions({
      getShop: "shop/getShop",
      setAvatar: "shop/setAvatar",
      setCover: "shop/setCover",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails"
    }),
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
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(this.localePath({ name: "shop-creator-done" }));
      }
    }
  }
};
</script>

