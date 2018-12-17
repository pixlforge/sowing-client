export default {
  components: {
    cart: {
      labels: {
        price: "Prix",
        quantity: "Quantité"
      }
    },
    category: {
      img: {
        alt: "Image de la catégorie"
      },
      link: {
        see_all: "Voir tous les produits"
      }
    },
    footer: {
      titles: {
        categories: 'Catégories',
        language: "Langue",
        sell_on_sowing: "Vendre sur Sowing",
        about: "À propos",
        social_networks: "Réseaux sociaux"
      },
      links: {
        login: "Connexion",
        your_own_store: "Votre propre boutique",
        new_vendors: "Nouveaux vendeurs",
        terms: "Conditions d'utilisation",
        payments: "Modes de paiement",
        shipments: "Livraisons"
      },
      disclaimer: {
        rights: "Tous droits réservés",
        made_with: "Réalisé avec",
        by: "par"
      }
    },
    forms: {
      labels: {
        email: "Email",
        name: "Nom",
        password: "Mot de passe",
        password_confirmation: "Confirmer le mot de passe"
      },
      buttons: {
        connection: "Connexion",
        register: "Créer le compte",
        password_email: "Envoyer un lien pour réinitialiser mon mot de passe",
        password_reset: "Réinitialiser le mot de passe"
      }
    },
    navbar: {
      buttons: {
        login: "Connexion",
        register: "Créer un compte",
      },
      user: {
        logout: "Déconnexion"
      }
    },
    products: {
      img: {
        alt: "Image du produit"
      },
      details: {
        remaining: "articles en stock",
        out_of_stock: "Rupture de stock"
      }
    },
    streaks: {
      register: {
        title: "Vendez dès aujourd'hui",
        body: "Lancez votre boutique personnelle facilement en quelques clics dès maintenant.",
        button: "Créer ma boutique"
      },
      newsletter: {
        title: "Inscrivez-vous à notre newsletter",
        body: "Inscription rapide, facile, garantie sans spam et désabonnez-vous quand vous le voulez.",
        button: "Inscription",
        placeholder: "votre.adresse@email.ch"
      },
    },
    variations: {
      labels: {
        quantity: "Quantité",
        selection: "Sélection",
      },
      buttons: {
        add_to_cart: "Ajouter au panier"
      },
      select: {
        out_of_stock: "Rupture de stock"
      }
    }
  },
  pages: {
    cart: {
      title: "Mon panier"
    },
    checkout: {
      title: "Caisse"
    },
    home: {
      title: "Accueil",
      titles: {
        features: "Tous les avantages Sowing pour vous",
        shops: "Découvrez nos nouvelles boutiques",
        categories: "Découvrez nos produits par catégorie",
        reviews: "Ils ont donné leur avis",
      },
      features: {
        first: {
          title: "Sowing est unique en Suisse",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        second: {
          title: "Une visibilité inédite pour vous",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        third: {
          title: "Sowing est indépendant",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
        fourth: {
          title: "Votre sécurité, notre mission",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam et facere quia aliquid perferendis optio, temporibus quasi error! Ad omnis qui nulla iste aspernatur dolorem dolores ullam tenetur est. Qui."
        },
      }
    },
    login: {
      title: "Connexion à votre compte Sowing",
      links: {
        password: "Mot de passe oublié?",
        register: "Créer un compte Sowing"
      }
    },
    password_email: {
      title: "Récupération de compte",
      paragraphs: {
        first: "Vous avez oublié le mot de passe de votre compte?",
        second: "Pas de problème, entrez simplement votre adresse e-mail dans le champ ci-dessous et nous allons vous envoyer un e-mail contenant un lien vous permettant de définir un nouveau mot de passe pour votre compte."
      }
    },
    password_reset: {
      title: "Réinitialisation de mot de passe"
    },
    register: {
      title: "Enregistrement de votre compte Sowing",
      links: {
        terms: "conditions d'utilisation"
      },
      terms: "J'ai lu et j'accepte les"
    },
    register_success: {
      title: "Compte créé avec succès!"
    }
  },
  toasts: {
    cart: {
      has_changed: "Un ou plusieurs objets de votre panier ont été modifiés, vous devriez les passer en revue avant de commander",
      item_added_singular: "ajouté au panier!",
      item_added_plural: "ajoutés au panier!",
    },
    logged_out: "Vous êtes maintenant déconnecté(e)",
    welcome: "Bienvenue",
  }
}