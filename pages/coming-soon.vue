<template>
  <div class="antialiased max-w-full overflow-hidden bg-green-100 text-16 text-gray-900 text-center">

    <main class="grid">

      <h1 class="sr-only">
        {{ $t("landing.soon") }}
      </h1>

      <!-- Header -->
      <header class="pt-24 pb-72 sm:pb-196">
        <ul class="flex justify-center">
          <li
            v-for="locale in availableLocales"
            :key="locale.code"
            class="block text-12 text-gray-300 cursor-pointer px-10 py-10"
            @click.prevent="setLocale(locale)"
          >
            {{ locale.name }}
          </li>
        </ul>

        <h1 class="sr-only">
          Sowing
        </h1>

        <h5 class="text-14 uppercase text-gray-300 my-36 sm:my-72">
          {{ $t("landing.soon") }}
        </h5>

        <AppLogo class="w-full max-w-200 sm:max-w-400 mx-auto px-20"/>
      </header>

      <!-- Intro -->
      <section class="intro bg-green-500 py-72 md:py-132 lg:py-196">
        <div class="intro-content container max-w-600 sm:max-w-800 text-white px-60">
          <h1 class="font-extrabold">
            <div class="text-18 sm:text-24 uppercase tracking-tight">
              {{ $t("landing.title") }}
            </div>
            <div class="text-24 sm:text-48 tracking-wide">
              {{ $t("landing.subtitle") }}
            </div>
          </h1>
          <p class="text-16 sm:text-20 my-30 sm:my-48">
            {{ $t("landing.description_first_line") }}<br>
            {{ $t("landing.description_second_line") }}
          </p>
          <p class="text-16 sm:text-20 my-30 sm:my-48">
            {{ $t("landing.subscribe") }}
          </p>

          <form
            class="max-w-600 shadow-xl flex mx-auto"
            @submit.prevent="subscribe"
          >
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              class="w-2/3 outline-none focus:shadow-outline rounded-l-lg text-16 sm:text-20 text-gray-900 text-center p-12"
              placeholder="elon@musk.ch"
            >

            <button
              type="submit"
              class="w-1/3 outline-none focus:shadow-outline bg-pink-600 hover:bg-pink-700 rounded-r-lg text-12 sm:text-14 font-extrabold uppercase"
            >
              {{ $t("landing.button") }}
            </button>
          </form>
        </div>
      </section>

      <!-- Features -->
      <section class="container flex flex-col sm:flex-row py-72 md:py-132 lg:py-196 my-72">
        <IllustrationEcommerce class="w-full h-350 sm:w-1/2 sm:pr-20 md:pr-36"/>

        <ul class="w-full sm:w-1/2 text-16 md:text-18 text-left px-16 sm:px-36 sm:px-0 sm:pl-20 md:pl-36">
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"
            />
            <span>{{ $t("landing.features.first") }}</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"
            />
            <span>{{ $t("landing.features.second") }}</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"
            />
            <span>{{ $t("landing.features.third") }}</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"
            />
            <span>{{ $t("landing.features.fourth") }}</span>
          </li>
          <li class="flex items-center my-20">
            <font-awesome-icon
              :icon="['fas', 'arrow-alt-circle-right']"
              class="text-24 text-green-500 mr-20"
            />
            <span>{{ $t("landing.features.fifth") }}</span>
          </li>
        </ul>
      </section>

      <!-- Subscribe -->
      <section class="bg-green-500 py-72 md:py-132">
        <div class="container max-w-800 text-white px-20">
          <p class="text-16 sm:text-20 mb-30 sm:mb-48">
            {{ $t("landing.description_first_line") }}<br>
            {{ $t("landing.description_second_line") }}
          </p>
          <p class="text-16 sm:text-20 my-30 sm:my-48">
            {{ $t("landing.subscribe") }}
          </p>

          <form
            class="max-w-600 shadow-xl flex mx-auto"
            @submit.prevent="subscribe"
          >
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              class="w-2/3 outline-none focus:shadow-outline rounded-l-lg text-16 sm:text-20 text-gray-900 text-center p-12"
              placeholder="elon@musk.ch"
            >

            <button
              type="submit"
              class="w-1/3 outline-none focus:shadow-outline bg-pink-600 hover:bg-pink-700 rounded-r-lg text-12 sm:text-14 font-extrabold uppercase"
            >
              {{ $t("landing.button") }}
            </button>
          </form>
        </div>
      </section>

      <footer class="container py-96">
        <h1 class="sr-only">
          {{ $t("landing.social_networks") }}
        </h1>

        <p class="text-16 sm:text-24">
          {{ $t("landing.follow_us") }}
        </p>

        <ul class="flex justify-center my-60 md:my-96">
          <li class="mx-20">
            <a
              href="https://www.facebook.com/sowing.ch"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook-square']"
                class="block text-60 text-green-500 group-hover:text-blue-600 mx-auto mb-10"
              />
              <span>Facebook</span>
            </a>
          </li>
          <li class="mx-20">
            <a
              href="https://www.instagram.com/sowing.ch/"
              target="_blank"
              rel="noopener noreferrer"
              class="group"
            >
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="block text-60 text-green-500 group-hover:text-pink-600 mx-auto mb-10"
              />
              <span>Instagram</span>
            </a>
          </li>
        </ul>

        <div class="text-12">
          <p>
            2019
            <font-awesome-icon
              :icon="['far', 'copyright']"
            />
            Sowing
            {{ $t("footer.disclaimer.rights") }}
          </p>
          <p>
            {{ $t("footer.disclaimer.made_with") }}
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-red-500"
            />
            {{ $t("footer.disclaimer.by") }}
            <a
              href="https://www.pixlforge.ch"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-green-500"
            >
              Pixlforge
            </a>
          </p>
        </div>
      </footer>

    </main>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import IllustrationEcommerce from '@/components/illustrations/IllustrationEcommerce'

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
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    }
  },
  methods: {
    setLocale(locale) {
      this.$i18n.setLocale(locale.code)
    },
    async subscribe() {
      this.errors = {}

      try {
        await this.$axios.$post('/newsletter/subscribe', {
          email: this.email
        })
        this.$toast.success(this.$t('toasts.subscribed'))
        this.email = ''
      } catch (e) {
        this.errors = e.response.data.errors
        this.$toast.error(this.$t('toasts.validation'))
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
