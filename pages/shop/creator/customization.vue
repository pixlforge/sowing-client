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

        <section class="w-full max-w-1000 flex flex-col lg:flex-row mt-100">
          <div class="w-full lg:w-1/3">
            <h5 class="text-24">{{ $t("forms.labels.theme_selection") }}</h5>
          </div>
          <div class="w-full lg:w-2/3">
            <ul class="list-reset flex flex-wrap justify-start lg:justify-between -mx-10 lg:-mx-0">
              <li
                v-for="(theme, index) in availableThemes"
                :key="index"
                class="mx-10 lg:mx-0 mt-20 lg:mt-0">
                <Tile :theme="theme"/>
              </li>
            </ul>
          </div>
        </section>

        <div class="flex flex-col md:flex-row mt-100">

          <!-- Previous -->
          <button
            class="btn btn-default order-1 md:order-0 md:mr-20 mt-20 md:mt-0"
            @click.prevent="prev">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-left']"
              class="mr-5"/>
            {{ $t("buttons.back") }}
          </button>

          <!-- Next -->
          <button
            :class="btnTheme"
            class="btn order-0 md:order-1"
            @click.prevent="next">
            <font-awesome-icon
              :icon="['far', 'chevron-circle-right']"
              class="mr-5"/>
            {{ $t("buttons.finalize_shop_creation") }}
          </button>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import Tile from "@/components/themes/Tile";
import "vue2-dropzone/dist/vue2Dropzone.css";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t(
        "shop_creator.steps.customization.title"
      )}`
    };
  },
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
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  computed: {
    ...mapGetters({
      shop: "shop/shop",
      stepName: "shop/stepName",
      shopTheme: "shop/shopTheme",
      shopExists: "shop/shopExists",
      stepDetails: "shop/stepDetails",
      availableThemes: "shop/availableThemes"
    }),
    btnTheme() {
      return `btn-${this.shopTheme}`;
    },
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
      setCover: "shop/setCover",
      setAvatar: "shop/setAvatar",
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
    prev() {
      this.$router.push(this.localePath({ name: "shop-creator-details" }));
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(this.localePath({ name: "shop-creator-connect" }));
      }
    }
  }
};
</script>
