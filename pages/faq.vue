<template>
  <main>

    <!-- Header -->
    <Header
      :title="$t('faq.title')"
      icon="question"
    />

    <!-- Content -->
    <ContentSection class="max-w-800">
      <ParagraphGroup>
        <Heading
          tag="h2"
          visual="h3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam <strong>voluptatibus</strong> facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <em>Eveniet</em> incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Heading
          tag="h2"
          visual="h3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
        </Paragraph>
      </ParagraphGroup>

      <ParagraphGroup>
        <Heading
          tag="h2"
          visual="h3"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo neque rerum ipsam. Quia debitis aliquid distinctio nihil saepe veniam numquam deleniti culpa tenetur adipisci aut perferendis reprehenderit, eveniet eius facere.
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere perspiciatis suscipit quod doloribus cumque, eum repellendus non consequuntur dolore quae dolorem perferendis explicabo minus, expedita tempore aperiam amet atque? Explicabo nobis id pariatur tempora accusamus totam voluptatibus facere nesciunt cum inventore, quibusdam sapiente! Error nisi earum perferendis et quod itaque tempora consequatur tempore, saepe veritatis laboriosam. Deleniti quibusdam beatae impedit tenetur aspernatur provident soluta itaque nulla inventore? Natus odio deleniti sunt omnis eveniet, porro iste debitis veritatis sint quis unde illum explicabo iusto aperiam corrupti eaque fugit facilis laboriosam nulla eligendi blanditiis? Vero fuga reiciendis officia deserunt obcaecati sapiente?
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt eum, eligendi culpa quod rem consequatur? Minus modi ducimus molestias perspiciatis molestiae commodi, earum maxime exercitationem corrupti, magnam possimus omnis?
        </Paragraph>
      </ParagraphGroup>
    </ContentSection>

    <!-- Streak newsletter -->
    <StreakNewsletter/>

  </main>
</template>

<script>
import Heading from '@/components/globals/Heading'
import Header from '@/components/headers/Header'
import ContentSection from '@/components/globals/ContentSection'
import Paragraph from '@/components/paragraphs/Paragraph'
import ParagraphGroup from '@/components/paragraphs/ParagraphGroup'
import StreakNewsletter from '@/components/streaks/StreakNewsletter'

export default {
  components: {
    Heading,
    Header,
    ContentSection,
    Paragraph,
    ParagraphGroup,
    StreakNewsletter
  },
  head() {
    return {
      title: this.$t('faq.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  },
  asyncData({ app }) {
    return {
      title: app.head.title
    }
  }
}
</script>
