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
      optionsForAvatar: {},
      optionsForCover: {}
    };
  },
  computed: {
    ...mapGetters({
      stepName: "shop/stepName",
      stepDetails: "shop/stepDetails",
      shopExistsInStore: "shop/shopExistsInStore"
    })
  },
  created() {
    const options = {
      maxFiles: 1,
      maxFilesize: 2,
      addRemoveLinks: true,
      dictRemoveFile: this.$t("components.dropzone.dict_remove_file"),
      dictCancelUpload: this.$t("components.dropzone.dict_cancel_upload"),
      dictCancelUploadConfirmation: this.$t(
        "components.dropzone.dict_cancel_upload_confirmation"
      ),
      dictDefaultMessage: `<span>${this.$t(
        "components.dropzone.dict_default_message"
      )}</span>`,
      dictFallbackMessage: this.$t("components.dropzone.dict_fallback_message"),
      dictFileTooBig: this.$t("components.dropzone.dict_file_too_big")
    };

    this.optionsForAvatar = {
      ...options,
      url: `${process.env.API_URL}/shop/image/upload`
    };

    this.optionsForCover = {
      ...options,
      url: `${process.env.API_URL}/shop/image/upload`
    };
  },
  mounted() {
    const dropzoneProfile = this.$refs.dropzoneProfile.dropzone;
    const dropzoneCover = this.$refs.dropzoneCover.dropzone;

    this.setStepName(true);
    this.setStepDetails(true);

    if (!this.shopExistsInStore) {
      this.hydrateShop();
    }
  },
  methods: {
    ...mapActions({
      setShop: "shop/setShop",
      setStepName: "shop/setStepName",
      setStepDetails: "shop/setStepDetails",
      hydrateShop: "shop/hydrateShop"
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

