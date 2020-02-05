/**
 * Components
 */
import accountCard from '~/lang/fr-CH/components/accountCard'
import alerts from '~/lang/fr-CH/components/alerts'
/**
 * Pages
 */
import adviceToCreators from '~/lang/fr-CH/pages/adviceToCreators'

export default {
  /**
   * Components
   */
  ...accountCard,
  ...alerts,
  /**
   * Pages
   */
  ...adviceToCreators,

  /**
   * To Refactor
   */

  /**
   * ARIA
   */
  aria: {
    buttons: {
      languages: 'Langues'
    },
    inputs: {
      email: 'Adresse e-mail'
    },
    links: {
      cart: 'Panier',
      search: 'Recherche'
    }
  },

  /**
   * Buttons
   */
  buttons: {
    add: 'Ajouter',
    add_address: 'Ajouter une adresse',
    add_payment_method: 'Ajouter un moyen de paiement',
    add_product: 'Ajouter un produit',
    add_to_cart: 'Ajouter au panier',
    back: 'Retour',
    begin_shop_creation: 'Commencer la création de ma boutique',
    cancel: 'Annuler',
    check_availability: 'Vérifier la disponibilité',
    connection: 'Connexion',
    connect_with_stripe: 'Connecter ma boutique avec Stripe',
    create: 'Créer',
    create_account: 'Créer le compte',
    create_my_shop: 'Créer ma boutique',
    customize_my_shop: 'Personnaliser ma boutique',
    default: 'Définir par défaut',
    delete: 'Supprimer',
    edit: 'Modifier',
    finalize_shop_creation: 'Finaliser la création de ma boutique',
    finish: 'Terminer',
    login: 'Connexion',
    next: 'Suivant',
    password_email: 'Envoyez-moi un lien',
    password_reset: 'Réinitialiser le mot de passe',
    register: 'Créer un compte',
    see_all_articles: 'Voir tous les articles',
    subscribe: 'Inscription',
    to_my_shop_details: 'Vers les détails de ma boutique',
    update: 'Mettre à jour',
    view: 'Voir'
  },

  /**
   * Cart
   */
  cart: {
    labels: {
      price: 'Prix',
      quantity: 'Quantité'
    }
  },

  /**
   * Categories
   */
  categories: {
    featured_categories: 'Catégories vedettes',
    in: 'dans',
    img: {
      alt: 'Image de la catégorie'
    },
    link: {
      see_all: 'Voir tous les produits'
    }
  },

  /**
   * Coming soon page
   */
  coming_soon: {
    soon: 'Bientôt disponible',
    title: 'Place de marché e-commerce',
    subtitle: 'Artisanat & Fait main',
    subscribe: "Inscrivez votre adresse email afin d'être tenu au courant de l'ouverture officielle de Sowing et si vous souhaitez créer votre boutique avant le lancement de la plateforme.",
    description_first_line: 'Place de marché dédiée à l’artisanat et au fait main.',
    description_second_line: 'Créez la boutique qui vous ressemble et vendez vos créations.',
    button: 'Tenez-moi informé',
    features: {
      first: 'Créez votre propre boutique personnalisable',
      second: 'Vendez vos créations originales',
      third: 'Découvrez les superbes créations de nos artisans',
      fourth: 'Disponible en 4 langues: français, anglais, allemand et italien',
      fifth: 'Unique en Suisse'
    },
    social_networks: 'Réseaux sociaux',
    follow_us: 'Suivez-nous également sur les réseaux sociaux'
  },

  /**
   * Credit Cards
   */
  credit_cards: {
    ending_in: 'Se terminant par',
    card_added_on: 'Carte ajoutée le'
  },

  /**
   * Dropzone
   */
  dropzone: {
    dict_remove_file: 'Supprimer',
    dict_cancel_upload: 'Annuler',
    dict_cancel_upload_confirmation: 'Êtes-vous certain de vouloir annuler le téléchargement?',
    dict_default_message: 'Glissez-déposez une image ici pour la télécharger ou cliquez pour choisir votre image.',
    dict_fallback_message: 'Votre navigateur est trop ancien ou incompatible.',
    dict_file_too_big: 'Ce fichier est trop volumineux.'
  },

  /**
   * Footer
   */
  footer: {
    titles: {
      categories: 'Catégories',
      language: 'Langue',
      sell_on_sowing: 'Vendre sur Sowing',
      about: 'À propos',
      social_networks: 'Réseaux sociaux'
    },
    links: {
      login: 'Connexion',
      your_own_store: 'Votre propre boutique',
      advice_to_creators: 'Conseils aux créateurs',
      new_vendors: 'Nouveaux vendeurs',
      terms: "Conditions d'utilisation",
      payments: 'Modes de paiement',
      shipments: 'Livraisons',
      faq: 'FAQ'
    },
    disclaimer: {
      rights: 'Tous droits réservés',
      made_with: 'Réalisé avec',
      by: 'par'
    }
  },

  /**
   * Forms
   */
  forms: {
    labels: {
      address_line_1: 'Adresse ligne 1',
      address_line_2: 'Adresse ligne 2',
      avatar: 'Avatar',
      category: 'Catégorie',
      city: 'Ville',
      company_name: 'Société',
      country: 'Pays',
      cover_image: 'Image de couverture',
      default_address: 'Cette adresse est mon adresse par défaut',
      description: 'Description',
      description_short: 'Description courte',
      description_long: 'Description détaillée',
      email: 'Adresse e-mail',
      first_name: 'Prénom',
      last_name: 'Nom',
      name: 'Nom',
      password: 'Mot de passe',
      password_confirmation: 'Confirmer le mot de passe',
      postal_code: 'Code postal',
      price: 'Prix',
      theme_selection: 'Sélection du thème'
    },
    select: 'Sélectionner'
  },

  /**
   * Home page
   */
  home: {
    title: 'Accueil',
    titles: {
      features: 'Tous les avantages Sowing pour vous',
      shops: 'Découvrez nos nouvelles boutiques',
      categories: 'Découvrez nos produits par catégorie',
      reviews: 'Ils ont donné leur avis'
    },
    features: {
      first: {
        title: 'Sowing est unique en Suisse',
        body: 'Cette plateforme dédiée au fait main et à l’artisanat est disponible en 4 langues. Chaque créateur peut créer sa propre boutique gratuitement et la personnaliser pour la rendre unique.'
      },
      second: {
        title: 'Une visibilité inédite pour vous',
        body: 'Prendre part à la communauté Sowing c’est mutiplier ses chances d’être visible sur la toile. Aux côtés d’autres créateurs vous bénéficiez d’un tremplin pour faire connaître vos créations partout en Suisse et ailleurs.'
      },
      third: {
        title: 'Sowing est indépendant',
        body: 'Et vous l’êtes aussi! Vous êtes libres de proposer les articles que vous souhaitez, vous pouvez mettre votre boutique en pause, vous vous assurez un complément de revenu selon vos envies en toute liberté.'
      },
      fourth: {
        title: 'Votre sécurité, notre mission',
        body: 'Nous mettons tout en œuvre pour vous assurer la plus grande sécurité concernant vos informations personnelles et vos transactions. Tout est mis en œuvre pour vous garantir un confort maximal.'
      }
    }
  },

  /**
   * Languages
   */
  languages: {
    french: 'français',
    english: 'anglais',
    german: 'allemand',
    italian: 'italien'
  },

  /**
   * Modals
   */
  modals: {
    addresses: {
      delete: {
        title: 'Supprimer une adresse',
        body: 'Êtes-vous certain de vouloir supprimer cette adresse?'
      }
    },
    payment_methods: {
      delete: {
        title: 'Supprimer un moyen de paiement',
        body: 'Êtes-vous certain de vouloir supprimer ce moyen de paiement?'
      }
    }
  },

  /**
   * Navbar
   */
  navbar: {
    user: {
      logout: 'Déconnexion'
    }
  },

  /**
   * Pages
   */
  pages: {
    account: {
      title: 'Mon compte',
      description: 'Configurez votre compte Sowing comme bon vous semble.',
      dashboard: {
        title: 'Tableau de bord'
      },
      profile: {
        title: 'Profil',
        updated: 'Votre profil a été mis à jour avec succès!'
      },
      password: {
        title: 'Mot de passe'
      },
      addresses: {
        titles: {
          index: 'Adresses',
          show: 'Mon adresse',
          create: 'Nouvelle adresse',
          edit: 'Mettre à jour mon adresse'
        },
        is_default: "Il s'agit de votre adresse par défaut.",
        no_address_found: "Vous ne disposez d'aucune adresse pour le moment."
      },
      payment_methods: {
        edit: {
          paragraph: 'Définissez cette carte comme votre nouvelle méthode de paiement par défaut.'
        },
        titles: {
          index: 'Moyens de paiement',
          create: 'Ajouter un moyen de paiement',
          show: 'Ma carte en détails',
          edit: 'Mettre à jour ma carte'
        },
        is_default: "Il s'agit de votre moyen de paiement par défaut.",
        no_payment_method_found: "Vous ne disposez d'aucun moyen de paiement pour le moment."
      }
    },
    cart: {
      title: 'Mon panier',
      checkout: 'Passer à la caisse',
      in_your_cart: 'Votre panier contient',
      products: 'produits',
      for: 'pour',
      cart_is_empty: 'Votre panier est vide',
      add_something: 'Ajoutez-y quelque chose!'
    },
    checkout: {
      add_address: 'Ajouter une adresse',
      change_address: "Changer d'adresse?",
      delivery: 'Livraison',
      delivery_address: 'Adresse de livraison',
      delivery_method: 'Méthode de livraison',
      new_address: 'Nouvelle adresse',
      order: 'Commander',
      payment: 'Paiement',
      subtotal: 'Sous-total',
      title: 'Caisse',
      total: 'Total'
    },
    faq: {
      title: 'Foire Aux Questions'
    },
    login: {
      title: 'Connexion à votre compte Sowing',
      links: {
        password: 'Mot de passe oublié?',
        register: 'Créer un compte Sowing'
      }
    },
    orders: {
      title: 'Mes commandes',
      statuses: {
        completed: 'Terminé',
        pending: 'En attente',
        processing: 'Traitement',
        payment_failed: 'Paiement a échoué'
      }
    },
    password_email: {
      title: 'Récupération de compte',
      paragraphs: {
        first: 'Mot de passe oublié?',
        second: 'Pas de problème, entrez simplement votre adresse e-mail dans le champ ci-dessous et nous allons vous envoyer un e-mail contenant un lien vous permettant de définir un nouveau mot de passe pour votre compte.'
      }
    },
    password_reset: {
      title: 'Réinitialisation de mot de passe'
    },
    register: {
      title: 'Enregistrement de votre compte Sowing',
      links: {
        terms: "conditions d'utilisation"
      },
      terms: "J'ai lu et j'accepte les"
    },
    register_success: {
      title: 'Compte créé avec succès!',
      congratulations: 'Félicitations!',
      account_created: 'Votre compte a été créé avec succès!'
    },
    search: {
      title: 'Recherche',
      description: 'Rechercher des produits et des boutiques',
      placeholder: 'Rechercher des produits et des boutiques',
      results_found: 'trouvé(es)',
      products: 'Produits',
      shops: 'Boutiques',
      no_product_found: 'Aucun produit trouvé',
      no_shop_found: 'Aucune boutique trouvée'
    },
    shop: {
      title: 'Gestion de ma boutique',
      creation: 'Création de ma boutique',
      not_created_yet: "Vous n'avez pas encore créé de boutique",
      creation_cta_line_1: "Créez gratuitement votre propre boutique en ligne dès aujourd'hui!",
      creation_cta_line_2: "Avec l'assistant de création de boutique Sowing, c'est très facile, il suffit de se laisser guider.",
      management: {
        dashboard: {
          title: 'Tableau de bord'
        },
        details: {
          title: 'Détails'
        },
        theme: {
          title: 'Thème'
        }
      },
      visit: 'Visiter la boutique'
    },
    shop_details: {
      welcome: 'Bienvenue dans notre boutique',
      interested: "Les articles de cette boutique m'intéressent!"
    },
    terms: {
      title: "Conditions d'utilisation",
      approve: "J'ai lu et j'accepte les Conditions d'utilisation de Sowing",
      must_approve: 'Vous devez accepter les conditions avant de continuer'
    },
    verify: {
      title: 'Vérification de votre adresse e-mail',
      success: 'Vérification terminée!',
      fail: 'Oops...'
    }
  },

  /**
   * Products
   */
  products: {
    img: {
      alt: 'Image du produit'
    },
    details: {
      remaining: 'articles en stock',
      out_of_stock: 'Rupture de stock'
    },
    management: {
      index: {
        title: 'Produits'
      },
      create: {
        add_category: 'Associer avec une catégorie',
        category_for: 'Catégorie pour',
        name_and_description_for: 'Nom et description pour',
        price_for: 'Prix pour',
        tips: {
          category: 'Associer votre produit à la catégorie correspondante permet aux visiteurs de Sowing de trouver plus facilement votre produit.',
          name_and_description: "Nommez et décrivez en détails les caractéristiques et les points forts de votre produit. Traduire le nom et la description de votre produit n'est pas obligatoire mais augmente les probabilités qu'il soit remarqué.",
          price: 'Vous êtes libre de définir un prix différent pour les variations de votre produit.'
        },
        title: 'Ajouter un produit',
        unnamed: 'Nouveau produit sans nom'
      }
    },
    variations: {
      labels: {
        quantity: 'Quantité',
        selection: 'Sélection'
      },
      select: {
        out_of_stock: 'Rupture de stock'
      }
    }
  },

  /**
   * Shop Creator
   */
  shop_creator: {
    navigation: {
      name: 'Nom',
      details: 'Détails',
      customize: 'Thème',
      connect: 'Marchand',
      done: 'Terminé!'
    },
    steps: {
      name: {
        title: 'Nommez votre boutique',
        paragraph: "Donnez à votre boutique un nom unique, marquant et qui incite les visiteurs à s'intéresser à vos produits. Une identité forte est un bon moyen pour construire une boutique attirante et reconnue.",
        placeholder: 'Le nom de votre boutique'
      },
      details: {
        title: 'Détails de votre boutique',
        paragraph: 'Parlez-nous de votre boutique. Où est-elle située? Que fait-elle? Décrivez la au mieux afin de lui donner une bonne image, en plus de renseigner efficacement vos visiteurs de vos activités et de vos méthodes.',
        description_short_description: 'Description en une phrase de votre boutique. Elle accompagne habituellement le titre de votre boutique partout où celle-ci est affichée.',
        description_long_description: "Description détaillée de votre boutique. Celle-ci n'est affichée que sur la page de profil de votre boutique."
      },
      customization: {
        title: 'Personnalisez votre boutique',
        paragraph: 'Personnalisez votre boutique pour lui donner une identité unique!'
      },
      connect: {
        title: 'Créez ou liez votre compte marchand',
        paragraph: 'Créer ou liez un compte Stripe existant sur lequel virer les recettes de vos ventes.'
      },
      done: {
        title: 'Terminé!',
        paragraph: 'Vous avez maintenant terminé la création de votre boutique. Félicitations!',
        provision_shop: 'Vous pouvrez dès à présent approvisionner votre boutique en y ajoutant des produits.'
      }
    }
  },

  /**
   * Side menu
   */
  side_menu: {
    products: 'Produits',
    shop: 'Boutique'
  },

  /**
   * Streaks
   */
  streaks: {
    register: {
      title: "Vendez dès aujourd'hui",
      body: 'Lancez votre boutique personnelle facilement en quelques clics dès maintenant.'
    },
    newsletter: {
      title: 'Inscrivez-vous à notre newsletter',
      body: 'Inscription rapide, facile, garantie sans spam et désabonnez-vous quand vous le voulez.',
      placeholder: 'votre.adresse@email.ch'
    }
  },

  /**
   * Stripe
   */
  stripe: {
    add_a_card: 'Ajoutez une carte de crédit ou de débit en entrant les informations correspondantes ci-dessous.'
  },

  /**
   * Toasts
   */
  toasts: {
    account_confirmed: 'Merci! Votre compte est maintenant vérifié.',
    addresses: {
      created: 'Nouvelle adresse créée avec succès!',
      selected: 'Adresse sélectionnée.',
      updated: 'Adresse mise à jour!',
      deleted: 'Adresse supprimée avec succès.'
    },
    cart: {
      has_changed: 'Un ou plusieurs objets de votre panier ont été modifiés, vous devriez les passer en revue avant de commander',
      item_added_singular: 'ajouté au panier!',
      item_added_plural: 'ajoutés au panier!',
      product_removed: 'supprimé.'
    },
    cc_added: 'La carte de crédit ou de débit a été ajoutée à votre compte avec succès!',
    general_error: 'Une erreur est survenue. Veuillez recharger la page et réessayer, svp.',
    is_already_in_use: 'est déjà utilisé',
    is_available: 'est disponible',
    logged_out: 'Vous êtes maintenant déconnecté(e)',
    payment_methods: {
      updated: 'Carte définie par défaut avec succès.',
      deleted: 'Carte supprimée avec succès.'
    },
    products: {
      created: 'Votre produit a été ajouté avec succès.'
    },
    shop_avatar_updated: "L'avatar de votre boutique à été mis à jour avec succès!",
    shop_cover_updated: 'La couverture de votre boutique a été mise à jour avec succès!',
    subscribed: 'Merci! Vous êtes maintenant inscrit à notre newsletter!',
    terms: "Vous devez d'abord accepter les conditions d'utilisation avant de continuer.",
    theme_updated: 'Le thème de votre boutique a été mis à jour!',
    validation: 'Le formulaire comporte des erreurs. Veuillez, svp, les corriger et réessayer.',
    welcome: 'Bienvenue'
  }
}
