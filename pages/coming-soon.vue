<template>
  <div class="antialiased max-w-full overflow-hidden bg-green-100 text-16 text-gray-900 text-center">

    <main class="grid">

      <h1 class="sr-only">
        Bientôt disponible
      </h1>

      <!-- Header -->
      <header class="pt-60 pb-196">
        <h1 class="sr-only">
          Sowing
        </h1>
        <h5 class="text-14 uppercase text-gray-300 mb-72">
          Bientôt disponible
        </h5>
        <AppLogo class="w-350 mx-auto"/>
      </header>

      <!-- Intro -->
      <section class="intro bg-green-500 py-196">
        <div class="intro-content container text-white px-60">
          <h1 class="font-extrabold">
            <div class="text-24 uppercase tracking-tight">
              Place de marché e-commerce
            </div>
            <div class="text-48 tracking-wide">
              Artisanat &amp; Fait main
            </div>
          </h1>
          <p class="text-20 my-48">
            Place de marché dédiée à l’artisanat et au fait main.<br>
            Créez la boutique qui vous ressemble et vendez vos créations.
          </p>

          <form
            class="max-w-600 shadow-xl flex mx-auto"
            @submit.prevent="subscribe">
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              class="w-2/3 outline-none focus:shadow-outline rounded-l-lg text-20 text-gray-900 text-center p-12"
              placeholder="elon@musk.ch">

            <button
              type="submit"
              class="w-1/3 outline-none focus:shadow-outline bg-pink-600 hover:bg-pink-700 rounded-r-lg text-14 font-black uppercase">
              Tenez-moi informé
            </button>
          </form>
        </div>
      </section>

      <!-- Features -->
      <section class="container flex py-196">
        <IllustrationEcommerce class="w-1/2 pr-36"/>

        <ul class="w-1/2 text-18 text-left pl-36">
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"/>
            <span>Créez votre propre boutique personnalisable</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"/>
            <span>Vendez vos créations originales</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"/>
            <span>Découvrez les superbes créations de nos artisans</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"/>
            <span>Disponible en 4 langues: français, anglais, allemand et italien</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"/>
            <span>Unique en Suisse</span>
          </li>
        </ul>
      </section>

      <!-- Subscribe -->
      <section class="bg-green-500 py-132">
        <div class="container text-white px-20">
          <p class="text-20 mb-48">
            Place de marché dédiée à l’artisanat et au fait main.<br>
            Créez la boutique qui vous ressemble et vendez vos créations.
          </p>

          <form
            class="max-w-600 shadow-xl flex mx-auto"
            @submit.prevent="subscribe">
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              class="w-2/3 outline-none focus:shadow-outline rounded-l-lg text-20 text-gray-900 text-center p-12"
              placeholder="elon@musk.ch">

            <button
              type="submit"
              class="w-1/3 outline-none focus:shadow-outline bg-pink-600 hover:bg-pink-700 rounded-r-lg text-14 font-black uppercase">
              Tenez-moi informé
            </button>
          </form>
        </div>
      </section>

      <footer class="container py-96">
        <h1 class="sr-only">
          Réseaux sociaux
        </h1>

        <p class="text-24">
          Suivez-nous également sur les réseaux sociaux
        </p>

        <ul class="flex justify-center my-96">
          <li class="mx-20">
            <a
              href="#"
              class="group">
              <font-awesome-icon
                :icon="['fab', 'facebook-square']"
                class="block text-60 text-green-500 group-hover:text-blue-600 mx-auto mb-10"/>
              <span>Facebook</span>
            </a>
          </li>
          <li class="mx-20">
            <a
              href="#"
              class="group">
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="block text-60 text-green-500 group-hover:text-pink-600 mx-auto mb-10"/>
              <span>Instagram</span>
            </a>
          </li>
        </ul>

        <div class="text-12">
          <p>
            2019
            <font-awesome-icon
              :icon="['far', 'copyright']"/>
            Tous droits réservés Sowing
          </p>
          <p>
            Réalisé avec
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-red-500"/>
            par
            <a
              href="https://www.pixlforge.ch"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-green-500">
              Pixlforge
            </a>
          </p>
        </div>
      </footer>

    </main>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo';
import IllustrationEcommerce from '@/components/illustrations/IllustrationEcommerce';

export default {
  components: {
    AppLogo,
    IllustrationEcommerce
  },
  layout: 'full-screen',
  data() {
    return {
      email: '',
      errors: {}
    };
  },
  methods: {
    async subscribe() {
      this.errors = {};

      try {
        await this.$axios.$post('/newsletter/subscribe', {
          email: this.email
        });
        this.$toast.success(this.$t('toasts.subscribed'));
        this.email = '';
      } catch (e) {
        this.errors = e.response.data.errors;
        this.$toast.error(this.$t('toasts.validation'));
      }
    }
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: 100vw;
}

.intro {
  width: 120vw;
  margin-left: -10%;
  transform: rotate(-3deg);
}

.intro-content {
  transform: rotate(3deg);
}

input::placeholder {
  color: #B3B3B3;
}
</style>
