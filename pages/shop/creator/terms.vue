<template>
  <main>

    <!-- Header -->
    <Header>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'store']"/>
      </template>
      <template slot="title">
        <h1 class="header-title">{{ $t("pages.shop.creation") }}</h1>
      </template>
    </Header>

    <section class="container section">
      <div class="flex flex-col items-center">
        <h2 class="title-large text-center mt-150">{{ $t("pages.terms.title") }}</h2>

        <section class="max-w-1000">
          
          <h3 class="paragraph-title">Titre des conditions</h3>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>
          <h3 class="paragraph-title">Titre des conditions</h3>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>
          <h3 class="paragraph-title">Titre des conditions</h3>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>
          <h3 class="paragraph-title">Titre des conditions</h3>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>

        </section>

        <div class="text-18 text-center leading-normal mt-80">
          <label
            for="terms"
            class="select-none">
            <input
              id="terms"
              v-model="localTerms"
              type="checkbox"
              name="terms"
              class="mr-10">
            {{ $t("pages.terms.approve") }}
          </label>
          <small class="block text-grey-lighter">
            {{ $t("pages.terms.must_approve") }}
          </small>
        </div>

        <button
          :disabled="!terms"
          :class="{ 'btn-disabled': !terms }"
          class="btn btn-primary mt-80"
          @click.prevent="next">
          <font-awesome-icon
            :icon="['far', 'chevron-circle-right']"
            class="mr-5"/>
          {{ $t("buttons.begin_shop_creation") }}
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";
import { mapGetters, mapActions } from "vuex";

export default {
  middleware: ["authenticated"],
  head() {
    return {
      title: `${this.title} | ${this.$t("pages.terms.title")}`
    };
  },
  components: {
    Header
  },
  computed: {
    ...mapGetters({
      terms: "shop/terms"
    }),
    localTerms: {
      get() {
        return this.terms;
      },
      set(terms) {
        this.setTerms(terms);
      }
    }
  },
  async asyncData({ app }) {
    return {
      title: app.head.title
    };
  },
  methods: {
    ...mapActions({
      setTerms: "shop/setTerms"
    }),
    next() {
      if (this.terms) {
        this.$router.push(this.localePath({ name: "shop-creator-name" }));
      }
    }
  }
};
</script>
