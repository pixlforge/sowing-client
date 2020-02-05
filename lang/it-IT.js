/**
 * Components
 */
import accountCard from '~/lang/it-IT/components/accountCard'
import alerts from '~/lang/it-IT/components/alerts'
import aria from '~/lang/it-IT/components/aria'
import buttons from '~/lang/it-IT/components/buttons'
import cart from '~/lang/it-IT/components/cart'
import categories from '~/lang/it-IT/components/categories'
import creditCards from '~/lang/it-IT/components/creditCards'
import dropzone from '~/lang/it-IT/components/dropzone'
import footer from '~/lang/it-IT/components/footer'
import forms from '~/lang/it-IT/components/forms'
import languages from '~/lang/it-IT/components/languages'
import modals from '~/lang/it-IT/components/modals'
import navbar from '~/lang/it-IT/components/navbar'
import streaks from '~/lang/it-IT/components/streaks'
/**
 * Pages
 */
import account from '~/lang/it-IT/pages/account'
import adviceToCreators from '~/lang/it-IT/pages/adviceToCreators'
import comingSoon from '~/lang/it-IT/pages/comingSoon'
import home from '~/lang/it-IT/pages/home'

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
  ...modals,
  ...navbar,
  ...streaks,
  /**
   * Pages
   */
  ...account,
  ...adviceToCreators,
  ...comingSoon,
  ...home,

  /**
   * Pages
   */
  pages: {

    cart: {
      title: 'Il mio carrello',
      checkout: 'Procedere al checkout',
      in_your_cart: 'Il vostro carrello contiene',
      products: 'prodotti',
      for: 'per',
      cart_is_empty: 'il vostro carrello è vuoto',
      add_something: 'Aggiungi qualcosa ad esso!'
    },
    checkout: {
      add_address: 'Aggiungi un indirizzo',
      change_address: 'Cambia indirizzo?',
      delivery: 'Consegna',
      delivery_address: 'Indirizzo di consegna',
      delivery_method: 'Metodo di consegna',
      new_address: 'Nuovo indirizzo',
      order: 'Ordinare',
      payment: 'Pagamento',
      subtotal: 'Totale parziale',
      title: 'Checkout',
      total: 'Totale'
    },
    faq: {
      title: 'Domande frequenti'
    },
    login: {
      title: 'Accedite al vostro Sowing account',
      links: {
        password: 'Password dimenticata?',
        register: 'Crea un Sowing account'
      }
    },
    orders: {
      title: 'I miei ordini',
      statuses: {
        completed: 'Completato',
        pending: 'In sospeso',
        processing: 'Trattamento',
        payment_failed: 'Pagamento fallito'
      }
    },
    password_email: {
      title: "Recupero dell'account",
      paragraphs: {
        first: 'Hai dimenticato la password?',
        second: 'Nessun problema, inserite semplicemente il vostro indirizzo e-mail nel campo sottostante e vi invieremo una e-mail contenente un link che vi permetterà di impostare una nuova password per il vostro account.'
      }
    },
    password_reset: {
      title: 'Reimpostare la password'
    },
    register: {
      title: 'Registrazione del vostro account Sowing',
      links: {
        terms: "condizioni d'uso"
      },
      terms: 'Ho letto e accetto le'
    },
    register_success: {
      title: 'Account creato con successo!',
      congratulations: 'Congratulazioni!',
      account_created: 'Il vostro account è stato creato con successo!'
    },
    search: {
      title: 'Ricerca',
      description: 'Cercate prodotti e negozi',
      placeholder: 'Cercate prodotti e negozi',
      results_found: 'trovati',
      products: 'Prodotti',
      shops: 'Negozi',
      no_product_found: 'Nessun prodotto trovato',
      no_shop_found: 'Nessun negozio trovato'
    },
    shop: {
      title: 'Gestione del vostro negozio',
      creation: 'Creazione del mio negozio',
      not_created_yet: 'Non avete ancora creato un negozio',
      creation_cta_line_1: 'Create oggi il vostro negozio online gratuitamente!',
      creation_cta_line_2: "Con l'assistente alla creazione di negozio Sowing, è molto semplice, basta lasciarsi guidare.",
      management: {
        dashboard: {
          title: 'Cruscotto'
        },
        details: {
          title: 'Dettagli'
        },
        theme: {
          title: 'Tema'
        }
      },
      visit: 'Sfoglia negozio'
    },
    shop_details: {
      welcome: 'Benvenuto nel nostro negozio',
      interested: 'Gli articoli di questo negozio mi interessano!'
    },
    terms: {
      title: "Condizioni d'uso",
      approve: 'Ho letto e accetto i termini di utilizzo di Sowing',
      must_approve: 'Devi accettare i termini prima di procedere'
    },
    verify: {
      title: "Verifica dell'indirizzo email",
      success: 'Verifica completata!',
      fail: 'Oops...'
    }
  },

  /**
   * Products
   */
  products: {
    img: {
      alt: 'Immagine del prodotto'
    },
    details: {
      remaining: 'prodotti in magazzino',
      out_of_stock: 'Esaurito'
    },
    management: {
      index: {
        title: 'Prodotti'
      },
      create: {
        add_category: 'Associare a una categoria',
        category_for: 'Categoria per',
        name_and_description_for: 'Nome e descrizione per',
        price_for: 'Prezzo per',
        tips: {
          category: 'Il collegamento del prodotto alla categoria corrispondente semplifica la ricerca del prodotto da parte dei visitatori di Sowing.',
          name_and_description: 'Nominate e descrivete in dettaglio le caratteristiche e i punti di forza del tuo prodotto. La traduzione del nome e della descrizione del vostro prodotto non è obbligatoria, ma aumenta la probabilità che venga notato.',
          price: 'Siete libero di impostare un prezzo diverso per le variazioni del vostro prodotto.'
        },
        title: 'Aggiungete un prodotto',
        unnamed: 'Nuovo prodotto senza nome'
      }
    },
    variations: {
      labels: {
        quantity: 'Quantità',
        selection: 'Selezione'
      },
      select: {
        out_of_stock: 'Esaurito'
      }
    }
  },

  /**
   * Shop Creator
   */
  shop_creator: {
    navigation: {
      name: 'Nome',
      details: 'Dettagli',
      customize: 'Tema',
      connect: 'Mercante',
      done: 'Fatto!'
    },
    steps: {
      name: {
        title: 'Date un nome al vostro negozio',
        paragraph: 'Date al vostro negozio un nome unico che dà il tono e incoraggia i visitatori ad interessarsi ai vostri prodotti. Una forte identità è un buon modo per costruire un negozio attraente e riconosciuto.',
        placeholder: 'Nome del vostro negozio'
      },
      details: {
        title: 'Dettagli del vostro negozio',
        paragraph: 'Parlateci del vostro negozio. Dove si trova? Cosa ha da offrire? Descrivite al meglio per dargli una buona immagine, oltre ad informare efficacemente i vostri visitatori delle vostre attività e metodi.',
        description_short_description: "Descrizione in una frase del vostro negozio. Di solito accompagna il titolo del vostro negozio ovunque quest'ultimo è visibile.",
        description_long_description: "Descrizione dettagliata del vostro negozio. Quest'ultimo è visibile solo sulla pagina del profilo del vostro negozio."
      },
      customization: {
        title: 'Personalizzate il vostro negozio',
        paragraph: "Personalizzate il vostro negozio per dargli un'identità unica!"
      },
      connect: {
        title: 'Create o collega il vostro account commerciante',
        paragraph: 'Create o collegate un account Stripe esistente su cui trasferire le entrate dalle vendite.'
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
    products: 'Prodotti',
    shop: 'Negozio'
  },

  /**
   * Stripe
   */
  stripe: {
    add_a_card: 'Aggiungete una carta di credito o di debito inserendo le informazioni corrispondenti qui sotto.'
  },

  /**
   * Toasts
   */
  toasts: {
    account_confirmed: 'Grazie! Il vostro account è ora verificato.',
    addresses: {
      created: 'Nuovo indirizzo creato con successo!',
      selected: 'Indirizzo selezionato.',
      updated: 'Indirizzo aggiornato!',
      deleted: 'Indirizzo cancellato correttamente'
    },
    cart: {
      has_changed: 'Uno o più articoli nel vostro carrello sono stati aggiornati, vi preghiamo di verificarli prima di ordinare.',
      item_added_singular: 'aggiunto al carrello!',
      item_added_plural: 'aggiunti al carrello!',
      product_removed: 'è stato rimosso.'
    },
    cc_added: 'La carta di credito o di debito è stata aggiunta al vostro account con successo!',
    general_error: "C'è stato un errore. Si prega, per favore, di ricaricare la pagina e riprovare.",
    is_already_in_use: 'è già in uso',
    is_available: 'è disponibile',
    logged_out: 'Ora siete disconnessi.',
    payment_methods: {
      updated: 'Scheda impostata come predefinita correttamente.',
      deleted: 'Scheda eliminata correttamente.'
    },
    products: {
      created: 'Il vostro prodotto è stato aggiunto correttamente.'
    },
    shop_avatar_updated: "L'avatar del vostro negozio è stato aggiornato con successo!",
    shop_cover_updated: 'La copertina del vostro negozio è stata aggiornata con successo!',
    subscribed: 'Grazie! Ora siete iscritti alla nostra newsletter!',
    terms: 'Devi prima accettare i termini e le condizioni prima di continuare.',
    theme_updated: 'Il tema del vostro negozio è stato aggiornato!',
    validation: 'Il modulo contiene errori. Si prega di correggerli e riprovare.',
    welcome: 'Benvenuto'
  }
}
