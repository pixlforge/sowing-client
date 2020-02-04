<template>
  <main>

    <!-- Header -->
    <AppHeader
      :title="$t('pages.faq.title')"
      icon="question"
    />

    <!-- Content -->
    <AppContentSection class="max-w-800">
      <AppParagraphGroup>
        <Heading
          tag="h2"
          visual="h3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
        </Heading>
        <AppParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam <strong>voluptatibus</strong> facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
        </AppParagraph>
        <AppParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <em>Eveniet</em> incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
        </AppParagraph>
      </AppParagraphGroup>

      <AppParagraphGroup>
        <Heading
          tag="h2"
          visual="h3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
        </Heading>
        <AppParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
        </AppParagraph>
        <AppParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
        </AppParagraph>
      </AppParagraphGroup>

      <AppParagraphGroup>
        <Heading
          tag="h2"
          visual="h3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
        </Heading>
        <AppParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
        </AppParagraph>
        <AppParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
        </AppParagraph>
      </AppParagraphGroup>
    </AppContentSection>

    <!-- Streak newsletter -->
    <AppStreakNewsletter/>

  </main>
</template>

<script>
import Heading from '@/components/Heading'
import AppHeader from '@/components/headers/AppHeader'
import AppContentSection from '@/components/AppContentSection'
import AppParagraph from '@/components/paragraphs/AppParagraph'
import AppParagraphGroup from '@/components/paragraphs/AppParagraphGroup'
import AppStreakNewsletter from '@/components/streaks/AppStreakNewsletter'

export default {
  head() {
    return {
      title: this.$t('pages.faq.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  components: {
    Heading,
    AppHeader,
    AppContentSection,
    AppParagraph,
    AppParagraphGroup,
    AppStreakNewsletter
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  }
}
</script>
