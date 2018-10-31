<template>
  <main>
    <div class="container">

      <!-- Features section -->
      <section class="section">
        <h1 class="title-large text-center mt-100">{{ $t("pages.home.titles.features") }}</h1>

        <div class="flex flex-wrap justify-between">

          <!-- Feature 1 -->
          <Feature icon="lightbulb">
            <template slot="title">
              {{ $t("pages.home.features.first.title") }}
            </template>
            {{ $t("pages.home.features.first.body") }}
          </Feature>

          <!-- Feature 2 -->
          <Feature icon="eye">
            <template slot="title">
              {{ $t("pages.home.features.second.title") }}
            </template>
            {{ $t("pages.home.features.second.body") }}
          </Feature>

          <!-- Feature 3 -->
          <Feature icon="rocket">
            <template slot="title">
              {{ $t("pages.home.features.third.title") }}
            </template>
            {{ $t("pages.home.features.third.body") }}
          </Feature>

          <!-- Feature 4 -->
          <Feature icon="shield-check">
            <template slot="title">
              {{ $t("pages.home.features.fourth.title") }}
            </template>
            {{ $t("pages.home.features.fourth.body") }}
          </Feature>
          
        </div>
      </section>
    </div>

    <!-- Streak register -->
    <section>
      <StreakRegister/>
    </section>

    <div class="container">

      <!-- Reviews -->
      <section class="section">
        <h1 class="title-large text-center mt-100">{{ $t("pages.home.titles.reviews") }}</h1>
        <div class="w-full xl:w-3/4 xxl:w-1/2 mx-auto mt-100">

          <!-- Review 1 -->
          <Review
            :stars="3"
            name="Marty McFly"
            body="I think it's terrible. Girls chasing boys. When I was your age I never chased a boy, or called a boy, or sat in a parked car with a boy. He's a very strange young man. You can't, uh, that is, uh, nobody's home. Oh, you mean how you're supposed to act on a first date. I'll call you tonight.">
            <template slot="avatar">
              <img
                src="~assets/img/reviews/avatars/marty.jpg"
                alt="Avatar Marty McFly"
                class="avatar-review">
            </template>
          </Review>

          <!-- Review 2 -->
          <Review
            :stars="4"
            name="Doc Brown"
            body="Now which one was it, Greg or Craig? Wrecked? When did this happen and- There, there, now, just relax. You've been asleep for almost nine hours now. So tell me, Marty, how long have you been in port? Okay, okay you guys, oh ha ha ha very funny. Hey you guys are being real mature.">
            <template slot="avatar">
              <img
                src="~assets/img/reviews/avatars/doc.png"
                alt="Avatar Doc Brown"
                class="avatar-review">
            </template>
          </Review>

          <!-- Review 3 -->
          <Review
            :stars="4"
            name="Biff Tannen"
            body="Um, yeah, I'm on my way. Right. Oh, pleased to meet you, Calvin Marty Klein. Do you mind if I sit here? I over slept, look I need your help. I have to ask Lorraine out but I don't know how to do it. I have to ask Lorraine out but I don't know how to do it. Go.">
            <template slot="avatar">
              <img
                src="~assets/img/reviews/avatars/biff.jpg"
                alt="Avatar Biff Tannen"
                class="avatar-review">
            </template>
          </Review>

        </div>
      </section>
    </div>

    <!-- Streak newsletter -->
    <section>
      <StreakNewsletter/>
    </section>
  </main>
</template>

<script>
import Review from "@/components/Review";
import Feature from "@/components/Feature";
import StreakRegister from "@/components/streaks/StreakRegister";
import StreakNewsletter from "@/components/streaks/StreakNewsletter";

export default {
  components: {
    Review,
    Feature,
    StreakRegister,
    StreakNewsletter
  }
};
</script>
