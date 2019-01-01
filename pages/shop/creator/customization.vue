<template>
  <main>
    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-100">Personnalisez votre boutique</h2>

        <section class="w-full max-w-1000">
          <p class="paragraph-body text-center mt-60">
            Personnalisez votre boutique pour lui donner un identité unique!
          </p>
        </section>

        <!-- Profile image -->
        <template v-if="shop.id">
          <section class="w-full max-w-1000 mt-100">
            <h5 class="text-24">Image de profil</h5>
            <dropzone
              id="dropzoneProfile"
              ref="dropzoneProfile"
              :options="optionsForAvatar"
              :destroy-dropzone="true"
              @vdropzone-max-files-exceeded="dzMaxFilesExceeded"/>
          </section>

          <section class="w-full max-w-1000 mt-100">

            <!-- Cover image -->
            <h5 class="text-24">Image de couverture</h5>
            <dropzone
              id="dropzoneCover"
              ref="dropzoneCover"
              :options="optionsForCover"
              :destroy-dropzone="true"
              @vdropzone-max-files-exceeded="dzMaxFilesExceeded"/>
          </section>
        </template>

        <button
          class="btn btn-primary mt-100"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          Finaliser la création de ma boutique
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import Dropzone from "nuxt-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.css";
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "shop-creator",
  transition: {
    name: "slide",
    mode: "out-in"
  },
  components: {
    Dropzone
  },
  data() {
    return {
      dzOptions: {
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
      shop: "shop/shop"
    }),
    optionsForAvatar() {
      return {
        ...this.dzOptions,
        url: `${process.env.API_URL}/shops/${this.shop.slug}/image`
      };
    },
    optionsForCover() {
      return {
        ...this.dzOptions,
        url: `${process.env.API_URL}/shop/image/upload`
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
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails"
    }),
    dzMaxFilesExceeded(file) {
      this.$refs.dropzoneProfile.removeFile(file);
      this.$toast.error(
        "Vous devez d'abord supprimer ou annuler l'image existante."
      );
    },
    next() {
      if (this.stepName && this.stepDetails) {
        this.$router.push(this.localePath({ name: "shop-creator-done" }));
      }
    }
  }
};
</script>

