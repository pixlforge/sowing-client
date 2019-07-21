<template>
  <main>

    <!-- Header -->
    <AppHeader>
      <template slot="icon">
        <font-awesome-icon :icon="['far', 'question']"/>
      </template>
      <template slot="title">
        <h1 class="header__title">
          {{ $t("pages.faq.title") }}
        </h1>
      </template>
    </AppHeader>

    <!-- Content -->
    <section class="section__container container">
      <div class="faq__section">
        <div class="paragraph__group">
          <h3 class="title__large">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
          </h3>
          <p class="paragraph__medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph__medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>
        </div>
        <div class="paragraph__group">
          <h3 class="title__large">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
          </h3>
          <p class="paragraph__medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph__medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>
        </div>
        <div class="paragraph__group">
          <h3 class="title__large">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
          </h3>
          <p class="paragraph__medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
          </p>
          <p class="paragraph__medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
          </p>
        </div>
      </div>
    </section>

    <!-- Streak newsletter -->
    <section>
      <AppStreakNewsletter/>
    </section>

  </main>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter';

export default {
  head() {
    return {
      title: `${this.$t('pages.faq.title')} | ${this.title}`
    };
  },
  components: {
    AppHeader,
    AppStreakNewsletter
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    };
  }
}
</script>
