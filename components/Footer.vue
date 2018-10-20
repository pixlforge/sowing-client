<template>
  <div>
    <div class="bg-green-lightest">
      <div class="container flex flex-wrap pb-100">

        <!-- Categories -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">Catégories</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link">
                Beauté &amp; bien-être
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Bijoux &amp; accessoires
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Vêtements
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Maison &amp; ameublement
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Jouets &amp; divertissements
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Art &amp; collections
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Papeterie
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Produits locaux
              </a>
            </li>
          </ul>
        </div>

        <!-- Selling -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">Vendre sur Sowing</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link">
                Connexion
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Votre propre boutique
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Nouveaux vendeurs
              </a>
            </li>
          </ul>
        </div>

        <!-- About -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">À propos</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link">
                Conditions d'utilisation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Règlement
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Modes de paiement
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Livraisons
              </a>
            </li>
          </ul>
        </div>

        <!-- Languages -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">Langues</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link">
                Français
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                English
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Deutsch
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link">
                Italiano
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Networks -->
        <div class="w-200 lg:w-1/5 mx-auto mt-50 lg:mt-100">
          <h5 class="title-small">Réseaux sociaux</h5>
          <ul class="list-reset leading-normal">
            <li class="mt-10">
              <a
                href="#"
                class="footer-link flex items-center">
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="text-15 text-green mr-10"/>
                Facebook
              </a>
            </li>
            <li>
              <a
                href="#"
                class="footer-link flex items-center">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  class="text-15 text-green mr-10"/>
                Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <Disclaimer/>
  </div>
</template>

<script>
import Disclaimer from "@/components/Disclaimer";

export default {
  components: {
    Disclaimer
  }
};
</script>

