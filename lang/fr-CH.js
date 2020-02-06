import account from '~/lang/fr-CH/account'
import accountCard from '~/lang/fr-CH/accountCard'
import adviceToCreators from '~/lang/fr-CH/adviceToCreators'
import alerts from '~/lang/fr-CH/alerts'
import aria from '~/lang/fr-CH/aria'
import buttons from '~/lang/fr-CH/buttons'
import cart from '~/lang/fr-CH/cart'
import categories from '~/lang/fr-CH/categories'
import checkout from '~/lang/fr-CH/checkout'
import comingSoon from '~/lang/fr-CH/comingSoon'
import creditCards from '~/lang/fr-CH/creditCards'
import dropzone from '~/lang/fr-CH/dropzone'
import faq from '~/lang/fr-CH/faq'
import footer from '~/lang/fr-CH/footer'
import forms from '~/lang/fr-CH/forms'
import home from '~/lang/fr-CH/home'
import languages from '~/lang/fr-CH/languages'
import login from '~/lang/fr-CH/login'
import modals from '~/lang/fr-CH/modals'
import navbar from '~/lang/fr-CH/navbar'
import streaks from '~/lang/fr-CH/streaks'

export default {
  ...account,
  ...accountCard,
  ...adviceToCreators,
  ...alerts,
  ...aria,
  ...buttons,
  ...cart,
  ...categories,
  ...checkout,
  ...comingSoon,
  ...creditCards,
  ...dropzone,
  ...faq,
  ...footer,
  ...forms,
  ...home,
  ...languages,
  ...login,
  ...modals,
  ...navbar,
  ...streaks,

  /**
   * Pages
   */
  pages: {

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
