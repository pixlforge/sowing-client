/**
 * Components
 */
import accountCard from '~/lang/fr-CH/components/accountCard'
import alerts from '~/lang/fr-CH/components/alerts'
import aria from '~/lang/fr-CH/components/aria'
import buttons from '~/lang/fr-CH/components/buttons'
import cart from '~/lang/fr-CH/components/cart'
import categories from '~/lang/fr-CH/components/categories'
import creditCards from '~/lang/fr-CH/components/creditCards'
import dropzone from '~/lang/fr-CH/components/dropzone'
import footer from '~/lang/fr-CH/components/footer'
import forms from '~/lang/fr-CH/components/forms'
import languages from '~/lang/fr-CH/components/languages'
/**
 * Pages
 */
import adviceToCreators from '~/lang/fr-CH/pages/adviceToCreators'
import comingSoon from '~/lang/fr-CH/pages/comingSoon'
import home from '~/lang/fr-CH/pages/home'

export default {
  /**
   * Components
   */
  ...accountCard,
  ...alerts,
  ...aria,
  ...buttons,
  ...cart,
  ...categories,
  ...creditCards,
  ...dropzone,
  ...footer,
  ...forms,
  ...languages,
  /**
   * Pages
   */
  ...adviceToCreators,
  ...comingSoon,
  ...home,

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
